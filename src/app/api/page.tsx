'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  KeyIcon, 
  DocumentTextIcon, 
  PlayIcon,
  ClipboardDocumentIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

export default function ApiPage() {
  const { t } = useTranslation()
  const [selectedEndpoint, setSelectedEndpoint] = useState('campaigns')

  const apiEndpoints = {
    campaigns: {
      name: 'Campaigns',
      description: 'Manage your B2B marketing campaigns',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/campaigns',
          description: 'List all campaigns',
          auth: 'Bearer Token',
          params: [
            { name: 'page', type: 'integer', required: false, description: 'Page number' },
            { name: 'limit', type: 'integer', required: false, description: 'Items per page' },
            { name: 'status', type: 'string', required: false, description: 'Filter by status' }
          ]
        },
        {
          method: 'POST',
          path: '/api/v1/campaigns',
          description: 'Create a new campaign',
          auth: 'Bearer Token',
          body: {
            name: 'string',
            target_criteria: 'object',
            email_template: 'string',
            schedule: 'object'
          }
        },
        {
          method: 'GET',
          path: '/api/v1/campaigns/{id}',
          description: 'Get campaign details',
          auth: 'Bearer Token',
          params: [
            { name: 'id', type: 'string', required: true, description: 'Campaign ID' }
          ]
        },
        {
          method: 'PUT',
          path: '/api/v1/campaigns/{id}',
          description: 'Update campaign',
          auth: 'Bearer Token',
          params: [
            { name: 'id', type: 'string', required: true, description: 'Campaign ID' }
          ]
        },
        {
          method: 'DELETE',
          path: '/api/v1/campaigns/{id}',
          description: 'Delete campaign',
          auth: 'Bearer Token',
          params: [
            { name: 'id', type: 'string', required: true, description: 'Campaign ID' }
          ]
        }
      ]
    },
    leads: {
      name: 'Leads',
      description: 'Extract and manage leads',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/leads',
          description: 'List all leads',
          auth: 'Bearer Token',
          params: [
            { name: 'page', type: 'integer', required: false, description: 'Page number' },
            { name: 'limit', type: 'integer', required: false, description: 'Items per page' },
            { name: 'status', type: 'string', required: false, description: 'Filter by status' }
          ]
        },
        {
          method: 'POST',
          path: '/api/v1/leads/extract',
          description: 'Extract leads from LinkedIn',
          auth: 'Bearer Token',
          body: {
            search_criteria: 'object',
            max_results: 'integer',
            platform: 'string'
          }
        },
        {
          method: 'POST',
          path: '/api/v1/leads',
          description: 'Create a new lead',
          auth: 'Bearer Token',
          body: {
            first_name: 'string',
            last_name: 'string',
            email: 'string',
            company: 'string',
            title: 'string'
          }
        }
      ]
    },
    emails: {
      name: 'Email Management',
      description: 'Send and track emails',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/emails/send',
          description: 'Send email campaign',
          auth: 'Bearer Token',
          body: {
            campaign_id: 'string',
            recipients: 'array',
            template_id: 'string'
          }
        },
        {
          method: 'GET',
          path: '/api/v1/emails/{id}/status',
          description: 'Get email status',
          auth: 'Bearer Token',
          params: [
            { name: 'id', type: 'string', required: true, description: 'Email ID' }
          ]
        },
        {
          method: 'GET',
          path: '/api/v1/emails/analytics',
          description: 'Get email analytics',
          auth: 'Bearer Token',
          params: [
            { name: 'campaign_id', type: 'string', required: false, description: 'Campaign ID' },
            { name: 'date_from', type: 'string', required: false, description: 'Start date' },
            { name: 'date_to', type: 'string', required: false, description: 'End date' }
          ]
        }
      ]
    },
    integrations: {
      name: 'Integrations',
      description: 'Manage third-party integrations',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/integrations',
          description: 'List all integrations',
          auth: 'Bearer Token'
        },
        {
          method: 'POST',
          path: '/api/v1/integrations/{provider}/connect',
          description: 'Connect integration',
          auth: 'Bearer Token',
          params: [
            { name: 'provider', type: 'string', required: true, description: 'Integration provider' }
          ],
          body: {
            api_key: 'string',
            api_secret: 'string',
            settings: 'object'
          }
        },
        {
          method: 'DELETE',
          path: '/api/v1/integrations/{provider}/disconnect',
          description: 'Disconnect integration',
          auth: 'Bearer Token',
          params: [
            { name: 'provider', type: 'string', required: true, description: 'Integration provider' }
          ]
        }
      ]
    },
    webhooks: {
      name: 'Webhooks',
      description: 'Receive real-time notifications',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/webhooks',
          description: 'Create webhook',
          auth: 'Bearer Token',
          body: {
            url: 'string',
            events: 'array',
            secret: 'string'
          }
        },
        {
          method: 'GET',
          path: '/api/v1/webhooks',
          description: 'List webhooks',
          auth: 'Bearer Token'
        },
        {
          method: 'DELETE',
          path: '/api/v1/webhooks/{id}',
          description: 'Delete webhook',
          auth: 'Bearer Token',
          params: [
            { name: 'id', type: 'string', required: true, description: 'Webhook ID' }
          ]
        }
      ]
    }
  }

  const codeExamples = {
    authentication: `// JavaScript/Node.js
const axios = require('axios');

const apiKey = 'your_api_key_here';
const baseURL = 'https://api.b2bcampaign.com/v1';

const api = axios.create({
  baseURL,
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }
});

// Example: Get campaigns
const getCampaigns = async () => {
  try {
    const response = await api.get('/campaigns');
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};`,

    createCampaign: `// Create a new campaign
const createCampaign = async () => {
  const campaignData = {
    name: 'Q4 B2B Marketing Campaign',
    target_criteria: {
      titles: ['CEO', 'Marketing Manager'],
      locations: ['Germany', 'Berlin'],
      industries: ['Technology', 'Marketing'],
      employee_range: { min: 10, max: 500 }
    },
    email_template: {
      subject: 'Exclusive B2B Marketing Solution',
      body: 'Hello {{first_name}}, we have a solution for your business...'
    },
    schedule: {
      start_date: '2024-01-15T09:00:00Z',
      timezone: 'Europe/Berlin'
    }
  };

  try {
    const response = await api.post('/campaigns', campaignData);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};`,

    extractLeads: `// Extract leads from LinkedIn
const extractLeads = async () => {
  const searchCriteria = {
    keywords: ['CEO', 'Marketing Manager'],
    locations: ['Germany'],
    industries: ['Technology'],
    company_size: { min: 10, max: 500 }
  };

  try {
    const response = await api.post('/leads/extract', {
      search_criteria: searchCriteria,
      max_results: 100,
      platform: 'linkedin'
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};`,

    webhookExample: `// Webhook endpoint example
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  if (!verifySignature(signature, payload)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  const event = payload.event;
  
  switch (event) {
    case 'email.opened':
      console.log('Email opened:', payload.data);
      break;
    case 'lead.converted':
      console.log('Lead converted:', payload.data);
      break;
    case 'campaign.completed':
      console.log('Campaign completed:', payload.data);
      break;
  }
  
  res.status(200).json({ received: true });
});`
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'POST': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'PUT': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'DELETE': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
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
                API Documentation
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Integrate with our B2B campaign platform
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Download SDK
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <KeyIcon className="w-5 h-5 mr-2" />
                Get API Key
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 sticky top-8"
            >
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                API Reference
              </h2>
              <nav className="space-y-2">
                {Object.entries(apiEndpoints).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedEndpoint(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedEndpoint === key
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {section.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Authentication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                  <KeyIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Authentication
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    All API requests require authentication using Bearer tokens
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">Base URL</span>
                  <Button variant="ghost" size="sm">
                    <ClipboardDocumentIcon className="w-4 h-4" />
                  </Button>
                </div>
                <code className="text-sm text-slate-700 dark:text-slate-300">
                  https://api.b2bcampaign.com/v1
                </code>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">Authentication Header</span>
                  <Button variant="ghost" size="sm">
                    <ClipboardDocumentIcon className="w-4 h-4" />
                  </Button>
                </div>
                <code className="text-sm text-slate-700 dark:text-slate-300">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </motion.div>

            {/* Endpoints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].name}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].description}
                </p>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {apiEndpoints[selectedEndpoint as keyof typeof apiEndpoints].endpoints.map((endpoint, index) => (
                  <div key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                          {endpoint.path}
                        </code>
                      </div>
                      <Button variant="ghost" size="sm">
                        <PlayIcon className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {endpoint.description}
                    </p>

                    <div className="space-y-4">
                      {endpoint.auth && (
                        <div>
                          <span className="text-sm font-medium text-slate-900 dark:text-white">Authentication:</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">{endpoint.auth}</span>
                        </div>
                      )}

                      {endpoint.params && endpoint.params.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-slate-900 dark:text-white mb-2 block">Parameters:</span>
                          <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-600">
                                  <th className="text-left py-2 font-medium text-slate-900 dark:text-white">Name</th>
                                  <th className="text-left py-2 font-medium text-slate-900 dark:text-white">Type</th>
                                  <th className="text-left py-2 font-medium text-slate-900 dark:text-white">Required</th>
                                  <th className="text-left py-2 font-medium text-slate-900 dark:text-white">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.params.map((param, paramIndex) => (
                                  <tr key={paramIndex} className="border-b border-slate-200 dark:border-slate-600 last:border-0">
                                    <td className="py-2 font-mono text-slate-900 dark:text-white">{param.name}</td>
                                    <td className="py-2 text-slate-600 dark:text-slate-400">{param.type}</td>
                                    <td className="py-2">
                                      {param.required ? (
                                        <CheckCircleIcon className="w-4 h-4 text-green-600" />
                                      ) : (
                                        <XCircleIcon className="w-4 h-4 text-slate-400" />
                                      )}
                                    </td>
                                    <td className="py-2 text-slate-600 dark:text-slate-400">{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {endpoint.body && (
                        <div>
                          <span className="text-sm font-medium text-slate-900 dark:text-white mb-2 block">Request Body:</span>
                          <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                            <pre className="text-sm text-slate-700 dark:text-slate-300 overflow-x-auto">
                              <code>{JSON.stringify(endpoint.body, null, 2)}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Code Examples */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Code Examples
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Get started with our API using these examples
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Authentication Setup
                  </h3>
                  <div className="bg-slate-900 rounded-lg p-4 relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-slate-400">
                      <ClipboardDocumentIcon className="w-4 h-4" />
                    </Button>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{codeExamples.authentication}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Create Campaign
                  </h3>
                  <div className="bg-slate-900 rounded-lg p-4 relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-slate-400">
                      <ClipboardDocumentIcon className="w-4 h-4" />
                    </Button>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{codeExamples.createCampaign}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Extract Leads
                  </h3>
                  <div className="bg-slate-900 rounded-lg p-4 relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-slate-400">
                      <ClipboardDocumentIcon className="w-4 h-4" />
                    </Button>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{codeExamples.extractLeads}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Webhook Example
                  </h3>
                  <div className="bg-slate-900 rounded-lg p-4 relative">
                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 text-slate-400">
                      <ClipboardDocumentIcon className="w-4 h-4" />
                    </Button>
                    <pre className="text-sm text-slate-300 overflow-x-auto">
                      <code>{codeExamples.webhookExample}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SDKs & Libraries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <CodeBracketIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Official SDKs & Libraries
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                  Use our official SDKs to integrate faster and with less code. 
                  Available for JavaScript, Python, PHP, and more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" size="lg" className="w-full">
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    JavaScript SDK
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    Python SDK
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    PHP SDK
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 