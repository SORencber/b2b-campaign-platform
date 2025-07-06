'use client'

import { useTranslation } from 'react-i18next'
import { useApp } from '@/components/providers'
import { motion } from 'framer-motion'
import { 
  PlusIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  CogIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  CalendarIcon,
  BellIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function DashboardPage() {
  const { t } = useTranslation()
  const { user } = useApp()

  // Mock data based on .md specifications
  const campaignStats = {
    total: 12,
    active: 8,
    completed: 3,
    paused: 1
  }

  const leadStats = {
    total: 2450,
    thisMonth: 320,
    qualified: 180,
    converted: 45
  }

  const emailStats = {
    sent: 1840,
    opened: 920,
    replied: 156,
    bounced: 23
  }

  const crmIntegrations = [
    { name: 'HubSpot', status: 'connected', lastSync: '2 hours ago', color: 'from-orange-500 to-red-500' },
    { name: 'Salesforce', status: 'connected', lastSync: '1 hour ago', color: 'from-blue-500 to-indigo-500' },
    { name: 'Pipedrive', status: 'disconnected', lastSync: 'Never', color: 'from-green-500 to-emerald-500' }
  ]

  const socialMediaAccounts = [
    { platform: 'LinkedIn', status: 'active', posts: 24, engagement: '12.5%', color: 'from-blue-600 to-blue-700' },
    { platform: 'Instagram', status: 'active', posts: 18, engagement: '8.2%', color: 'from-pink-500 to-purple-500' },
    { platform: 'Twitter', status: 'inactive', posts: 0, engagement: '0%', color: 'from-blue-400 to-blue-500' }
  ]

  const recentCampaigns = [
    {
      id: 1,
      name: 'Q4 B2B Marketing Campaign',
      status: 'active',
      leads: 450,
      emails: 420,
      openRate: '68%',
      replyRate: '12%',
      progress: 75
    },
    {
      id: 2,
      name: 'Healthcare Industry Outreach',
      status: 'completed',
      leads: 320,
      emails: 320,
      openRate: '72%',
      replyRate: '15%',
      progress: 100
    },
    {
      id: 3,
      name: 'Tech Startup Lead Generation',
      status: 'paused',
      leads: 180,
      emails: 120,
      openRate: '65%',
      replyRate: '8%',
      progress: 40
    }
  ]

  const quickActions = [
    {
      name: 'Create Campaign',
      description: 'Start a new email campaign',
      icon: PlusIcon,
      href: '/campaigns/create',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Extract Leads',
      description: 'Find new prospects',
      icon: UserGroupIcon,
      href: '/leads/extract',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'View Analytics',
      description: 'Check performance metrics',
      icon: ChartBarIcon,
      href: '/analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Manage Integrations',
      description: 'Connect your tools',
      icon: CogIcon,
      href: '/integrations',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const upcomingTasks = [
    {
      id: 1,
      title: 'Follow up with John Smith',
      type: 'email',
      due: 'Today',
      priority: 'high',
      lead: 'john.smith@company.com'
    },
    {
      id: 2,
      title: 'Schedule meeting with TechCorp',
      type: 'meeting',
      due: 'Tomorrow',
      priority: 'medium',
      lead: 'contact@techcorp.com'
    },
    {
      id: 3,
      title: 'Review Q4 campaign results',
      type: 'review',
      due: 'This week',
      priority: 'low',
      lead: 'N/A'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'completed': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
      case 'paused': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
      case 'connected': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'disconnected': return 'text-red-600 bg-red-100 dark:bg-red-900/20'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <ExclamationTriangleIcon className="w-4 h-4 text-red-500" />
      case 'medium': return <ClockIcon className="w-4 h-4 text-yellow-500" />
      case 'low': return <CheckCircleIcon className="w-4 h-4 text-green-500" />
      default: return <ClockIcon className="w-4 h-4 text-slate-500" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('dashboard.welcome')}, {(user as { name?: string })?.name || 'User'}!
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Here&apos;s what&apos;s happening with your campaigns today
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <BellIcon className="w-6 h-6" />
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {(user as { name?: string })?.name?.charAt(0) || 'U'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Campaigns</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{campaignStats.total}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <PlusIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">{campaignStats.active} active</span>
              <span className="text-slate-400 mx-2">•</span>
              <span className="text-slate-600 dark:text-slate-400">{campaignStats.completed} completed</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Leads</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{leadStats.total.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">+{leadStats.thisMonth} this month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Emails Sent</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{emailStats.sent.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">{emailStats.opened} opened</span>
              <span className="text-slate-400 mx-2">•</span>
              <span className="text-blue-600 font-medium">{emailStats.replied} replied</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Conversion Rate</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">18.4%</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600 font-medium">+2.1% vs last month</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {t('dashboard.quick_actions')}
              </h2>

              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">
                          {action.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Campaigns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t('dashboard.recent_campaigns')}
                </h2>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {recentCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-slate-900 dark:text-white">
                          {campaign.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Leads:</span>
                          <span className="ml-1 font-medium text-slate-900 dark:text-white">{campaign.leads}</span>
                        </div>
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Emails:</span>
                          <span className="ml-1 font-medium text-slate-900 dark:text-white">{campaign.emails}</span>
                        </div>
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Open Rate:</span>
                          <span className="ml-1 font-medium text-green-600">{campaign.openRate}</span>
                        </div>
                        <div>
                          <span className="text-slate-600 dark:text-slate-400">Reply Rate:</span>
                          <span className="ml-1 font-medium text-blue-600">{campaign.replyRate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-600 flex items-center justify-center">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{campaign.progress}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CRM Integrations & Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"
        >
          {/* CRM Integrations */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                CRM Integrations
              </h2>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                Manage
              </button>
            </div>

            <div className="space-y-4">
              {crmIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700"
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${integration.color} flex items-center justify-center mr-4`}>
                      <CogIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">{integration.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Last sync: {integration.lastSync}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                    {integration.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Media Accounts */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Social Media
              </h2>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                Manage
              </button>
            </div>

            <div className="space-y-4">
              {socialMediaAccounts.map((account, index) => (
                <motion.div
                  key={account.platform}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700"
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${account.color} flex items-center justify-center mr-4`}>
                      <GlobeAltIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">{account.platform}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{account.posts} posts • {account.engagement} engagement</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(account.status)}`}>
                    {account.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Upcoming Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Upcoming Tasks
              </h2>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-4">
                      <CalendarIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">{task.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{task.lead}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{task.due}</span>
                    {getPriorityIcon(task.priority)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 