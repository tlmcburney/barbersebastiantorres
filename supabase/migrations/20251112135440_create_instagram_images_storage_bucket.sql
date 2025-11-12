/*
  # Create Instagram Images Storage Bucket

  1. Storage
    - Create public bucket called 'instagram-images' for storing Instagram feed images
    - Allow public read access so images display on the website
    - Restrict uploads to authenticated users only
  
  2. Security Policies
    - Anyone can view/download images (public access)
    - Only authenticated users can upload images
    - Only authenticated users can update/delete images
  
  3. Important Notes
    - Images will be stored with unique filenames to prevent conflicts
    - Admin dashboard will handle the upload process
    - Maximum 6 images should be maintained at any time
*/

-- Create the instagram-images storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('instagram-images', 'instagram-images', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view Instagram images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload Instagram images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update Instagram images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete Instagram images" ON storage.objects;

-- Policy: Anyone can view/download images from instagram-images bucket
CREATE POLICY "Public can view Instagram images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'instagram-images');

-- Policy: Authenticated users can upload images to instagram-images bucket
CREATE POLICY "Authenticated users can upload Instagram images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'instagram-images');

-- Policy: Authenticated users can update images in instagram-images bucket
CREATE POLICY "Authenticated users can update Instagram images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'instagram-images')
  WITH CHECK (bucket_id = 'instagram-images');

-- Policy: Authenticated users can delete images from instagram-images bucket
CREATE POLICY "Authenticated users can delete Instagram images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'instagram-images');