'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  UserGroupIcon, 
  CogIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'

export default function IntegrationsPage() {
  const { t } = useTranslation()

  const integrations = [
    {
      icon: EnvelopeIcon,
      title: t('integrations.email.title', 'Email Services'),
      description: t('integrations.email.description', 'Connect with popular email service providers'),
      services: ['Resend', 'SendGrid', 'Mailgun', 'Amazon SES'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: UserGroupIcon,
      title: t('integrations.crm.title', 'CRM Platforms'),
      description: t('integrations.crm.description', 'Sync with leading CRM systems'),
      services: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: CogIcon,
      title: t('integrations.automation.title', 'Automation Tools'),
      description: t('integrations.automation.description', 'Powerful workflow automation with n8n'),
      services: ['n8n Workflows', 'Zapier', 'Make.com', 'Custom APIs'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: GlobeAltIcon,
      title: t('integrations.social.title', 'Social Media'),
      description: t('integrations.social.description', 'Manage all your social media accounts'),
      services: ['LinkedIn', 'Twitter', 'Facebook', 'Instagram'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: ChartBarIcon,
      title: t('integrations.analytics.title', 'Analytics & Data'),
      description: t('integrations.analytics.description', 'Connect with analytics and data platforms'),
      services: ['Google Analytics', 'Google Sheets', 'MongoDB', 'PostgreSQL'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: CreditCardIcon,
      title: t('integrations.payments.title', 'Payment Gateways'),
      description: t('integrations.payments.description', 'Secure payment processing'),
      services: ['Stripe', 'PayPal', 'iyzico', 'Adyen'],
      color: 'from-indigo-500 to-purple-600'
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
              {t('integrations.hero.title', 'Powerful Integrations')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              {t('integrations.hero.subtitle', 'Connect with your favorite tools and platforms seamlessly')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${integration.color} flex items-center justify-center mb-6`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {integration.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {integration.description}
                </p>
                <div className="space-y-2">
                  {integration.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {service}
                    </div>
                  ))}
                </div>
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
            {t('integrations.cta.title', 'Need a Custom Integration?')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('integrations.cta.subtitle', 'We can build custom integrations for your specific needs')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-200"
          >
            {t('integrations.cta.button', 'Contact Us')}
          </motion.button>
        </div>
      </section>
    </div>
  )
}
