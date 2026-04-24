'use client'

import { ProductGrid } from '@/components/product-grid'
import { ProductFilters } from '@/components/product-filters'
import { useLanguage } from '@/lib/language-context'

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {t('Our Products', '產品展示')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Browse our range of custom POP display solutions in metal, wood, and acrylic',
              '瀏覽我們的五金、木、亞克力定制POP展示架系列'
            )}
          </p>
        </div>

        {/* Filters */}
        <ProductFilters />

        {/* Product Grid */}
        <ProductGrid />

        {/* Custom Order CTA */}
        <div className="mt-16 text-center p-8 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">
            {t("Don't see what you need?", '找不到您需要的產品？')}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t(
              "We specialize in custom OEM/ODM manufacturing. Send us your design or requirements and we'll bring it to life.",
              '我們專注於定制OEM/ODM生產。發送您的設計或需求，我們將為您實現。'
            )}
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t('Request Custom Quote', '索取定制報價')}
          </a>
        </div>
      </div>
    </div>
  )
}
