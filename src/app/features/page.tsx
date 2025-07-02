'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  EnvelopeIcon, 
  UserGroupIcon, 
  CogIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function FeaturesPage() {
  const { t } = useTranslation()

  const features = [
    {
      icon: ChartBarIcon,
      title: t('features.analytics.title', 'Advanced Analytics'),
      description: t('features.analytics.description', 'Track campaign performance with detailed insights and real-time metrics'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: EnvelopeIcon,
      title: t('features.email.title', 'Email Automation'),
      description: t('features.email.description', 'Create sophisticated email workflows with AI-powered personalization'),
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: UserGroupIcon,
      title: t('features.leads.title', 'Lead Generation'),
      description: t('features.leads.description', 'Extract and qualify leads from multiple sources automatically'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: CogIcon,
      title: t('features.integrations.title', 'CRM Integrations'),
      description: t('features.integrations.description', 'Seamlessly connect with popular CRM platforms'),
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: GlobeAltIcon,
      title: t('features.social.title', 'Social Media Management'),
      description: t('features.social.description', 'Manage all your social media accounts from one platform'),
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: ShieldCheckIcon,
      title: t('features.security.title', 'Enterprise Security'),
      description: t('features.security.description', 'Bank-level security with SOC 2 compliance and data encryption'),
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: BoltIcon,
      title: t('features.ai.title', 'AI-Powered Insights'),
      description: t('features.ai.description', 'Get intelligent recommendations and predictive analytics'),
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: DocumentTextIcon,
      title: t('features.reports.title', 'Custom Reports'),
      description: t('features.reports.description', 'Generate comprehensive reports and share insights with your team'),
      color: 'from-pink-500 to-rose-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            >
              {t('features.hero.title', 'Powerful Features for Modern B2B Marketing')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              {t('features.hero.subtitle', 'Everything you need to create, manage, and optimize your B2B marketing campaigns')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            {t('features.cta.title', 'Ready to Transform Your B2B Marketing?')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('features.cta.subtitle', 'Start your free trial today and see the difference AI-powered marketing can make')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-200"
          >
            {t('features.cta.button', 'Start Free Trial')}
          </motion.button>
        </div>
      </section>
    </div>
  )
}
