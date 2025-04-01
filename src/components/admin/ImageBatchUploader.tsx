
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { uploadAllPublicImages } from "@/utils/uploadLocalImages";

const ImageBatchUploader: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [results, setResults] = useState<{
    successful: string[];
    failed: { path: string; error: string }[];
  } | null>(null);

  const handleUpload = async () => {
    setIsUploading(true);
    try {
      const uploadResults = await uploadAllPublicImages();
      setResults(uploadResults);
    } catch (error) {
      console.error("Error during batch upload:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Batch Upload Local Images</CardTitle>
        <CardDescription>
          Upload all images from the public/images directory to Supabase Storage
        </CardDescription>
      </CardHeader>
      <CardContent>
        {results && (
          <div className="space-y-4 mt-4">
            <Alert variant="default" className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle>Upload Summary</AlertTitle>
              <AlertDescription>
                Successfully uploaded {results.successful.length} images
              </AlertDescription>
            </Alert>
            
            {results.failed.length > 0 && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Failed Uploads</AlertTitle>
                <AlertDescription>
                  <p className="mb-2">{results.failed.length} images failed to upload</p>
                  <ul className="list-disc pl-5 text-sm">
                    {results.failed.slice(0, 5).map((fail, i) => (
                      <li key={i} className="mb-1">
                        {fail.path} - {fail.error}
                      </li>
                    ))}
                    {results.failed.length > 5 && (
                      <li>...and {results.failed.length - 5} more</li>
                    )}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
            
            {results.successful.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Recently uploaded images:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {results.successful.slice(0, 6).map((url, i) => (
                    <img 
                      key={i} 
                      src={url} 
                      alt={`Uploaded ${i}`} 
                      className="w-full h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
                {results.successful.length > 6 && (
                  <p className="text-sm text-gray-500 mt-2">
                    ...and {results.successful.length - 6} more
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleUpload} 
          disabled={isUploading}
          className="w-full"
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            'Upload All Local Images to Supabase'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ImageBatchUploader;
