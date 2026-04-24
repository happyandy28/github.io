'use client'

import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { useLanguage } from '@/lib/language-context'

export default function ContactPage() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      labelEn: 'Email',
      labelZh: '電子郵件',
      value: 'andylai@gpmetalware.com',
      href: 'mailto:andylai@gpmetalware.com',
    },
    {
      icon: Globe,
      labelEn: 'Website',
      labelZh: '網站',
      value: 'ecoddl-display.com',
      href: 'https://ecoddl-display.com/',
    },
    {
      icon: Phone,
      labelEn: 'Phone (NZ)',
      labelZh: '電話（新西蘭）',
      value: '+64 21 08096882',
      href: 'tel:+6421080968882',
    },
    {
      icon: Phone,
      labelEn: 'Phone (China)',
      labelZh: '電話（中國）',
      value: '+86-18826823521',
      href: 'tel:+8618826823521',
    },
    {
      icon: Phone,
      labelEn: 'Phone (Hong Kong)',
      labelZh: '電話（香港）',
      value: '+852-6857 2148',
      href: 'tel:+85268572148',
    },
    {
      icon: MapPin,
      labelEn: 'Address',
      labelZh: '地址',
      value: 'Building B, No.10, Qiaochang road (Dazhou Section), Dazhou community, Qiaotou town, China, 523525',
      valueZh: '中國東莞市橋頭鎮大洲社區橋常路（大洲段）10號B棟，523525',
      href: null,
    },
    {
      icon: Clock,
      labelEn: 'Business Hours',
      labelZh: '工作時間',
      value: 'Mon-Sat: 9:00 AM - 6:00 PM (GMT+8)',
      valueZh: '週一至週六: 9:00 - 18:00 (北京時間)',
      href: null,
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {t('Contact Us', '聯繫我們')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Get in touch for custom POP display quotes, product inquiries, or partnership opportunities',
              '獲取定制POP展示架報價、產品諮詢或合作機會'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {t('Get in Touch', '聯繫方式')}
            </h2>
            
            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.labelEn} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t(item.labelEn, item.labelZh)}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-1 text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <>
                        <p className="mt-1 text-muted-foreground">{t(item.value, item.valueZh || item.value)}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Person */}
            <div className="mt-10 p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground">Andy Lai</h3>
              <p className="text-sm text-muted-foreground">{t('Director / CEO', '董事 / 總經理')}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {t(
                  'Direct contact for OEM/ODM inquiries and large volume orders.',
                  'OEM/ODM諮詢及大批量訂單直接聯繫。'
                )}
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 aspect-[16/9] rounded-lg overflow-hidden bg-muted">
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                <MapPin className="h-12 w-12 opacity-30 mb-4" />
                <span className="text-sm">{t('Map', '地圖')}</span>
                <span className="text-xs opacity-50 mt-2">{t('Add Google Maps embed', '添加谷歌地圖嵌入')}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {t('Send Us a Message', '發送消息')}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t(
                "Fill out the form below and we'll get back to you within 24 hours.",
                '填寫以下表格，我們將在24小時內回復您。'
              )}
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
