'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { DisplayImage } from '@/components/display-image'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <DisplayImage
          id="factory-hero"
          alt="GP Metalware factory floor with metal, wood, and acrylic display production"
          className="absolute inset-0 z-0"
          aspectRatio=""
        />
        {/* Fallback pattern if no image uploaded */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-card to-muted -z-10" />
        <div className="absolute inset-0 opacity-5 -z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-20 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
          <span className="font-medium">{t('Dongguan, China', '東莞, 中國')}</span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          {t('Custom POP Display', '定制POP展示架')}
          <br />
          <span className="text-primary">{t('Manufacturing Excellence', '卓越製造')}</span>
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t(
            '300 workers | In-house metal, wood & acrylic production | OEM/ODM services for global retail brands',
            '300名員工 | 五金、木、亞克力自有生產線 | 全球零售品牌OEM/ODM服務'
          )}
        </p>

        {/* Material Tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            {t('Metal', '五金')}
          </span>
          <span className="inline-flex items-center rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            {t('Wood', '木')}
          </span>
          <span className="inline-flex items-center rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            {t('Acrylic', '亞克力')}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            <Link href="/contact">
              {t('Request a Quote', '索取報價')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <Link href="/products">
              {t('View Products', '查看產品')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
