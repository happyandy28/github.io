'use client'

import Link from 'next/link'
import { ArrowRight, Factory, Users, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MaterialCard } from '@/components/material-card'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { useLanguage } from '@/lib/language-context'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Materials Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t('Core Materials', '核心材料')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                'We specialize in three core materials for custom POP display manufacturing',
                '專業三大核心材料定制POP展示架生產'
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <MaterialCard
              titleEn="Metal"
              titleZh="五金 / 鋼鐵"
              descriptionEn="Steel and iron displays with powder coating, chrome plating, and custom finishes. Durable and premium."
              descriptionZh="鋼鐵展示架，粉末噴塗、電鍍處理，定制表面工藝，堅固耐用。"
              icon="metal"
            />
            <MaterialCard
              titleEn="Wood"
              titleZh="木"
              descriptionEn="MDF, plywood, and solid wood displays with laminate, veneer, or painted finishes."
              descriptionZh="中纖板、膠合板、實木展示架，貼面、木皮或噴漆表面處理。"
              icon="wood"
            />
            <MaterialCard
              titleEn="Acrylic"
              titleZh="亞克力"
              descriptionEn="Crystal-clear PMMA displays with laser cutting, bending, and polishing for luxury retail."
              descriptionZh="透明亞克力展示架，激光切割、折彎、拋光，適合高端零售。"
              icon="acrylic"
            />
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <StatsSection />

      {/* Factory Strengths */}
      <section className="py-20 px-4 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t('Factory Strengths', '工廠實力')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                'Full in-house production capabilities for complete quality control',
                '全套自有生產線，全面質量控制'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Factory className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t('In-House Production', '全套自有生產線')}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {t(
                  'Metal workshop, woodworking shop, and acrylic fabrication all under one roof for seamless production.',
                  '五金車間、木工車間、亞克力加工車間，一站式生產。'
                )}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t('300+ Skilled Workers', '300+熟練工人')}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {t(
                  'Experienced team ensuring high-quality craftsmanship and on-time delivery for every project.',
                  '經驗豐富的團隊，確保每個項目的高品質工藝和準時交付。'
                )}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Wrench className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t('OEM/ODM Services', 'OEM/ODM定制服務')}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {t(
                  'From design concept to finished product, we handle all aspects of custom display manufacturing.',
                  '從設計概念到成品，我們處理定制展示架製造的各個環節。'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t('Ready to Start Your Project?', '準備好開始您的項目了嗎？')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Contact us today for a free consultation and quote on your custom POP display needs.',
              '立即聯繫我們，獲取免費諮詢和報價。'
            )}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                {t('Request a Quote', '索取報價')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                {t('View Products', '查看產品')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
