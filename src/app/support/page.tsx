'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

export default function SupportPage() {
  const { t } = useTranslation()

  const supportOptions = [
    {
      icon: QuestionMarkCircleIcon,
      title: t('support.faq.title', 'FAQ'),
      description: t('support.faq.description', 'Find answers to common questions'),
      color: 'from-blue-500 to-indigo-600',
      link: '#faq'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('support.chat.title', 'Live Chat'),
      description: t('support.chat.description', 'Get instant help from our support team'),
      color: 'from-green-500 to-emerald-600',
      link: '#chat'
    },
    {
      icon: EnvelopeIcon,
      title: t('support.email.title', 'Email Support'),
      description: t('support.email.description', 'Send us a detailed message'),
      color: 'from-purple-500 to-pink-600',
      link: 'mailto:support@b2bcampaign.com'
    },
    {
      icon: PhoneIcon,
      title: t('support.phone.title', 'Phone Support'),
      description: t('support.phone.description', 'Call us for urgent issues'),
      color: 'from-orange-500 to-red-600',
      link: 'tel:+1234567890'
    },
    {
      icon: DocumentTextIcon,
      title: t('support.docs.title', 'Documentation'),
      description: t('support.docs.description', 'Comprehensive guides and tutorials'),
      color: 'from-teal-500 to-cyan-600',
      link: '#docs'
    },
    {
      icon: VideoCameraIcon,
      title: t('support.video.title', 'Video Tutorials'),
      description: t('support.video.description', 'Learn with step-by-step videos'),
      color: 'from-indigo-500 to-purple-600',
      link: '#videos'
    }
  ]

  const faqs = [
    {
      question: t('support.faq.q1', 'How do I get started with the platform?'),
      answer: t('support.faq.a1', 'Sign up for a free trial, complete the onboarding process, and start creating your first campaign.')
    },
    {
      question: t('support.faq.q2', 'What payment methods do you accept?'),
      answer: t('support.faq.a2', 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.')
    },
    {
      question: t('support.faq.q3', 'Can I cancel my subscription anytime?'),
      answer: t('support.faq.a3', 'Yes, you can cancel your subscription at any time. No long-term contracts required.')
    },
    {
      question: t('support.faq.q4', 'Do you offer custom integrations?'),
      answer: t('support.faq.a4', 'Yes, we provide custom integration services for enterprise customers.')
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
              {t('support.hero.title', 'How Can We Help?')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            >
              {t('support.hero.subtitle', 'Get the help you need to succeed with our platform')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 block"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {option.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {option.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              {t('support.faq.title', 'Frequently Asked Questions')}
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            {t('support.contact.title', 'Still Need Help?')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            {t('support.contact.subtitle', 'Our support team is here to help you succeed')}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-200"
          >
            {t('support.contact.button', 'Contact Support')}
          </motion.button>
        </div>
      </section>
    </div>
  )
}
