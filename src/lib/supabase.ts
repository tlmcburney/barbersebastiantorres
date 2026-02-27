import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const getPublicVideoUrl = (filename: string): string => {
  const { data } = supabase.storage
    .from('videos')
    .getPublicUrl(filename)

  return data.publicUrl
}

export interface ServiceStyle {
  id: string
  name: string
  thumbnail_image_url: string
  gallery_images: string[]
}

export interface ServiceOffering {
  id: string
  name: string
  title: string
  regular_price: number
  member_price: number
  description: string
  sort_order: number
  styles: ServiceStyle[]
}

export const getServiceOfferings = async (): Promise<ServiceOffering[]> => {
  const { data: offerings, error: offeringsError } = await supabase
    .from('service_offerings')
    .select('*')
    .order('sort_order')

  if (offeringsError) {
    console.error('Error fetching service offerings:', offeringsError)
    return []
  }

  const { data: styles, error: stylesError } = await supabase
    .from('offering_styles')
    .select('*')
    .order('sort_order')

  if (stylesError) {
    console.error('Error fetching offering styles:', stylesError)
    return []
  }

  const { data: images, error: imagesError } = await supabase
    .from('offering_style_images')
    .select('*')
    .order('sort_order')

  if (imagesError) {
    console.error('Error fetching style images:', imagesError)
    return []
  }

  return offerings.map(offering => ({
    ...offering,
    styles: styles
      .filter(style => style.service_offering_id === offering.id)
      .map(style => ({
        id: style.id,
        name: style.name,
        thumbnail_image_url: style.thumbnail_image_url,
        gallery_images: images
          .filter(img => img.offering_style_id === style.id)
          .map(img => img.image_url)
      }))
  }))
}
