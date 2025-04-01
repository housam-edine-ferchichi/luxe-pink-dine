
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

/**
 * Upload all images from the provided array of image paths
 * @param imagePaths Array of file paths to upload
 * @returns Object containing successful and failed uploads
 */
export const uploadLocalImagesToSupabase = async (imagePaths: string[]) => {
  const results = {
    successful: [] as string[],
    failed: [] as { path: string, error: string }[]
  };
  
  for (const path of imagePaths) {
    try {
      // Get the file from the path
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const file = new File([blob], path.split('/').pop() || 'unknown.png', { type: blob.type });
      
      // Generate a unique filename
      const filename = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
      
      // Upload to Supabase
      const { data, error } = await supabase.storage
        .from('images')
        .upload(filename, file, {
          cacheControl: '3600',
          upsert: true
        });
      
      if (error) {
        throw error;
      }
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(data.path);
        
      results.successful.push(publicUrl);
      console.log(`Successfully uploaded: ${path} → ${publicUrl}`);
    } catch (error) {
      console.error(`Error uploading ${path}:`, error);
      results.failed.push({ 
        path, 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  }
  
  return results;
};

/**
 * Helper function to upload all images from the public/images folder
 */
export const uploadAllPublicImages = async () => {
  try {
    // This will only work during development - we need to get all image files
    // For simplicity, we're hardcoding the paths to the images we know exist
    const imagePaths = [
      '/images/menu/Cappuccino.png',
      '/images/menu/HBB.png',
      '/images/menu/Jade.png',
      '/images/menu/Muffin.png',
      '/images/menu/Noisette.png',
      '/images/menu/Tartine saumon avocat.png',
      '/images/menu/americain.png',
      '/images/menu/bagel.png',
      '/images/menu/brownie.png',
      '/images/menu/cafe long.png',
      '/images/menu/café viennois.png',
      '/images/menu/cake.png',
      '/images/menu/carrot cake.png',
      '/images/menu/coockie.png',
      '/images/menu/croque jombon.png',
      '/images/menu/croque truffé.png',
      '/images/menu/cupcake.png',
      '/images/menu/egg brouillés bacon cheddar.png',
      '/images/menu/egg muffin bacon cheddar.png',
      '/images/menu/egg muffin cheddar.png',
      '/images/menu/espresso.png',
      '/images/menu/gateau.png',
      '/images/menu/hot chocolate sucette.png',
      '/images/menu/jade host.png',
      '/images/menu/kusmi tea.png',
      '/images/menu/latté.png',
      '/images/menu/mac & cheese.png',
      '/images/menu/ouefs brouillés cheddar.png',
      '/images/menu/ouefs brouillés.png',
      '/images/menu/smoothie bowl.png',
      '/images/menu/tartine pink avocado.png',
      '/images/menu/trio pancakes.png'
    ];
    
    toast({
      title: "Starting image upload",
      description: `Attempting to upload ${imagePaths.length} images to Supabase`,
    });
    
    const results = await uploadLocalImagesToSupabase(imagePaths);
    
    toast({
      title: "Upload complete",
      description: `Successfully uploaded ${results.successful.length} images. Failed: ${results.failed.length}`,
      variant: results.failed.length > 0 ? "destructive" : "default",
    });
    
    return results;
  } catch (error) {
    console.error("Error in uploadAllPublicImages:", error);
    toast({
      title: "Upload failed",
      description: error instanceof Error ? error.message : "Unknown error occurred",
      variant: "destructive",
    });
    
    return {
      successful: [],
      failed: [{ path: "batch operation", error: String(error) }]
    };
  }
};

/**
 * For convenience, add a function that can be called from the browser console
 */
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.uploadAllImagesToSupabase = uploadAllPublicImages;
}
