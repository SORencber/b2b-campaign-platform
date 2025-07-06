'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  EnvelopeIcon, 
  CurrencyEuroIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function AnalyticsPage() {
  const { t } = useTranslation()
  const [timeRange, setTimeRange] = useState('30d')

  const analyticsData = {
    overview: {
      totalLeads: 2450,
      totalEmails: 1840,
      totalRevenue: 45600,
      conversionRate: 18.4,
      avgResponseTime: '2.3 days',
      roi: 320
    },
    campaignPerformance: [
      {
        name: 'Q4 B2B Marketing Campaign',
        leads: 450,
        emails: 420,
        openRate: 68,
        clickRate: 12,
        replyRate: 8,
        conversionRate: 15,
        revenue: 12500
      },
      {
        name: 'Healthcare Industry Outreach',
        leads: 320,
        emails: 320,
        openRate: 72,
        clickRate: 15,
        replyRate: 12,
        conversionRate: 18,
        revenue: 8900
      },
      {
        name: 'Tech Startup Lead Generation',
        leads: 180,
        emails: 120,
        openRate: 65,
        clickRate: 10,
        replyRate: 6,
        conversionRate: 12,
        revenue: 5400
      }
    ],
    leadSources: [
      { source: 'LinkedIn', leads: 850, conversionRate: 22 },
      { source: 'Apollo', leads: 720, conversionRate: 18 },
      { source: 'Website', leads: 450, conversionRate: 15 },
      { source: 'Referrals', leads: 280, conversionRate: 25 },
      { source: 'Cold Email', leads: 150, conversionRate: 8 }
    ],
    emailMetrics: {
      sent: 1840,
      delivered: 1780,
      opened: 920,
      clicked: 156,
      replied: 89,
      bounced: 23,
      unsubscribed: 12
    },
    monthlyTrends: [
      { month: 'Jan', leads: 320, emails: 280, revenue: 8900 },
      { month: 'Feb', leads: 380, emails: 350, revenue: 11200 },
      { month: 'Mar', leads: 420, emails: 400, revenue: 13400 },
      { month: 'Apr', leads: 390, emails: 370, revenue: 12100 }
    ]
  }

  const calculateEmailMetrics = () => {
    const { emailMetrics } = analyticsData
    return {
      deliveryRate: ((emailMetrics.delivered / emailMetrics.sent) * 100).toFixed(1),
      openRate: ((emailMetrics.opened / emailMetrics.delivered) * 100).toFixed(1),
      clickRate: ((emailMetrics.clicked / emailMetrics.opened) * 100).toFixed(1),
      replyRate: ((emailMetrics.replied / emailMetrics.clicked) * 100).toFixed(1),
      bounceRate: ((emailMetrics.bounced / emailMetrics.sent) * 100).toFixed(1)
    }
  }

  const emailMetrics = calculateEmailMetrics()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Analytics Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Track your B2B marketing performance and ROI
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Leads</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {analyticsData.overview.totalLeads.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+12.5%</span>
              <span className="text-slate-400 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Emails Sent</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {analyticsData.overview.totalEmails.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+8.3%</span>
              <span className="text-slate-400 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Revenue</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  €{analyticsData.overview.totalRevenue.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <CurrencyEuroIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+15.2%</span>
              <span className="text-slate-400 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Conversion Rate</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {analyticsData.overview.conversionRate}%
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+2.1%</span>
              <span className="text-slate-400 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Avg Response Time</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {analyticsData.overview.avgResponseTime}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowTrendingDownIcon className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">-0.5 days</span>
              <span className="text-slate-400 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">ROI</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {analyticsData.overview.roi}%
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowTrendingUpIcon className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">+18%</span>
              <span className="text-slate-400 ml-1">vs last month</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Email Performance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Email Performance
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-slate-900 dark:text-white font-medium">Sent</span>
                </div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  {analyticsData.emailMetrics.sent.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-900 dark:text-white font-medium">Delivered</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {analyticsData.emailMetrics.delivered.toLocaleString()}
                  </span>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {emailMetrics.deliveryRate}% delivery rate
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center">
                  <EyeIcon className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-slate-900 dark:text-white font-medium">Opened</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {analyticsData.emailMetrics.opened.toLocaleString()}
                  </span>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {emailMetrics.openRate}% open rate
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center">
                  <CursorArrowRaysIcon className="w-5 h-5 text-indigo-600 mr-3" />
                  <span className="text-slate-900 dark:text-white font-medium">Clicked</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {analyticsData.emailMetrics.clicked.toLocaleString()}
                  </span>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {emailMetrics.clickRate}% click rate
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-slate-900 dark:text-white font-medium">Replied</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {analyticsData.emailMetrics.replied.toLocaleString()}
                  </span>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {emailMetrics.replyRate}% reply rate
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lead Sources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Lead Sources
            </h2>
            
            <div className="space-y-4">
              {analyticsData.leadSources.map((source) => (
                <div key={source.source} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-3"></div>
                    <span className="text-slate-900 dark:text-white font-medium">{source.source}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      {source.leads.toLocaleString()}
                    </span>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {source.conversionRate}% conversion
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Campaign Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Campaign Performance
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Campaign
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Leads
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Open Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Click Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Reply Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Conversion
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {analyticsData.campaignPerformance.map((campaign) => (
                  <motion.tr
                    key={campaign.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {campaign.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-900 dark:text-white">
                        {campaign.leads.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-green-600 font-medium">
                        {campaign.openRate}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-blue-600 font-medium">
                        {campaign.clickRate}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-purple-600 font-medium">
                        {campaign.replyRate}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-orange-600 font-medium">
                        {campaign.conversionRate}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        €{campaign.revenue.toLocaleString()}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 