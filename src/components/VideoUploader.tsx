import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Upload, CheckCircle, XCircle, Loader } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface VideoUploaderProps {
  onUploadComplete?: (url: string, fileName: string) => void;
}

export default function VideoUploader({ onUploadComplete }: VideoUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedVideos, setUploadedVideos] = useState<Array<{ name: string; url: string }>>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setError(null);
    setUploading(true);
    setUploadProgress(0);

    try {
      const file = files[0];

      // Validate file type
      const validTypes = ['video/mp4', 'video/quicktime', 'video/webm', 'video/x-msvideo'];
      if (!validTypes.includes(file.type)) {
        throw new Error('Please upload a valid video file (.mp4, .mov, .webm)');
      }

      // Validate file size (100MB max)
      const maxSize = 100 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new Error('File size must be less than 100MB');
      }

      // Create a unique filename to prevent overwrites
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `craft-videos/${fileName}`;

      // Upload to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from('videos')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw uploadError;
      }

      // Get the public URL
      const { data: urlData } = supabase.storage
        .from('videos')
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;

      // Add to uploaded videos list
      const newVideo = { name: file.name, url: publicUrl };
      setUploadedVideos(prev => [...prev, newVideo]);

      // Call the callback if provided
      if (onUploadComplete) {
        onUploadComplete(publicUrl, file.name);
      }

      setUploadProgress(100);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload video');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload Videos</h2>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-600 transition-colors">
        <label htmlFor="video-upload" className="cursor-pointer">
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium text-gray-700 mb-2">
            Click to upload your video
          </p>
          <p className="text-sm text-gray-500">
            Supports .MOV, .MP4, .WEBM (Max 100MB)
          </p>
          <input
            id="video-upload"
            type="file"
            accept="video/mp4,video/quicktime,video/webm,video/x-msvideo"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      {/* Upload Progress */}
      {uploading && (
        <div className="mt-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Loader className="w-5 h-5 animate-spin text-amber-600" />
            <span className="text-gray-700">Uploading... {uploadProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-amber-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-800">Upload Failed</p>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Uploaded Videos List */}
      {uploadedVideos.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Uploaded Videos</h3>
          <div className="space-y-3">
            {uploadedVideos.map((video, index) => (
              <div
                key={index}
                className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-green-800">{video.name}</p>
                  <p className="text-sm text-green-700 truncate">{video.url}</p>
                  <button
                    onClick={() => navigator.clipboard.writeText(video.url)}
                    className="mt-2 text-xs text-green-600 hover:text-green-800 underline"
                  >
                    Copy URL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Instructions:</h4>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Click the upload area above to select your video file</li>
          <li>Wait for the upload to complete (this may take a few minutes)</li>
          <li>Copy the video URL from the success message</li>
          <li>The video URL will be automatically used in the showcase section</li>
        </ol>
      </div>
    </div>
  );
}
