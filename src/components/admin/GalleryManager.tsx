
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import ImageUploader from './ImageUploader';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { GalleryImage } from "@/types/gallery";
import { getPublicUrl } from '@/utils/supabaseStorage';

const GalleryManager = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  const fetchImages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      const transformedData = data?.map(img => ({
        id: img.id,
        src: getPublicUrl(img.image_url),
        alt: img.title || 'Gallery image',
        category: img.description?.toLowerCase().includes('interior') ? 'interior' : 
                img.description?.toLowerCase().includes('drink') ? 'drinks' :
                img.description?.toLowerCase().includes('event') ? 'events' :
                img.description?.toLowerCase().includes('kitchen') ? 'kitchen' : 'food'
      })) || [];
      
      setImages(transformedData);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      toast({
        title: "Error loading images",
        description: "There was a problem fetching gallery images.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchImages();
  }, []);
  
  const handleImageUpload = async (url: string) => {
    try {
      // Insert the new image into the gallery_images table
      const { error } = await supabase
        .from('gallery_images')
        .insert({
          image_url: url,
          title: 'New gallery image',
          description: 'food'  // Default category
        });
      
      if (error) throw error;
      
      toast({
        title: "Image added to gallery",
        description: "The image has been successfully added to the gallery.",
      });
      
      // Refresh the image list
      fetchImages();
      
    } catch (error) {
      console.error('Error adding image to gallery:', error);
      toast({
        title: "Failed to add image",
        description: "There was a problem adding the image to the gallery.",
        variant: "destructive",
      });
    }
  };
  
  const handleDeleteImage = async (id: string | number) => {
    try {
      const { error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: "Image deleted",
        description: "The image has been removed from the gallery.",
      });
      
      // Update the local state to remove the deleted image
      setImages(images.filter(img => img.id !== id));
      
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Delete failed",
        description: "There was a problem deleting the image.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-midnight-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Upload New Gallery Image</h2>
        <ImageUploader 
          onUploadComplete={handleImageUpload}
          folder="gallery"
          label="Select an image for the gallery"
        />
      </div>
      
      <div className="bg-white dark:bg-midnight-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Gallery Images</h2>
        
        {loading ? (
          <div className="text-center py-8">Loading images...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Button 
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteImage(image.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
            
            {images.length === 0 && !loading && (
              <div className="col-span-full text-center py-8">
                No images in the gallery yet. Upload some images to get started.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryManager;
