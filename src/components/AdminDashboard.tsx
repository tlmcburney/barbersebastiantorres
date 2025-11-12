import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { LogOut, Image, Star, Briefcase, Video, Plus, Trash2, Save, X, Instagram } from 'lucide-react'
import type { GalleryImage, Testimonial, Service, Video as VideoType } from '../lib/supabase'
import InstagramManager from './InstagramManager'

interface AdminDashboardProps {
  onLogout: () => void
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'testimonials' | 'services' | 'videos' | 'instagram'>('gallery')
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [videos, setVideos] = useState<VideoType[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    loadData()
  }, [activeTab])

  const loadData = async () => {
    setLoading(true)
    try {
      if (activeTab === 'gallery') {
        const { data } = await supabase.from('gallery_images').select('*').order('display_order')
        setGalleryImages(data || [])
      } else if (activeTab === 'testimonials') {
        const { data } = await supabase.from('testimonials').select('*').order('display_order')
        setTestimonials(data || [])
      } else if (activeTab === 'services') {
        const { data } = await supabase.from('services').select('*').order('display_order')
        setServices(data || [])
      } else if (activeTab === 'videos') {
        const { data } = await supabase.from('videos').select('*').order('display_order')
        setVideos(data || [])
      }
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    onLogout()
  }

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  const deleteGalleryImage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    const { error } = await supabase.from('gallery_images').delete().eq('id', id)
    if (!error) {
      showMessage('Image deleted successfully')
      loadData()
    }
  }

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return

    const { error } = await supabase.from('testimonials').delete().eq('id', id)
    if (!error) {
      showMessage('Testimonial deleted successfully')
      loadData()
    }
  }

  const deleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return

    const { error } = await supabase.from('services').delete().eq('id', id)
    if (!error) {
      showMessage('Service deleted successfully')
      loadData()
    }
  }

  const deleteVideo = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return

    const { error } = await supabase.from('videos').delete().eq('id', id)
    if (!error) {
      showMessage('Video deleted successfully')
      loadData()
    }
  }

  const toggleActive = async (table: string, id: string, currentValue: boolean) => {
    const { error } = await supabase.from(table).update({ is_active: !currentValue }).eq('id', id)
    if (!error) {
      showMessage('Status updated successfully')
      loadData()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-zinc-950 border-b-2 border-gold/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-2 border-zinc-800 hover:border-gold rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {message && (
        <div className="fixed top-20 right-4 z-50 bg-gold text-black px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              activeTab === 'gallery'
                ? 'bg-gold text-black border-gold'
                : 'bg-zinc-950 text-white border-zinc-800 hover:border-gold'
            }`}
          >
            <Image className="w-5 h-5" />
            <span>Gallery</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              activeTab === 'testimonials'
                ? 'bg-gold text-black border-gold'
                : 'bg-zinc-950 text-white border-zinc-800 hover:border-gold'
            }`}
          >
            <Star className="w-5 h-5" />
            <span>Testimonials</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              activeTab === 'services'
                ? 'bg-gold text-black border-gold'
                : 'bg-zinc-950 text-white border-zinc-800 hover:border-gold'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Services</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              activeTab === 'videos'
                ? 'bg-gold text-black border-gold'
                : 'bg-zinc-950 text-white border-zinc-800 hover:border-gold'
            }`}
          >
            <Video className="w-5 h-5" />
            <span>Videos</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-colors ${
              activeTab === 'instagram'
                ? 'bg-gold text-black border-gold'
                : 'bg-zinc-950 text-white border-zinc-800 hover:border-gold'
            }`}
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram Feed</span>
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : (
          <div className="bg-zinc-950 border-2 border-gold/30 rounded-lg p-6">
            {activeTab === 'gallery' && (
              <div>
                <h2 className="text-2xl font-bold text-gold mb-6">Gallery Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.map((image) => (
                    <div key={image.id} className="bg-black border-2 border-zinc-800 rounded-lg p-4">
                      <img src={image.image_url} alt={image.alt_text} className="w-full h-48 object-cover rounded mb-3" />
                      <p className="text-sm text-gray-400 mb-2">{image.alt_text}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleActive('gallery_images', image.id, image.is_active)}
                          className={`flex-1 px-3 py-2 rounded ${
                            image.is_active ? 'bg-green-600' : 'bg-gray-600'
                          }`}
                        >
                          {image.is_active ? 'Active' : 'Inactive'}
                        </button>
                        <button
                          onClick={() => deleteGalleryImage(image.id)}
                          className="px-3 py-2 bg-red-600 rounded hover:bg-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div>
                <h2 className="text-2xl font-bold text-gold mb-6">Testimonials</h2>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-black border-2 border-zinc-800 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{testimonial.client_name}</h3>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleActive('testimonials', testimonial.id, testimonial.is_featured)}
                            className={`px-3 py-2 rounded text-sm ${
                              testimonial.is_featured ? 'bg-green-600' : 'bg-gray-600'
                            }`}
                          >
                            {testimonial.is_featured ? 'Featured' : 'Not Featured'}
                          </button>
                          <button
                            onClick={() => deleteTestimonial(testimonial.id)}
                            className="px-3 py-2 bg-red-600 rounded hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-300">{testimonial.review_text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <h2 className="text-2xl font-bold text-gold mb-6">Services</h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="bg-black border-2 border-zinc-800 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                          <p className="text-2xl font-bold text-gold mt-1">{service.price}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleActive('services', service.id, service.is_active)}
                            className={`px-3 py-2 rounded text-sm ${
                              service.is_active ? 'bg-green-600' : 'bg-gray-600'
                            }`}
                          >
                            {service.is_active ? 'Active' : 'Inactive'}
                          </button>
                          <button
                            onClick={() => deleteService(service.id)}
                            className="px-3 py-2 bg-red-600 rounded hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div>
                <h2 className="text-2xl font-bold text-gold mb-6">Videos</h2>
                <div className="space-y-4">
                  {videos.map((video) => (
                    <div key={video.id} className="bg-black border-2 border-zinc-800 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{video.title}</h3>
                          <p className="text-sm text-gray-400 mt-1">{video.filename}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleActive('videos', video.id, video.is_active)}
                            className={`px-3 py-2 rounded text-sm ${
                              video.is_active ? 'bg-green-600' : 'bg-gray-600'
                            }`}
                          >
                            {video.is_active ? 'Active' : 'Inactive'}
                          </button>
                          <button
                            onClick={() => deleteVideo(video.id)}
                            className="px-3 py-2 bg-red-600 rounded hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instagram' && <InstagramManager />}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
