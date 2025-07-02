'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useApp } from '@/components/providers'
import { languages } from '@/i18n/config'
import { cn } from '@/lib/utils'
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function Header() {
  const { t } = useTranslation()
  const { theme, setTheme, language, setLanguage, isAuthenticated, user } = useApp()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.features'), href: '/features' },
    { name: t('navigation.pricing'), href: '/pricing' },
    { name: t('navigation.integrations'), href: '/integrations' },
    { name: t('navigation.support'), href: '/support' },
  ]

  const dashboardNavigation = [
    { name: t('navigation.dashboard'), href: '/dashboard' },
    { name: t('navigation.campaigns'), href: '/campaigns' },
    { name: t('navigation.leads'), href: '/leads' },
    { name: t('navigation.analytics'), href: '/analytics' },
    { name: t('navigation.integrations'), href: '/integrations' },
  ]

  const currentNav = isAuthenticated ? dashboardNavigation : navigation

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">B2B</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Campaign Platform
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <GlobeAltIcon className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      'flex items-center space-x-2',
                      language === lang.code && 'bg-blue-50 dark:bg-blue-900/20'
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  {theme === 'light' && <SunIcon className="h-4 w-4" />}
                  {theme === 'dark' && <MoonIcon className="h-4 w-4" />}
                  {theme === 'system' && <ComputerDesktopIcon className="h-4 w-4" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <SunIcon className="mr-2 h-4 w-4" />
                  <span>{t('common.light')}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <MoonIcon className="mr-2 h-4 w-4" />
                  <span>{t('common.dark')}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <ComputerDesktopIcon className="mr-2 h-4 w-4" />
                  <span>{t('common.auto')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons */}
            {!isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    {t('common.login')}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    {t('common.register')}
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {user?.name || 'User'}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    localStorage.removeItem('auth_token')
                    localStorage.removeItem('user')
                    window.location.reload()
                  }}
                >
                  {t('common.logout')}
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-4 w-4" />
              ) : (
                <Bars3Icon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {currentNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {!isAuthenticated && (
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 pb-3">
                <div className="space-y-2">
                  <Link href="/login">
                    <Button variant="ghost" className="w-full justify-start">
                      {t('common.login')}
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      {t('common.register')}
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
} 