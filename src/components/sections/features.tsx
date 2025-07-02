'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon,
  EnvelopeIcon,
  LinkIcon,
  ChartBarIcon,
  CogIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export function FeaturesSection() {
  const { t } = useTranslation()

  const features = [
    {
      icon: MagnifyingGlassIcon,
      title: t('features.lead_extraction.title'),
      description: t('features.lead_extraction.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: EnvelopeIcon,
      title: t('features.email_automation.title'),
      description: t('features.email_automation.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: LinkIcon,
      title: t('features.crm_integration.title'),
      description: t('features.crm_integration.description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: SparklesIcon,
      title: t('features.social_media.title'),
      description: t('features.social_media.description'),
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: ChartBarIcon,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: CogIcon,
      title: t('features.automation.title'),
      description: t('features.automation.description'),
      color: 'from-teal-500 to-blue-500',
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
            {t('features.title')}
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
            Explore All Features
            <SparklesIcon className="w-5 h-5 ml-2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 