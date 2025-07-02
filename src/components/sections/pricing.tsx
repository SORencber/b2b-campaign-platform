'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid'

export function PricingSection() {
  const { t } = useTranslation()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  // Fallback features in case translations are not loaded
  const fallbackFeatures = {
    starter: ['Up to 1,000 leads', 'Basic email automation', 'CRM integration', 'Email support'],
    professional: ['Up to 10,000 leads', 'Advanced automation', 'Priority support', 'Analytics dashboard'],
    enterprise: ['Unlimited leads', 'Custom workflows', 'Dedicated support', 'API access'],
    agency: ['Multi-client management', 'White-label options', 'Custom integrations', '24/7 support']
  }

  const plans = [
    {
      name: t('pricing.starter.name', 'Starter'),
      description: t('pricing.starter.description', 'Perfect for small businesses'),
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: (t('pricing.starter.features', { returnObjects: true }) as string[]) || fallbackFeatures.starter,
      popular: false,
      color: 'from-slate-500 to-slate-600',
    },
    {
      name: t('pricing.professional.name', 'Professional'),
      description: t('pricing.professional.description', 'Ideal for growing companies'),
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: (t('pricing.professional.features', { returnObjects: true }) as string[]) || fallbackFeatures.professional,
      popular: true,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: t('pricing.enterprise.name', 'Enterprise'),
      description: t('pricing.enterprise.description', 'For large organizations'),
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: (t('pricing.enterprise.features', { returnObjects: true }) as string[]) || fallbackFeatures.enterprise,
      popular: false,
      color: 'from-purple-500 to-pink-600',
    },
    {
      name: t('pricing.agency.name', 'Agency'),
      description: t('pricing.agency.description', 'For marketing agencies'),
      monthlyPrice: 399,
      yearlyPrice: 3990,
      features: (t('pricing.agency.features', { returnObjects: true }) as string[]) || fallbackFeatures.agency,
      popular: false,
      color: 'from-emerald-500 to-teal-600',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('pricing.title', 'Simple, Transparent Pricing')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            {t('pricing.subtitle', 'Choose the perfect plan for your business needs')}
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-4 bg-white dark:bg-slate-700 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('pricing.monthly', 'Monthly')}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('pricing.yearly', 'Yearly')}
              <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                {t('pricing.save', 'Save 20%')}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-blue-500 shadow-lg scale-105'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    {t('pricing.popular', 'Most Popular')}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    €{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {billingCycle === 'monthly' ? t('pricing.starter.period', '/month') : '/year'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {Array.isArray(plan.features) && plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 font-semibold ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                }`}
              >
                {plan.popular ? t('pricing.getStarted', 'Get Started') : t('pricing.choosePlan', 'Choose Plan')}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-300">
            {t('pricing.trialNote', 'All plans include a 14-day free trial. No credit card required.')}
          </p>
        </motion.div>
      </div>
    </section>
  )
} 