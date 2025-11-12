/*
  # Create Instagram Posts Management System

  1. New Tables
    - `instagram_posts`
      - `id` (uuid, primary key) - Unique identifier for each post
      - `image_url` (text) - URL to the image in Supabase storage
      - `post_order` (integer) - Display order (1-6)
      - `created_at` (timestamptz) - When the post was added
      - `updated_at` (timestamptz) - When the post was last updated
  
  2. Security
    - Enable RLS on `instagram_posts` table
    - Add policy for public read access (anyone can view the feed)
    - Add policy for authenticated admin users to insert/update/delete posts
  
  3. Important Notes
    - Only 6 posts should be displayed at any time
    - post_order determines the display sequence (1 is first, 6 is last)
    - Admin dashboard will manage these posts
*/

CREATE TABLE IF NOT EXISTS instagram_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  post_order integer NOT NULL CHECK (post_order >= 1 AND post_order <= 6),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE instagram_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view Instagram posts (public access)
CREATE POLICY "Anyone can view Instagram posts"
  ON instagram_posts
  FOR SELECT
  USING (true);

-- Policy: Only authenticated users can insert posts
CREATE POLICY "Authenticated users can insert Instagram posts"
  ON instagram_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can update posts
CREATE POLICY "Authenticated users can update Instagram posts"
  ON instagram_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete posts
CREATE POLICY "Authenticated users can delete Instagram posts"
  ON instagram_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Create unique constraint on post_order to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS instagram_posts_order_idx ON instagram_posts(post_order);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_instagram_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_instagram_posts_timestamp ON instagram_posts;
CREATE TRIGGER update_instagram_posts_timestamp
  BEFORE UPDATE ON instagram_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_instagram_posts_updated_at();