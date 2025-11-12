import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'How do I book an appointment?',
    answer: 'Click any "Book Now" button on this website to access our Google Calendar booking system. Select your preferred date and time, and you\'ll receive a confirmation email immediately.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We offer precision haircuts ($65), beard grooming ($45), hot lather shaves ($55), and signature combos ($85-100) that combine haircut with beard grooming or shave.'
  },
  {
    question: 'Where are you located?',
    answer: 'We\'re located in West Hollywood, CA. The exact address will be provided when you book your appointment.'
  },
  {
    question: 'What are your hours of operation?',
    answer: 'We\'re open Tuesday through Friday from 10am to 7pm, and Saturday from 9am to 5pm. We\'re closed on Sunday and Monday. Appointments are required.'
  },
  {
    question: 'Do you accept walk-ins?',
    answer: 'We operate by appointment only to ensure every client receives dedicated attention and the best possible experience. Please book online in advance.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We ask for at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another client.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit cards, debit cards, and digital payment methods including Venmo and Zelle.'
  },
  {
    question: 'How long does a typical haircut take?',
    answer: 'A precision haircut typically takes 45-60 minutes. Signature combo services can take 75-90 minutes. We never rush the process to ensure exceptional results.'
  }
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 bg-black fade-on-scroll opacity-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-16 text-gold">Frequently Asked Questions</h2>

        <p className="text-center text-gray-300 text-lg mb-12">
          Have questions? We have got answers. If you do not see your question here, feel free to reach out.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-950 border-2 border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Still have questions? Get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4244845684"
              className="btn-secondary px-8 py-3"
            >
              Call Now
            </a>
            <a
              href="sms:4244845684"
              className="btn-secondary px-8 py-3"
            >
              Send a Text
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
