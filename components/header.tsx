'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

const navigation = [
  { en: 'Home', zh: '首頁', href: '/' },
  { en: 'Products', zh: '產品展示', href: '/products' },
  { en: 'About Us', zh: '關於我們', href: '/about' },
  { en: 'Contact', zh: '聯繫我們', href: '/contact' },
  { en: 'FAQ', zh: '常見問題', href: '/faq' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
            <span className="text-lg font-bold text-primary-foreground">GP</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-lg font-semibold text-foreground">GP Metalware</p>
            <p className="text-xs text-muted-foreground">{t('Dongguan Display Factory', '東莞展示架工廠')}</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.en}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t(item.en, item.zh)}
            </Link>
          ))}
        </div>

        {/* Language Toggle + CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            {language === 'en' ? '中文' : 'EN'}
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              {t('Request Quote', '索取報價')}
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-1"
          >
            <Globe className="h-4 w-4" />
            {language === 'en' ? '中文' : 'EN'}
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.en}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.en, item.zh)}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t('Request Quote', '索取報價')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
