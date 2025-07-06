'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  BookOpenIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export default function SupportPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('getting-started')

  const supportCategories = {
    'getting-started': {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        {
          title: 'How to create your first campaign',
          description: 'Step-by-step guide to create and launch your first B2B marketing campaign',
          readTime: '5 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'Setting up your account',
          description: 'Complete account setup and configuration guide',
          readTime: '3 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'Understanding the dashboard',
          description: 'Learn how to navigate and use the main dashboard features',
          readTime: '4 min read',
          difficulty: 'Beginner'
        }
      ]
    },
    'campaigns': {
      title: 'Campaign Management',
      icon: '📧',
      articles: [
        {
          title: 'Creating effective email templates',
          description: 'Best practices for writing compelling email content',
          readTime: '7 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Target audience configuration',
          description: 'How to set up precise targeting criteria for your campaigns',
          readTime: '6 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Campaign scheduling and automation',
          description: 'Set up automated campaigns and optimal sending schedules',
          readTime: '8 min read',
          difficulty: 'Advanced'
        }
      ]
    },
    'integrations': {
      title: 'Integrations',
      icon: '🔗',
      articles: [
        {
          title: 'Connecting HubSpot CRM',
          description: 'Step-by-step guide to integrate with HubSpot',
          readTime: '4 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'LinkedIn lead extraction setup',
          description: 'Configure LinkedIn integration for lead generation',
          readTime: '6 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Email service configuration',
          description: 'Set up Resend, SendGrid, and other email providers',
          readTime: '5 min read',
          difficulty: 'Intermediate'
        }
      ]
    },
    'troubleshooting': {
      title: 'Troubleshooting',
      icon: '🔧',
      articles: [
        {
          title: 'Email delivery issues',
          description: 'Common email delivery problems and solutions',
          readTime: '5 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'API connection errors',
          description: 'Resolve common API integration issues',
          readTime: '6 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Campaign performance optimization',
          description: 'Improve your campaign results and metrics',
          readTime: '8 min read',
          difficulty: 'Advanced'
        }
      ]
    }
  }

  const contactMethods = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: ChatBubbleLeftRightIcon,
      responseTime: '2-5 minutes',
      available: true,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message',
      icon: EnvelopeIcon,
      responseTime: '2-4 hours',
      available: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: PhoneIcon,
      responseTime: 'Immediate',
      available: true,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const quickActions = [
    {
      title: 'View Documentation',
      description: 'Comprehensive guides and API reference',
      icon: BookOpenIcon,
      link: '/docs',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Watch Tutorials',
      description: 'Video guides and walkthroughs',
      icon: VideoCameraIcon,
      link: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Status',
      description: 'Check system status and uptime',
      icon: CheckCircleIcon,
      link: '/status',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Report Bug',
      description: 'Submit bug reports and feedback',
      icon: ExclamationTriangleIcon,
      link: '/report-bug',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Support Center
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Get help with your B2B campaign platform
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {action.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {action.description}
              </p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Help Articles */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Help Articles
                </h2>
                
                {/* Category Tabs */}
                <div className="flex space-x-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                  {Object.entries(supportCategories).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedCategory === key
                          ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {supportCategories[selectedCategory as keyof typeof supportCategories].articles.map((article, index) => (
                    <motion.div
                      key={article.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                            {article.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                            {article.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
                            <span>{article.readTime}</span>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded-full ${
                              article.difficulty === 'Beginner' 
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                : article.difficulty === 'Intermediate'
                                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                                : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                            }`}>
                              {article.difficulty}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowRightIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Support
              </h2>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mr-3`}>
                          <method.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white">
                            {method.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {method.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {method.responseTime}
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          method.available 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                        }`}>
                          {method.available ? 'Available' : 'Unavailable'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-3">
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <h3 className="font-medium text-slate-900 dark:text-white text-sm">
                    How do I set up my first campaign?
                  </h3>
                </div>
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <h3 className="font-medium text-slate-900 dark:text-white text-sm">
                    What email providers are supported?
                  </h3>
                </div>
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <h3 className="font-medium text-slate-900 dark:text-white text-sm">
                    How to integrate with HubSpot CRM?
                  </h3>
                </div>
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <h3 className="font-medium text-slate-900 dark:text-white text-sm">
                    What are the pricing plans?
                  </h3>
                </div>
                <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <h3 className="font-medium text-slate-900 dark:text-white text-sm">
                    How to export campaign data?
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <CheckCircleIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    System Status
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    All systems operational
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">API</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Email Service</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">CRM Sync</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Status Page
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
