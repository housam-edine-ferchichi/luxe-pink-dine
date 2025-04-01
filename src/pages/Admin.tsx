
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GalleryManager from "@/components/admin/GalleryManager";
import ImageBatchUploader from "@/components/admin/ImageBatchUploader";

const Admin = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="gallery">Gallery Manager</TabsTrigger>
          <TabsTrigger value="batch-upload">Batch Upload</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery">
          <GalleryManager />
        </TabsContent>
        
        <TabsContent value="batch-upload">
          <ImageBatchUploader />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
