'use client'

import Link from 'next/link'
import { ArrowRight, Hammer, TreeDeciduous, Gem } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface MaterialCardProps {
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  icon: 'metal' | 'wood' | 'acrylic'
}

const icons = {
  metal: Hammer,
  wood: TreeDeciduous,
  acrylic: Gem,
}

export function MaterialCard({ titleEn, titleZh, descriptionEn, descriptionZh, icon }: MaterialCardProps) {
  const { t } = useLanguage()
  const Icon = icons[icon]
  const href = `/products?material=${icon}`

  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-7 w-7" />
      </div>
      
      <h3 className="mt-4 text-xl font-semibold text-foreground">{t(titleEn, titleZh)}</h3>
      
      <p className="mt-3 text-sm text-muted-foreground flex-grow">{t(descriptionEn, descriptionZh)}</p>
      
      <div className="mt-4 flex items-center text-sm font-medium text-primary">
        {t('View Products', '查看產品')}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
