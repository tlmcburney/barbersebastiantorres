/*
  # Create Service Offerings and Styles Tables

  1. New Tables
    - `service_offerings`
      - `id` (uuid, primary key) - Unique identifier for each service offering
      - `name` (text) - Service category name (e.g., "Haircuts", "Combinations")
      - `title` (text) - Display title (e.g., "Precision Haircuts")
      - `regular_price` (integer) - Regular price in dollars
      - `member_price` (integer) - Member-only discounted price in dollars
      - `description` (text) - Service description
      - `sort_order` (integer) - Display order (1-4)
      - `created_at` (timestamptz) - Creation timestamp
    
    - `offering_styles`
      - `id` (uuid, primary key) - Unique identifier for each style
      - `service_offering_id` (uuid, foreign key) - References service_offerings table
      - `name` (text) - Style name (e.g., "High Fade", "Low Fade")
      - `thumbnail_image_url` (text) - Path to thumbnail image
      - `sort_order` (integer) - Display order within service
      - `created_at` (timestamptz) - Creation timestamp
    
    - `offering_style_images`
      - `id` (uuid, primary key) - Unique identifier for each gallery image
      - `offering_style_id` (uuid, foreign key) - References offering_styles table
      - `image_url` (text) - Path to gallery image
      - `sort_order` (integer) - Display order in modal (1-6)
      - `created_at` (timestamptz) - Creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (service information is public)
    - No write policies needed (content managed via Supabase dashboard)
*/

-- Create service_offerings table
CREATE TABLE IF NOT EXISTS service_offerings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  regular_price integer NOT NULL,
  member_price integer NOT NULL,
  description text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create offering_styles table
CREATE TABLE IF NOT EXISTS offering_styles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_offering_id uuid NOT NULL REFERENCES service_offerings(id) ON DELETE CASCADE,
  name text NOT NULL,
  thumbnail_image_url text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create offering_style_images table
CREATE TABLE IF NOT EXISTS offering_style_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  offering_style_id uuid NOT NULL REFERENCES offering_styles(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE service_offerings ENABLE ROW LEVEL SECURITY;
ALTER TABLE offering_styles ENABLE ROW LEVEL SECURITY;
ALTER TABLE offering_style_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to service_offerings"
  ON service_offerings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to offering_styles"
  ON offering_styles FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to offering_style_images"
  ON offering_style_images FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_service_offerings_sort_order ON service_offerings(sort_order);
CREATE INDEX idx_offering_styles_service_id ON offering_styles(service_offering_id);
CREATE INDEX idx_offering_styles_sort_order ON offering_styles(sort_order);
CREATE INDEX idx_offering_style_images_style_id ON offering_style_images(offering_style_id);
CREATE INDEX idx_offering_style_images_sort_order ON offering_style_images(sort_order);