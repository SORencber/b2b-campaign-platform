'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon,
  UserGroupIcon,
  EnvelopeIcon,
  CogIcon,
  PlusIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const { t } = useTranslation()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const stats = [
    {
      name: 'Total Leads',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: UserGroupIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Active Campaigns',
      value: '8',
      change: '+2',
      changeType: 'positive',
      icon: EnvelopeIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Email Open Rate',
      value: '68.2%',
      change: '+5.3%',
      changeType: 'positive',
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Conversion Rate',
      value: '12.4%',
      change: '-1.2%',
      changeType: 'negative',
      icon: CogIcon,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const recentCampaigns = [
    {
      id: 1,
      name: 'Q4 Enterprise Outreach',
      status: 'active',
      leads: 847,
      openRate: 72.3,
      clickRate: 18.7,
      created: '2024-01-15'
    },
    {
      id: 2,
      name: 'Startup Partnership Campaign',
      status: 'active',
      leads: 623,
      openRate: 68.1,
      clickRate: 15.2,
      created: '2024-01-12'
    },
    {
      id: 3,
      name: 'Product Launch Announcement',
      status: 'completed',
      leads: 1247,
      openRate: 75.8,
      clickRate: 22.1,
      created: '2024-01-08'
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {t('dashboard.welcome')}, {user?.name || 'User'}! 👋
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Here's what's happening with your B2B marketing campaigns today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.changeType === 'positive' ? (
                    <ArrowUpIcon className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {t('dashboard.quick_actions')}
              </h2>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {t('dashboard.recent_campaigns')}
                </h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {recentCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-medium text-slate-900 dark:text-white">
                          {campaign.name}
                        </h3>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div>
                          <span className="font-medium">{campaign.leads}</span> leads
                        </div>
                        <div>
                          <span className="font-medium">{campaign.openRate}%</span> open rate
                        </div>
                        <div>
                          <span className="font-medium">{campaign.clickRate}%</span> click rate
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 