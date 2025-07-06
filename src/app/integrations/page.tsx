'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  CogIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  ArrowPathIcon,
  PlusIcon,
  LinkIcon,
  KeyIcon,
  ShieldCheckIcon,
  CloudIcon,
  ServerIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export default function IntegrationsPage() {
  const { t } = useTranslation()

  const integrations = {
    crm: [
      {
        name: 'HubSpot',
        status: 'connected',
        description: 'Sync leads, contacts, and deals automatically',
        icon: '🔵',
        lastSync: '2 minutes ago',
        syncStatus: 'success',
        apiCalls: '1,240 / 5,000',
        features: ['Lead Sync', 'Contact Management', 'Deal Tracking', 'Email Integration']
      },
      {
        name: 'Salesforce',
        status: 'connected',
        description: 'Enterprise CRM integration with advanced features',
        icon: '🔵',
        lastSync: '5 minutes ago',
        syncStatus: 'success',
        apiCalls: '890 / 2,000',
        features: ['Lead Sync', 'Opportunity Management', 'Account Sync', 'Custom Fields']
      },
      {
        name: 'Pipedrive',
        status: 'disconnected',
        description: 'Simple and intuitive CRM for sales teams',
        icon: '🟠',
        lastSync: 'Never',
        syncStatus: 'disconnected',
        apiCalls: '0 / 1,000',
        features: ['Lead Sync', 'Pipeline Management', 'Activity Tracking']
      }
    ],
    email: [
      {
        name: 'Resend',
        status: 'connected',
        description: 'Modern email API for transactional emails',
        icon: '🟢',
        lastSync: '1 minute ago',
        syncStatus: 'success',
        emailsSent: '2,450 / 10,000',
        features: ['Transactional Emails', 'Email Templates', 'Analytics', 'Webhooks']
      },
      {
        name: 'SendGrid',
        status: 'connected',
        description: 'Reliable email delivery and marketing platform',
        icon: '🟢',
        lastSync: '3 minutes ago',
        syncStatus: 'success',
        emailsSent: '1,890 / 5,000',
        features: ['Marketing Emails', 'Email Templates', 'Analytics', 'A/B Testing']
      },
      {
        name: 'Mailgun',
        status: 'disconnected',
        description: 'Developer-friendly email service',
        icon: '🟠',
        lastSync: 'Never',
        syncStatus: 'disconnected',
        emailsSent: '0 / 2,000',
        features: ['Transactional Emails', 'Email Validation', 'Webhooks']
      }
    ],
    social: [
      {
        name: 'LinkedIn',
        status: 'connected',
        description: 'Professional networking and lead generation',
        icon: '🔵',
        lastSync: '10 minutes ago',
        syncStatus: 'success',
        connections: '850 / 1,000',
        features: ['Lead Extraction', 'Message Management', 'Company Research', 'Analytics']
      },
      {
        name: 'Twitter/X',
        status: 'connected',
        description: 'Social media engagement and monitoring',
        icon: '🔵',
        lastSync: '15 minutes ago',
        syncStatus: 'success',
        followers: '2,340',
        features: ['Tweet Management', 'Engagement Tracking', 'Hashtag Monitoring', 'Analytics']
      },
      {
        name: 'Facebook',
        status: 'disconnected',
        description: 'Social media marketing and advertising',
        icon: '🟠',
        lastSync: 'Never',
        syncStatus: 'disconnected',
        followers: '0',
        features: ['Page Management', 'Ad Campaigns', 'Analytics', 'Messaging']
      }
    ],
    payment: [
      {
        name: 'Stripe',
        status: 'connected',
        description: 'Global payment processing platform',
        icon: '🟢',
        lastSync: '1 minute ago',
        syncStatus: 'success',
        transactions: '45 / 100',
        features: ['Credit Cards', 'Bank Transfers', 'Subscription Management', 'Analytics']
      },
      {
        name: 'PayPal',
        status: 'connected',
        description: 'Digital payments and money transfers',
        icon: '🟢',
        lastSync: '2 minutes ago',
        syncStatus: 'success',
        transactions: '23 / 50',
        features: ['PayPal Checkout', 'Express Checkout', 'Subscription Billing', 'Refunds']
      },
      {
        name: 'iyzico',
        status: 'disconnected',
        description: 'Turkish payment gateway integration',
        icon: '🟠',
        lastSync: 'Never',
        syncStatus: 'disconnected',
        transactions: '0 / 25',
        features: ['Credit Cards', 'Bank Transfers', 'Installment Payments', 'Local Support']
      }
    ],
    data: [
      {
        name: 'MongoDB',
        status: 'connected',
        description: 'NoSQL database for flexible data storage',
        icon: '🟢',
        lastSync: 'Live',
        syncStatus: 'success',
        storage: '2.4 GB / 10 GB',
        features: ['Document Storage', 'Real-time Sync', 'Scalability', 'Backup']
      },
      {
        name: 'Google Sheets',
        status: 'connected',
        description: 'Spreadsheet integration for data export',
        icon: '🟢',
        lastSync: '5 minutes ago',
        syncStatus: 'success',
        sheets: '12 active',
        features: ['Data Export', 'Real-time Sync', 'Collaboration', 'Automation']
      },
      {
        name: 'n8n Workflows',
        status: 'connected',
        description: 'Workflow automation and integration platform',
        icon: '🟢',
        lastSync: 'Live',
        syncStatus: 'success',
        workflows: '8 active',
        features: ['Workflow Automation', 'API Integration', 'Custom Triggers', 'Monitoring']
      }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'disconnected': return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
      case 'error': return 'text-red-600 bg-red-100 dark:bg-red-900/20'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
    }
  }

  const getSyncStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircleIcon className="w-4 h-4 text-green-600" />
      case 'error': return <XCircleIcon className="w-4 h-4 text-red-600" />
      case 'disconnected': return <XCircleIcon className="w-4 h-4 text-slate-400" />
      default: return <ArrowPathIcon className="w-4 h-4 text-slate-400" />
    }
  }

  const renderIntegrationCard = (integration: any, category: string) => (
    <motion.div
      key={integration.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">{integration.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {integration.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {integration.description}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(integration.status)}`}>
          {integration.status}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-400">Last Sync:</span>
          <div className="flex items-center">
            {getSyncStatusIcon(integration.syncStatus)}
            <span className="ml-1 font-medium">{integration.lastSync}</span>
          </div>
        </div>

        {integration.apiCalls && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">API Calls:</span>
            <span className="font-medium">{integration.apiCalls}</span>
          </div>
        )}

        {integration.emailsSent && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Emails Sent:</span>
            <span className="font-medium">{integration.emailsSent}</span>
          </div>
        )}

        {integration.connections && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Connections:</span>
            <span className="font-medium">{integration.connections}</span>
          </div>
        )}

        {integration.transactions && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Transactions:</span>
            <span className="font-medium">{integration.transactions}</span>
          </div>
        )}

        {integration.storage && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Storage:</span>
            <span className="font-medium">{integration.storage}</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Features:</h4>
        <div className="flex flex-wrap gap-2">
          {integration.features.map((feature: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        {integration.status === 'connected' ? (
          <>
            <Button variant="outline" size="sm" className="flex-1">
              <CogIcon className="w-4 h-4 mr-2" />
              Configure
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
              <XCircleIcon className="w-4 h-4 mr-2" />
              Disconnect
            </Button>
          </>
        ) : (
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <LinkIcon className="w-4 h-4 mr-2" />
            Connect
          </Button>
        )}
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Integrations
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Connect your favorite tools and platforms
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <PlusIcon className="w-5 h-5 mr-2" />
              Add Integration
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Integration Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Integrations</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">15</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <LinkIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Connected</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">11</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircleIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">API Calls Today</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">2,130</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <ServerIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Sync Status</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">Live</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                <CloudIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CRM Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            CRM Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.crm.map(integration => renderIntegrationCard(integration, 'crm'))}
          </div>
        </motion.div>

        {/* Email Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Email Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.email.map(integration => renderIntegrationCard(integration, 'email'))}
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Social Media Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.social.map(integration => renderIntegrationCard(integration, 'social'))}
          </div>
        </motion.div>

        {/* Payment Gateways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Payment Gateways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.payment.map(integration => renderIntegrationCard(integration, 'payment'))}
          </div>
        </motion.div>

        {/* Data & Storage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Data & Storage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.data.map(integration => renderIntegrationCard(integration, 'data'))}
          </div>
        </motion.div>

        {/* Security & API Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Secure API Connections
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              All integrations use OAuth 2.0 and API keys for secure authentication. 
              Your data is encrypted in transit and at rest. We never store sensitive credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <KeyIcon className="w-5 h-5 mr-2" />
                View API Keys
              </Button>
              <Button variant="outline" size="lg">
                <ShieldCheckIcon className="w-5 h-5 mr-2" />
                Security Settings
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
