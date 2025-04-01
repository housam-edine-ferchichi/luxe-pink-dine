
import React, { useState, useEffect } from 'react';
import { getPublicUrl } from '@/utils/supabaseStorage';

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

  // Handle image loading with improved fallbacks
  useEffect(() => {
    const img = new Image();
    
    // Clean up the URL for proper loading
    let normalizedSrc = src;
    
    // Check if it's an unsplash URL which is reliable
    if (src.includes('unsplash.com')) {
      normalizedSrc = src;
    } 
    // Handle Supabase URLs
    else if (src.includes('sjdunwlftwdzeetlxpxj.supabase.co')) {
      normalizedSrc = src;
    }
    // If it's a relative path in the images folder
    else if (src.includes('/images/') || src.startsWith('images/')) {
      // Use the Supabase storage URL helper
      const cleanPath = src.replace(/^\.?\/?images\//, '');
      normalizedSrc = getPublicUrl(cleanPath);
    }
    
    console.log(`Attempting to load image from: ${normalizedSrc}`);
    
    img.src = normalizedSrc;
    
    img.onload = () => {
      setImgSrc(normalizedSrc);
      setIsLoading(false);
      setError(false);
      console.log(`Successfully loaded image: ${normalizedSrc}`);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image from path: ${normalizedSrc}`);
      
      // First fallback - try direct URL to Supabase
      if (!src.includes('unsplash.com') && !src.includes('sjdunwlftwdzeetlxpxj.supabase.co')) {
        const supabaseUrl = getPublicUrl(src);
        console.log(`Trying Supabase URL fallback: ${supabaseUrl}`);
        
        const altImg = new Image();
        altImg.src = supabaseUrl;
        
        altImg.onload = () => {
          setImgSrc(supabaseUrl);
          setIsLoading(false);
          setError(false);
          console.log(`Successfully loaded from Supabase URL: ${supabaseUrl}`);
        };
        
        altImg.onerror = () => {
          // Second fallback - try as absolute URL with correct base path
          const fallback2 = `/${src.replace(/^\//, '')}`;
          console.log(`Trying base path fallback: ${fallback2}`);
          
          const altImg2 = new Image();
          altImg2.src = fallback2;
          
          altImg2.onload = () => {
            setImgSrc(fallback2);
            setIsLoading(false);
            setError(false);
            console.log(`Successfully loaded from fallback path: ${fallback2}`);
          };
          
          altImg2.onerror = () => {
            // Last fallback - use placeholder image or show error
            console.error(`All fallbacks failed for: ${src}`);
            setError(true);
            setIsLoading(false);
          };
        };
      } else {
        // For Unsplash images or Supabase URLs that fail, show error
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
      onError={() => {
        console.error(`Runtime error loading image: ${imgSrc}`);
        setError(true);
      }}
    />
  );
};

export default ImageOptimizer;
