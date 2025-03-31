
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

  // Handle image loading
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setError(true);
      setIsLoading(false);
      
      // Try to load the image with different path patterns
      if (src.startsWith('/')) {
        const newSrc = `.${src}`;
        console.log(`Trying alternative path: ${newSrc}`);
        const altImg = new Image();
        altImg.src = newSrc;
        altImg.onload = () => {
          setImgSrc(newSrc);
          setError(false);
        };
      } else if (src.startsWith('./')) {
        const newSrc = src.substring(2);
        console.log(`Trying alternative path without ./: ${newSrc}`);
        const altImg = new Image();
        altImg.src = newSrc;
        altImg.onload = () => {
          setImgSrc(newSrc);
          setError(false);
        };
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
    />
  );
};

export default ImageOptimizer;
