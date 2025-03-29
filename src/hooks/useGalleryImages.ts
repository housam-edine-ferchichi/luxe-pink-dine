
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { GalleryImage } from "@/types/gallery";

export const useGalleryImages = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  
  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*');
      
      if (error) {
        throw error;
      }
      
      if (data) {
        // Transform the data to match the format we need
        const transformedData = data.map(img => ({
          id: img.id,
          src: img.image_url,
          alt: img.title || 'Gallery image',
          category: img.description?.toLowerCase().includes('interior') ? 'interior' : 
                  img.description?.toLowerCase().includes('drink') ? 'drinks' :
                  img.description?.toLowerCase().includes('event') ? 'events' :
                  img.description?.toLowerCase().includes('kitchen') ? 'kitchen' : 'food'
        }));
        setGalleryImages(transformedData);
      }
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      toast({
        title: "Error loading gallery",
        description: "There was a problem loading the gallery images. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchGalleryImages();
  }, []);

  return {
    galleryImages,
    loading,
    fetchGalleryImages,
  };
};

// Fallback images for development
export const fallbackImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Restaurant interior',
    category: 'interior'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1546195885-9a82a6bc621a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
    alt: 'Table setting',
    category: 'interior'
  }
];
