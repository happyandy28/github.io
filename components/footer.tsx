'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()

  const navigation = {
    main: [
      { en: 'Home', zh: '首頁', href: '/' },
      { en: 'Products', zh: '產品展示', href: '/products' },
      { en: 'About Us', zh: '關於我們', href: '/about' },
      { en: 'Contact', zh: '聯繫我們', href: '/contact' },
      { en: 'FAQ', zh: '常見問題', href: '/faq' },
    ],
    materials: [
      { en: 'Metal Displays', zh: '五金展示架', href: '/products?material=metal' },
      { en: 'Wood Displays', zh: '木展示架', href: '/products?material=wood' },
      { en: 'Acrylic Displays', zh: '亞克力展示架', href: '/products?material=acrylic' },
    ],
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
                <span className="text-lg font-bold text-primary-foreground">GP</span>
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">GP Metalware</p>
                <p className="text-xs text-muted-foreground">{t('Dongguan Display Factory', '東莞展示架工廠')}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {t(
                'Professional POP display manufacturer in Dongguan, China. Specializing in custom metal, wood, and acrylic retail display stands for global brands.',
                '專業定制POP展示架生產廠家，提供五金、木、亞克力展示架定制服務。'
              )}
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a href="mailto:andylai@gpmetalware.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4 shrink-0" />
                andylai@gpmetalware.com
              </a>
              <a href="https://ecoddl-display.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Globe className="h-4 w-4 shrink-0" />
                ecoddl-display.com
              </a>
              <div className="flex flex-col gap-1">
                <a href="tel:+6421080968882" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>NZ: +64 21 08096882</span>
                </a>
                <a href="tel:+8618826823521" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>China: +86-18826823521</span>
                </a>
                <a href="tel:+85268572148" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>HK: +852-6857 2148</span>
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Building B, No.10, Qiaochang road (Dazhou Section), Dazhou community, Qiaotou town, China, 523525</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('Navigation', '導航')}</h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.en}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {t(item.en, item.zh)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('Materials', '材料')}</h3>
            <ul className="mt-4 space-y-2">
              {navigation.materials.map((item) => (
                <li key={item.en}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {t(item.en, item.zh)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GP Metalware. {t('All rights reserved.', '版權所有')}
          </p>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {t('China POP Display Manufacturer | Custom Retail Display Factory | OEM/ODM Services', '中國POP展示架製造商 | 定制零售展示架工廠 | OEM/ODM服務')}
          </p>
        </div>
      </div>
    </footer>
  )
}
