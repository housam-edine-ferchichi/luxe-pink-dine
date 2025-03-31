
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadFile } from '@/utils/supabaseStorage';
import { useToast } from "@/components/ui/use-toast";

interface ImageUploaderProps {
  onUploadComplete?: (url: string) => void;
  folder?: string;
  label?: string;
  accept?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onUploadComplete,
  folder = '',
  label = 'Upload Image',
  accept = 'image/*'
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an image to upload.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);
      
      // Create path with folder if provided
      const path = folder ? `${folder}/${Date.now()}_${file.name.replace(/\s+/g, '_')}` : undefined;
      
      const url = await uploadFile(file, path);
      
      if (!url) {
        throw new Error('Upload failed');
      }

      toast({
        title: "Upload successful",
        description: "Your image has been uploaded.",
      });

      if (onUploadComplete) {
        onUploadComplete(url);
      }
      
      // Reset file selection
      setFile(null);
      
      // Reset file input by clearing its value
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your image.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="image-upload">{label}</Label>
        <Input
          id="image-upload"
          type="file"
          accept={accept}
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </div>
      
      {file && (
        <div className="bg-muted p-2 rounded-md">
          <p className="text-sm">Selected: {file.name}</p>
        </div>
      )}
      
      <Button 
        onClick={handleUpload}
        disabled={!file || isUploading}
        className="w-full"
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </Button>
    </div>
  );
};

export default ImageUploader;
