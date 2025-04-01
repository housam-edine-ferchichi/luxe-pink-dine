
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { GalleryImage } from "@/types/gallery";
import { getPublicUrl } from '@/utils/supabaseStorage';

export const useGalleryImages = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  
  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      if (data && data.length > 0) {
        // Transform the data to match the format we need
        const transformedData = data.map(img => ({
          id: img.id,
          src: getPublicUrl(img.image_url),
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
        description: "There was a problem loading the gallery images. Using fallback images.",
        variant: "destructive",
      });
      setGalleryImages(fallbackImages);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchGalleryImages();
  }, []);

  return {
    galleryImages: galleryImages.length > 0 ? galleryImages : fallbackImages,
    loading,
    fetchGalleryImages,
  };
};

// Use guaranteed working images from Unsplash with optimized sizes as fallbacks
export const fallbackImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//483936436_18487917181058803_7771839338171818453_n.webp',
    alt: 'Gourmande special cake',
    category: 'food'
  },
  {
    id: 2,
    src: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//484984049_17905482798128083_6103084717711498149_n.jpg',
    alt: 'Special event announcement',
    category: 'events'
  },
  {
    id: 3,
    src: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//483459635_17949787118941329_1338514172780654550_n.jpg',
    alt: 'Birthday celebration',
    category: 'events'
  },
  {
    id: 4,
    src: 'https://sjdunwlftwdzeetlxpxj.supabase.co/storage/v1/object/public/images//480325040_17947144496941329_7830754025186764662_n.jpg',
    alt: 'Eco-friendly celebration cake',
    category: 'food'
  }
];
