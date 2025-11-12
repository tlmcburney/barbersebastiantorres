import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { Upload, Trash2, Image as ImageIcon, AlertCircle } from 'lucide-react'

interface InstagramPost {
  id: string
  image_url: string
  post_order: number
  created_at: string
  updated_at: string
}

const InstagramManager: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('instagram_posts')
        .select('*')
        .order('post_order')

      if (error) throw error
      setPosts(data || [])
    } catch (err) {
      console.error('Error loading Instagram posts:', err)
      setError('Failed to load Instagram posts')
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, postOrder: number) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file')
      return
    }

    setUploading(true)
    setError('')

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `instagram-${postOrder}-${Date.now()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('instagram-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        })

      if (uploadError) throw uploadError

      const { data: publicUrlData } = supabase.storage
        .from('instagram-images')
        .getPublicUrl(filePath)

      const imageUrl = publicUrlData.publicUrl

      const existingPost = posts.find(p => p.post_order === postOrder)

      if (existingPost) {
        const oldFileName = existingPost.image_url.split('/').pop()
        if (oldFileName) {
          await supabase.storage
            .from('instagram-images')
            .remove([oldFileName])
        }

        const { error: updateError } = await supabase
          .from('instagram_posts')
          .update({ image_url: imageUrl })
          .eq('id', existingPost.id)

        if (updateError) throw updateError
      } else {
        const { error: insertError } = await supabase
          .from('instagram_posts')
          .insert({ image_url: imageUrl, post_order: postOrder })

        if (insertError) throw insertError
      }

      setMessage(`Image ${postOrder} uploaded successfully!`)
      setTimeout(() => setMessage(''), 3000)
      loadPosts()
    } catch (err) {
      console.error('Error uploading image:', err)
      setError('Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const deletePost = async (post: InstagramPost) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      const fileName = post.image_url.split('/').pop()
      if (fileName) {
        await supabase.storage
          .from('instagram-images')
          .remove([fileName])
      }

      const { error } = await supabase
        .from('instagram_posts')
        .delete()
        .eq('id', post.id)

      if (error) throw error

      setMessage('Image deleted successfully!')
      setTimeout(() => setMessage(''), 3000)
      loadPosts()
    } catch (err) {
      console.error('Error deleting post:', err)
      setError('Failed to delete image')
    }
  }

  const getPostByOrder = (order: number): InstagramPost | undefined => {
    return posts.find(p => p.post_order === order)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gold mb-2">Instagram Feed Manager</h2>
        <p className="text-gray-400">
          Upload and manage the 6 images displayed in the "Follow The Journey" section.
          These images represent your Instagram feed on the website.
        </p>
      </div>

      {message && (
        <div className="mb-4 p-4 bg-green-900/20 border-2 border-green-500 rounded-lg flex items-center gap-3">
          <ImageIcon className="w-5 h-5 text-green-400" />
          <p className="text-green-200">{message}</p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-900/20 border-2 border-red-500 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <p className="text-red-200">{error}</p>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((order) => {
            const post = getPostByOrder(order)
            return (
              <div
                key={order}
                className="bg-black border-2 border-zinc-800 rounded-lg p-4 hover:border-gold/50 transition-colors"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white mb-1">Position {order}</h3>
                  <p className="text-sm text-gray-500">
                    {order === 1 ? 'Most recent' : order === 6 ? 'Oldest' : `${7 - order}th most recent`}
                  </p>
                </div>

                {post ? (
                  <div>
                    <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden mb-3">
                      <img
                        src={post.image_url}
                        alt={`Instagram post ${order}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-2">
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, order)}
                          disabled={uploading}
                          className="hidden"
                        />
                        <div className="w-full px-3 py-2 bg-gold/20 border-2 border-gold hover:bg-gold/30 text-gold rounded text-center text-sm font-semibold transition-colors">
                          Replace
                        </div>
                      </label>
                      <button
                        onClick={() => deletePost(post)}
                        disabled={uploading}
                        className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded transition-colors disabled:opacity-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, order)}
                      disabled={uploading}
                      className="hidden"
                    />
                    <div className="aspect-square bg-zinc-900 rounded-lg border-2 border-dashed border-zinc-700 hover:border-gold flex flex-col items-center justify-center gap-3 transition-colors">
                      <Upload className="w-8 h-8 text-gray-500" />
                      <span className="text-gray-400 text-sm">Click to upload</span>
                    </div>
                  </label>
                )}
              </div>
            )
          })}
        </div>
      )}

      {uploading && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 border-2 border-gold rounded-lg p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mb-4"></div>
            <p className="text-white text-lg">Uploading image...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default InstagramManager
