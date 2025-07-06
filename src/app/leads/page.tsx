'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon, 
  UserGroupIcon, 
  EnvelopeIcon, 
  BuildingOfficeIcon,
  MapPinIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CogIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export default function LeadsPage() {
  const { t } = useTranslation()
  const [selectedLead, setSelectedLead] = useState<string | null>(null)

  const leads = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@techcorp.com',
      company: 'TechCorp Solutions',
      title: 'CEO',
      industry: 'Technology',
      location: 'Berlin, Germany',
      employeeCount: 250,
      status: 'qualified',
      source: 'LinkedIn',
      lastContact: '2024-01-20',
      emailStatus: 'replied',
      assignedTo: 'Sarah Johnson'
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Garcia',
      email: 'maria.garcia@healthcare.de',
      company: 'Healthcare Plus',
      title: 'Marketing Manager',
      industry: 'Healthcare',
      location: 'Munich, Germany',
      employeeCount: 500,
      status: 'prospect',
      source: 'Apollo',
      lastContact: '2024-01-18',
      emailStatus: 'opened',
      assignedTo: 'Mike Chen'
    },
    {
      id: 3,
      firstName: 'David',
      lastName: 'Wilson',
      email: 'david.wilson@startup.io',
      company: 'Innovation Startup',
      title: 'Founder',
      industry: 'Software',
      location: 'Hamburg, Germany',
      employeeCount: 15,
      status: 'converted',
      source: 'LinkedIn',
      lastContact: '2024-01-15',
      emailStatus: 'converted',
      assignedTo: 'Sarah Johnson'
    },
    {
      id: 4,
      firstName: 'Anna',
      lastName: 'Müller',
      email: 'anna.mueller@consulting.de',
      company: 'Business Consulting AG',
      title: 'VP Sales',
      industry: 'Consulting',
      location: 'Frankfurt, Germany',
      employeeCount: 1200,
      status: 'qualified',
      source: 'Apollo',
      lastContact: '2024-01-22',
      emailStatus: 'sent',
      assignedTo: 'Mike Chen'
    }
  ]

  const leadStats = {
    total: 2450,
    qualified: 180,
    converted: 45,
    thisMonth: 320,
    avgResponseTime: '2.3 days',
    conversionRate: '18.4%'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'prospect': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
      case 'qualified': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
      case 'converted': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
    }
  }

  const getEmailStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
      case 'opened': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
      case 'replied': return 'text-green-600 bg-green-100 dark:bg-green-900/20'
      case 'converted': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/20'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
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
                Lead Management
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Extract, manage, and convert your B2B leads
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                Export
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                Extract Leads
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Leads</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{leadStats.total.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Qualified</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{leadStats.qualified}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <BriefcaseIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Converted</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{leadStats.converted}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">This Month</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">+{leadStats.thisMonth}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Avg Response</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{leadStats.avgResponseTime}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Conversion Rate</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{leadStats.conversionRate}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lead Extraction Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
        >
          {/* LinkedIn Extraction */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mr-4">
                <BuildingOfficeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">LinkedIn Extraction</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Extract leads from LinkedIn</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Last extraction:</span>
                <span className="font-medium">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Leads found:</span>
                <span className="font-medium text-green-600">+45</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Status:</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/20">
                  Connected
                </span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
              Extract Now
            </Button>
          </div>

          {/* Apollo Integration */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                <MagnifyingGlassIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Apollo Database</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Search company database</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">API calls used:</span>
                <span className="font-medium">1,240 / 5,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Companies found:</span>
                <span className="font-medium text-green-600">+320</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Status:</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/20">
                  Active
                </span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
              Search Companies
            </Button>
          </div>

          {/* CRM Sync */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                <CogIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">CRM Sync</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sync with HubSpot & Salesforce</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">HubSpot:</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/20">
                  Synced
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Salesforce:</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/20">
                  Synced
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Last sync:</span>
                <span className="font-medium">1 hour ago</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
              <CogIcon className="w-4 h-4 mr-2" />
              Sync Now
            </Button>
          </div>
        </motion.div>

        {/* Leads Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Recent Leads
              </h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Lead
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Lead
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Email Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Last Contact
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {leads.map((lead, index) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {lead.firstName} {lead.lastName}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {lead.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {lead.company}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {lead.title}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEmailStatusColor(lead.emailStatus)}`}>
                        {lead.emailStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">
                      {lead.assignedTo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      {new Date(lead.lastContact).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <PencilIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <TrashIcon className="w-4 h-4" />
                        </Button>
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