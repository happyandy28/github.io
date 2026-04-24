'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { t } = useLanguage()

  const materials = [
    { id: 'all', en: 'All Materials', zh: '全部材料' },
    { id: 'metal', en: 'Metal', zh: '五金' },
    { id: 'wood', en: 'Wood', zh: '木' },
    { id: 'acrylic', en: 'Acrylic', zh: '亞克力' },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      {materials.map((material) => (
        <Button
          key={material.id}
          variant={activeFilter === material.id ? 'default' : 'outline'}
          className={activeFilter === material.id ? 'bg-primary text-primary-foreground' : ''}
          onClick={() => setActiveFilter(material.id)}
        >
          {t(material.en, material.zh)}
        </Button>
      ))}
    </div>
  )
}
