/*
  # Create Service Categories Table

  1. New Tables
    - `service_categories`
      - `id` (uuid, primary key) - Unique identifier for each service category
      - `title` (text) - Name of the service (e.g., "Low Fade", "High Fade")
      - `description` (text) - Brief description of the service
      - `cover_image` (text) - URL/path to the main tile cover image
      - `image_1` (text) - First detail image
      - `image_2` (text) - Second detail image
      - `image_3` (text) - Third detail image
      - `display_order` (integer) - Order in which categories should appear
      - `created_at` (timestamptz) - Timestamp when record was created
      - `updated_at` (timestamptz) - Timestamp when record was last updated

  2. Security
    - Enable RLS on `service_categories` table
    - Add policy for public read access (anyone can view services)
    - Add policy for authenticated admin to insert/update/delete
*/

CREATE TABLE IF NOT EXISTS service_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  cover_image text NOT NULL,
  image_1 text NOT NULL,
  image_2 text NOT NULL,
  image_3 text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view service categories (public access)
CREATE POLICY "Public can view service categories"
  ON service_categories
  FOR SELECT
  USING (true);

-- Policy: Authenticated users can insert service categories
CREATE POLICY "Authenticated users can insert service categories"
  ON service_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update service categories
CREATE POLICY "Authenticated users can update service categories"
  ON service_categories
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete service categories
CREATE POLICY "Authenticated users can delete service categories"
  ON service_categories
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on display_order for efficient sorting
CREATE INDEX IF NOT EXISTS idx_service_categories_display_order 
  ON service_categories(display_order);