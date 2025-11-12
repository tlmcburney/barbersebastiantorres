import React, { useState } from 'react'
import { Mail, User, Phone, Calendar, MessageSquare, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  preferredDate: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

      const response = await fetch(`${supabaseUrl}/functions/v1/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        message: ''
      })
    } catch (err) {
      setError('Failed to send message. Please try calling or texting instead.')
      console.error('Contact form error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
        <div className="max-w-2xl mx-auto">
          <div className="bg-black border-2 border-gold rounded-lg p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border-2 border-gold mb-6">
              <CheckCircle className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl font-bold text-gold mb-4">Message Sent!</h2>
            <p className="text-gray-300 text-lg mb-8">
              Thank you for reaching out. Sebastian will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950 fade-on-scroll opacity-0">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title mb-8 text-gold">Get In Touch</h2>

        <p className="text-center text-gray-300 text-lg mb-12">
          Have questions or want to schedule a consultation? Send us a message and we'll get back to you soon.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border-2 border-red-500 rounded-lg">
            <p className="text-red-200 text-center">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black border-2 border-gold/30 rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="flex items-center gap-2 text-white font-semibold mb-2">
              <User className="w-5 h-5 text-gold" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-950 border-2 border-zinc-800 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
              placeholder="John Doe"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-white font-semibold mb-2">
              <Mail className="w-5 h-5 text-gold" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-950 border-2 border-zinc-800 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
              placeholder="john@example.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="phone" className="flex items-center gap-2 text-white font-semibold mb-2">
              <Phone className="w-5 h-5 text-gold" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-950 border-2 border-zinc-800 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
              placeholder="(310) 555-0123"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="preferredDate" className="flex items-center gap-2 text-white font-semibold mb-2">
              <Calendar className="w-5 h-5 text-gold" />
              Preferred Date (Optional)
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-950 border-2 border-zinc-800 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="message" className="flex items-center gap-2 text-white font-semibold mb-2">
              <MessageSquare className="w-5 h-5 text-gold" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-zinc-950 border-2 border-zinc-800 rounded-lg text-white focus:border-gold focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your grooming needs or ask any questions..."
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3108827779" className="btn-secondary">
              Call Now
            </a>
            <a href="sms:3108827779" className="btn-secondary">
              Send Text
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
