'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  PlusIcon, 
  UserGroupIcon, 
  EnvelopeIcon, 
  ChartBarIcon,
  CogIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export default function CampaignsPage() {
  const { t } = useTranslation()
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null)

  const campaigns = [
    {
      id: 1,
      name: 'Q4 B2B Marketing Campaign',
      status: 'active',
      leads: 450,
      emails: 420,
      openRate: '68%',
      replyRate: '12%',
      progress: 75,
      created: '2024-01-15',
      targetCriteria: {
        titles: ['CEO', 'Marketing Manager'],
        locations: ['Germany', 'Berlin'],
        industries: ['Marketing', 'Technology'],
        employeeRange: { min: 10, max: 500 }
      }
    },
    {
      id: 2,
      name: 'Healthcare Industry Outreach',
      status: 'completed',
      leads: 320,
      emails: 320,
      openRate: '72%',
      replyRate: '15%',
      progress: 100,
      created: '2024-01-10',
      targetCriteria: {
        titles: ['Hospital Director', 'Medical Manager'],
        locations: ['Germany'],
        industries: ['Healthcare'],
        employeeRange: { min: 50, max: 1000 }
      }
    },
    {
      id: 3,
      name: 'Tech Startup Lead Generation',
      status: 'paused',
      leads: 180,
      emails: 120,
      openRate: '65%',
      replyRate: '8%',
      progress: 40,
      created: '2024-01-20',
      targetCriteria: {
        titles: ['Founder', 'CTO'],
        locations: ['Germany', 'Munich'],
        industries: ['Technology', 'Software'],
        employeeRange: { min: 1, max: 100 }
      }
    },
    {
      id: 4,
      name: 'Enterprise Sales Campaign',
      status: 'draft',
      leads: 0,
      emails: 0,
      openRate: '0%',
      replyRate: '0%',
      progress: 0,
      created: '2024-01-25',
      targetCriteria: {
        titles: ['VP Sales', 'Sales Director'],
        locations: ['Germany', 'Europe'],
        industries: ['Sales', 'Consulting'],
        employeeRange: { min: 500, max: 10000 }
      }
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'completed': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
      case 'paused': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
      case 'draft': return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <PlayIcon className="w-4 h-4" />
      case 'completed': return <ChartBarIcon className="w-4 h-4" />
      case 'paused': return <PauseIcon className="w-4 h-4" />
      case 'draft': return <PencilIcon className="w-4 h-4" />
      default: return <CogIcon className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Campaign Management
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Create, manage, and track your B2B marketing campaigns
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <PlusIcon className="w-5 h-5 mr-2" />
              Create Campaign
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Campaigns</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{campaigns.length}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <PlusIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Active Campaigns</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {campaigns.filter(c => c.status === 'active').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <PlayIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Leads</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {campaigns.reduce((sum, c) => sum + c.leads, 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Avg Open Rate</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {Math.round(campaigns.reduce((sum, c) => sum + parseFloat(c.openRate), 0) / campaigns.length)}%
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <EyeIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Campaigns List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Your Campaigns
            </h2>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {campaign.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(campaign.status)}`}>
                          {getStatusIcon(campaign.status)}
                          <span>{campaign.status}</span>
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <PencilIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <DocumentDuplicateIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Leads</p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">{campaign.leads.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Emails Sent</p>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">{campaign.emails.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Open Rate</p>
                        <p className="text-lg font-semibold text-green-600">{campaign.openRate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Reply Rate</p>
                        <p className="text-lg font-semibold text-blue-600">{campaign.replyRate}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <span>Progress</span>
                        <span>{campaign.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                      <div>
                        <span className="font-medium">Target:</span>
                        <span className="ml-1">
                          {campaign.targetCriteria.titles.join(', ')} in {campaign.targetCriteria.locations.join(', ')}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">Created:</span>
                        <span className="ml-1">{new Date(campaign.created).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 flex flex-col space-y-2">
                    {campaign.status === 'draft' && (
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <PlayIcon className="w-4 h-4 mr-1" />
                        Activate
                      </Button>
                    )}
                    {campaign.status === 'active' && (
                      <>
                        <Button size="sm" variant="outline">
                          <PauseIcon className="w-4 h-4 mr-1" />
                          Pause
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <StopIcon className="w-4 h-4 mr-1" />
                          Stop
                        </Button>
                      </>
                    )}
                    {campaign.status === 'paused' && (
                      <Button size="sm" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        <PlayIcon className="w-4 h-4 mr-1" />
                        Resume
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Campaign Creation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Create Your First Campaign?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Use our AI-powered campaign builder to create targeted B2B marketing campaigns. 
              Define your target audience, create personalized email content, and track results in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <PlusIcon className="w-5 h-5 mr-2" />
                Create New Campaign
              </Button>
              <Button size="lg" variant="outline">
                <DocumentDuplicateIcon className="w-5 h-5 mr-2" />
                Use Template
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 