/*
  # Create Videos Storage Bucket

  1. Storage Setup
    - Creates a public storage bucket named "videos"
    - Enables public access for video files
    - Sets up proper file size limits (100MB per file)
    
  2. Security Policies
    - Allows public SELECT (read/download) access to all video files
    - Allows authenticated INSERT (upload) for new videos
    - Allows authenticated UPDATE for video metadata
    - Allows authenticated DELETE for video removal
    
  3. Purpose
    - Hosts video content for "The Craft In Action" section
    - Provides CDN-backed delivery for optimal performance
    - Supports .mov, .mp4, .webm video formats
*/

-- Create the videos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  104857600, -- 100MB limit
  ARRAY['video/mp4', 'video/quicktime', 'video/webm', 'video/x-msvideo']
)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public users can view videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete videos" ON storage.objects;

-- Allow public read access to all videos
CREATE POLICY "Public users can view videos"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'videos');

-- Allow authenticated users to upload videos
CREATE POLICY "Authenticated users can upload videos"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'videos');

-- Allow authenticated users to update videos
CREATE POLICY "Authenticated users can update videos"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'videos')
WITH CHECK (bucket_id = 'videos');

-- Allow authenticated users to delete videos
CREATE POLICY "Authenticated users can delete videos"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'videos');