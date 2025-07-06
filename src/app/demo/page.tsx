'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  SparklesIcon, 
  UserGroupIcon, 
  EnvelopeIcon, 
  ChartBarIcon,
  CogIcon,
  CreditCardIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function DemoPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('enterprise')

  const demoCredentials = {
    email: 'demo@example.com',
    password: 'demo123'
  }

  const subscriptionPackages = [
    {
      id: 'starter',
      name: 'Starter',
      price: '29€',
      period: '/month',
      features: [
        '100 lead extraction/month',
        'Basic email campaigns',
        'Standard CRM integration (1 platform)',
        'Basic analytics',
        'Email support'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '79€',
      period: '/month',
      features: [
        '500 lead extraction/month',
        'Advanced email campaigns',
        'Multi-CRM integration (3 platforms)',
        'Advanced analytics',
        'Social media integration (2 platforms)',
        'Priority support'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '199€',
      period: '/month',
      features: [
        'Unlimited lead extraction',
        'All email campaign features',
        'All CRM integrations',
        'Advanced analytics & reporting',
        'All social media platforms',
        'AI content generation',
        'Dedicated support',
        'Custom integrations'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'agency',
      name: 'Agency',
      price: '399€',
      period: '/month',
      features: [
        'Multi-client management',
        'White-label solution',
        'Advanced automation',
        'Custom workflows',
        'API access',
        'Dedicated account manager'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const demoFeatures = [
    {
      icon: UserGroupIcon,
      title: 'AI Lead Extraction',
      description: 'Extract high-quality leads from LinkedIn, company databases, and web sources',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Automation',
      description: 'Create personalized email sequences with AI-generated content',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CogIcon,
      title: 'CRM Integration',
      description: 'Connect with HubSpot, Salesforce, Pipedrive, and more',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Social Media AI',
      description: 'Manage Instagram, Facebook, Twitter, LinkedIn with AI content',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Track campaign performance, lead quality, and ROI',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: CreditCardIcon,
      title: 'Payment Integration',
      description: 'Stripe, PayPal, iyzico, Adyen payment gateways',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const handleDemoLogin = async () => {
    setIsLoading(true)
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Store demo credentials
    localStorage.setItem('auth_token', 'demo_token_12345')
    localStorage.setItem('user', JSON.stringify({
      id: 'demo_user_123',
      name: 'Demo User',
      email: demoCredentials.email,
      role: 'admin',
      plan: selectedPackage
    }))
    
    // Redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">B2B</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('auth.demo.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('auth.demo.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Demo Login Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Demo Access
            </h2>

            {/* Demo Credentials */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Demo Credentials
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Email:</span>
                  <span className="font-mono text-slate-900 dark:text-white">{demoCredentials.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Password:</span>
                  <span className="font-mono text-slate-900 dark:text-white">{demoCredentials.password}</span>
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Select Demo Package:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {subscriptionPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedPackage === pkg.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-slate-200 dark:border-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-semibold text-slate-900 dark:text-white">{pkg.name}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {pkg.price}{pkg.period}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Login Button */}
            <Button
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Logging in...
                </div>
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  {t('auth.demo.login')}
                </>
              )}
            </Button>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
              Demo data will be reset every 24 hours. No real data will be stored.
            </p>
          </motion.div>

          {/* Features Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Platform Features
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {demoFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mr-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Subscription Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Subscription Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-4`}>
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    {pkg.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {pkg.period}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white">
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-lg font-medium"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 