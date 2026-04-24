'use client'

import { useLanguage } from '@/lib/language-context'

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { value: '300+', en: 'Workers', zh: '員工' },
    { value: '15+', en: 'Years Experience', zh: '年經驗' },
    { value: '50+', en: 'Countries Served', zh: '服務國家' },
    { value: '10,000+', en: 'Projects Completed', zh: '完成項目' },
  ]

  return (
    <section className="py-16 px-4 lg:px-8 border-y border-border bg-muted/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.en} className="text-center">
              <div className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-foreground">{t(stat.en, stat.zh)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
