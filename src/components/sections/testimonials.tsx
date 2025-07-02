'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'This platform has completely transformed our B2B marketing. The AI-powered lead extraction is incredible, and the automation features save us hours every week.',
      rating: 5,
      avatar: '/avatars/sarah.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The CRM integration is seamless, and the analytics help us make data-driven decisions. Our conversion rates have increased by 40% since we started using this platform.',
      rating: 5,
      avatar: '/avatars/michael.jpg',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Sales Manager',
      company: 'Global Solutions',
      content: 'The email automation features are game-changing. Our follow-up sequences are now perfectly timed and personalized, leading to much better engagement.',
      rating: 5,
      avatar: '/avatars/emma.jpg',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who have transformed their B2B marketing with our platform.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                &quot;{testimonial.content.replace(/'/g, "&apos;")}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">10K+</div>
            <div className="text-slate-600 dark:text-slate-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">500K+</div>
            <div className="text-slate-600 dark:text-slate-400">Leads Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">98%</div>
            <div className="text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24/7</div>
            <div className="text-slate-600 dark:text-slate-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 