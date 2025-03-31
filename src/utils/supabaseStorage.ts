
import { supabase } from "@/integrations/supabase/client";

const BUCKET_NAME = 'images';
const PUBLIC_URL = `https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/${BUCKET_NAME}`;

/**
 * Get the public URL for a file in the Supabase storage
 * @param filePath The path to the file in the storage bucket
 * @returns The public URL for the file
 */
export const getPublicUrl = (filePath: string): string => {
  if (!filePath) return '';
  
  // If it's already a full URL (e.g. https://...), return it as is
  if (filePath.startsWith('http')) {
    return filePath;
  }
  
  // Clean up the path (remove leading slash if present)
  const cleanPath = filePath.replace(/^\//, '');
  return `${PUBLIC_URL}/${cleanPath}`;
};

/**
 * Upload a file to Supabase storage
 * @param file The file to upload
 * @param path The path where to store the file (optional)
 * @returns The public URL of the uploaded file or null if upload failed
 */
export const uploadFile = async (
  file: File,
  path?: string
): Promise<string | null> => {
  try {
    // Generate a unique filename if no path specified
    const filePath = path || `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });
    
    if (error) {
      console.error('Error uploading file:', error);
      return null;
    }
    
    // Return the public URL
    return getPublicUrl(data.path);
  } catch (error) {
    console.error('Error in uploadFile:', error);
    return null;
  }
};

/**
 * List all files in a Supabase storage bucket directory
 * @param folder Optional folder path within the bucket
 * @returns Array of file paths or empty array if error
 */
export const listFiles = async (folder?: string): Promise<string[]> => {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(folder || '');
    
    if (error) {
      console.error('Error listing files:', error);
      return [];
    }
    
    // Return file paths
    return data.map(file => getPublicUrl(folder ? `${folder}/${file.name}` : file.name));
  } catch (error) {
    console.error('Error in listFiles:', error);
    return [];
  }
};
