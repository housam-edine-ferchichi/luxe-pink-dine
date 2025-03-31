
import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryManager from '@/components/admin/GalleryManager';
import ImageUploader from '@/components/admin/ImageUploader';
import { getPublicUrl } from '@/utils/supabaseStorage';

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-midnight-950 pt-24 px-6 pb-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="gallery">
          <TabsList className="mb-8">
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="uploads">General Uploads</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gallery">
            <GalleryManager />
          </TabsContent>
          
          <TabsContent value="uploads">
            <div className="bg-white dark:bg-midnight-800 p-6 rounded-xl shadow-md max-w-md">
              <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
              <ImageUploader 
                onUploadComplete={(url) => {
                  console.log('Uploaded image URL:', url);
                  // Copy URL to clipboard
                  navigator.clipboard.writeText(url)
                    .then(() => alert(`URL copied to clipboard: ${url}`))
                    .catch(err => console.error('Failed to copy URL: ', err));
                }}
              />
              <p className="mt-4 text-sm text-gray-500">
                The URL of the uploaded image will be copied to your clipboard automatically.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
