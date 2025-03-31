
import React, { useState, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Handle image loading with multiple fallbacks
  useEffect(() => {
    const img = new Image();
    
    // Try to normalize the URL for GitHub Pages and Lovable app
    let normalizedSrc = src;
    
    // Handle paths that might start with "./images" which don't work in production
    if (src.startsWith('./images')) {
      normalizedSrc = src.replace('./images', 'https://raw.githubusercontent.com/yourusername/luxe-pink-dine/main/images');
    }
    
    // For relative paths that don't include the full URL
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      // For images that might be in the public folder
      if (src.startsWith('/')) {
        normalizedSrc = `https://luxe-pink-dine.lovable.app${src}`;
      } else {
        normalizedSrc = `https://luxe-pink-dine.lovable.app/${src}`;
      }
    }
    
    img.src = normalizedSrc;
    console.log(`Loading image from: ${normalizedSrc}`);
    
    img.onload = () => {
      setImgSrc(normalizedSrc);
      setIsLoading(false);
      setError(false);
      console.log(`Successfully loaded image: ${normalizedSrc}`);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${normalizedSrc}`);
      
      // If the image fails to load, try alternative sources
      if (src.includes('/menu/')) {
        // Try to use GitHub raw content URL
        const githubSrc = `https://raw.githubusercontent.com/yourusername/luxe-pink-dine/main${src.startsWith('/') ? src : '/' + src}`;
        console.log(`Trying GitHub URL: ${githubSrc}`);
        
        const altImg = new Image();
        altImg.src = githubSrc;
        
        altImg.onload = () => {
          setImgSrc(githubSrc);
          setIsLoading(false);
          setError(false);
          console.log(`Successfully loaded from GitHub: ${githubSrc}`);
        };
        
        altImg.onerror = () => {
          console.error(`Failed to load from GitHub: ${githubSrc}`);
          setError(true);
          setIsLoading(false);
        };
      } else {
        // If it's an Unsplash image or another external source that's failing
        setError(true);
        setIsLoading(false);
      }
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (isLoading) {
    return (
      <div 
        className={`${className} bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center`}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className={`${className} bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-center p-4`}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <div>
          <svg className="w-10 h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="text-sm text-gray-500 dark:text-gray-400">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={(e) => {
        console.error(`Runtime error loading image: ${imgSrc}`);
        setError(true);
      }}
    />
  );
};

export default ImageOptimizer;
