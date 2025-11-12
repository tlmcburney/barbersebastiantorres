import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Upload, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function VideoUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      setUploadStatus('error');
      setMessage('Please select a video file');
      return;
    }

    // Validate file size (100MB max)
    if (file.size > 104857600) {
      setUploadStatus('error');
      setMessage('File size must be less than 100MB');
      return;
    }

    setUploading(true);
    setUploadStatus('idle');
    setMessage('');

    try {
      // Upload to Supabase storage
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('videos')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('videos')
        .getPublicUrl(data.path);

      setUploadedUrl(publicUrl);
      setUploadStatus('success');
      setMessage(`Video uploaded successfully! Path: ${data.path}`);
    } catch (error: any) {
      setUploadStatus('error');
      setMessage(`Upload failed: ${error.message}`);
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Uploader</h1>
          <p className="text-gray-600 mb-8">Upload videos to Supabase Storage</p>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              disabled={uploading}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className={`cursor-pointer flex flex-col items-center ${
                uploading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {uploading ? (
                <Loader className="w-12 h-12 text-blue-500 animate-spin mb-4" />
              ) : (
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
              )}
              <span className="text-lg font-medium text-gray-700 mb-2">
                {uploading ? 'Uploading...' : 'Click to upload video'}
              </span>
              <span className="text-sm text-gray-500">
                MP4, MOV, WEBM up to 100MB
              </span>
            </label>
          </div>

          {uploadStatus !== 'idle' && (
            <div
              className={`mt-6 p-4 rounded-lg flex items-start gap-3 ${
                uploadStatus === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              {uploadStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p
                  className={`text-sm font-medium ${
                    uploadStatus === 'success' ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {message}
                </p>
                {uploadedUrl && (
                  <div className="mt-3">
                    <p className="text-sm text-green-700 font-medium mb-2">Public URL:</p>
                    <input
                      type="text"
                      value={uploadedUrl}
                      readOnly
                      className="w-full px-3 py-2 text-sm bg-white border border-green-300 rounded font-mono"
                      onClick={(e) => e.currentTarget.select()}
                    />
                    <p className="text-xs text-green-600 mt-1">Click to select and copy</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">Instructions:</h3>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Click the upload area above</li>
              <li>Select your ARREGLOS.mp4 file</li>
              <li>Wait for upload to complete</li>
              <li>Copy the public URL that appears</li>
              <li>Use this URL in your VideoShowcase component</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
