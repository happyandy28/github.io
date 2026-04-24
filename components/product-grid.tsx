'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { DisplayImage } from '@/components/display-image'

interface Product {
  id: number
  nameEn: string
  nameZh: string
  descriptionEn: string
  descriptionZh: string
  material: string
  materialEn: string
  materialZh: string
}

const defaultProducts: Product[] = [
  {
    id: 1,
    nameEn: 'Metal Floor Display Stand',
    nameZh: '五金落地展示架',
    descriptionEn: 'Heavy-duty powder-coated steel floor display with adjustable shelves',
    descriptionZh: '重型粉末噴塗鋼製落地展示架，可調節層板',
    material: 'metal',
    materialEn: 'Metal',
    materialZh: '五金',
  },
  {
    id: 2,
    nameEn: 'Rotating Metal Spinner Rack',
    nameZh: '旋轉五金展示架',
    descriptionEn: 'Chrome-plated rotating display rack with multiple tiers',
    descriptionZh: '電鍍旋轉展示架，多層設計',
    material: 'metal',
    materialEn: 'Metal',
    materialZh: '五金',
  },
  {
    id: 3,
    nameEn: 'Metal Counter Display',
    nameZh: '五金台面展示架',
    descriptionEn: 'Compact countertop metal display for small products',
    descriptionZh: '緊湊型五金台面展示架，適合小型產品',
    material: 'metal',
    materialEn: 'Metal',
    materialZh: '五金',
  },
  {
    id: 4,
    nameEn: 'Wood Retail Gondola',
    nameZh: '木製零售貨架',
    descriptionEn: 'Premium MDF gondola with laminate finish for retail stores',
    descriptionZh: '高級中纖板貨架，貼面處理，適合零售店',
    material: 'wood',
    materialEn: 'Wood',
    materialZh: '木',
  },
  {
    id: 5,
    nameEn: 'Wooden Countertop Display',
    nameZh: '木製台面展示架',
    descriptionEn: 'Solid wood countertop display with product slots',
    descriptionZh: '實木台面展示架，帶產品槽位',
    material: 'wood',
    materialEn: 'Wood',
    materialZh: '木',
  },
  {
    id: 6,
    nameEn: 'Wood Slatwall Panel System',
    nameZh: '木製掛板系統',
    descriptionEn: 'Versatile slatwall panels with accessories',
    descriptionZh: '多功能掛板系統，配件齊全',
    material: 'wood',
    materialEn: 'Wood',
    materialZh: '木',
  },
  {
    id: 7,
    nameEn: 'Acrylic Cosmetic Display',
    nameZh: '亞克力化妝品展示架',
    descriptionEn: 'Crystal-clear tiered display for cosmetics and beauty products',
    descriptionZh: '透明分層展示架，適合化妝品和美容產品',
    material: 'acrylic',
    materialEn: 'Acrylic',
    materialZh: '亞克力',
  },
  {
    id: 8,
    nameEn: 'Acrylic Brochure Holder',
    nameZh: '亞克力資料架',
    descriptionEn: 'Multi-pocket clear acrylic brochure and leaflet display',
    descriptionZh: '多格透明亞克力宣傳單和資料展示架',
    material: 'acrylic',
    materialEn: 'Acrylic',
    materialZh: '亞克力',
  },
  {
    id: 9,
    nameEn: 'Acrylic Jewelry Display',
    nameZh: '亞克力珠寶展示架',
    descriptionEn: 'Premium transparent display for jewelry and watches',
    descriptionZh: '高級透明展示架，適合珠寶和手錶',
    material: 'acrylic',
    materialEn: 'Acrylic',
    materialZh: '亞克力',
  },
  {
    id: 10,
    nameEn: 'Mixed Material Display Tower',
    nameZh: '混合材料展示塔',
    descriptionEn: 'Metal frame with wood shelves and acrylic accents',
    descriptionZh: '金屬框架配木層板和亞克力裝飾',
    material: 'metal',
    materialEn: 'Mixed',
    materialZh: '混合材料',
  },
  {
    id: 11,
    nameEn: 'Wood & Metal Hybrid Shelf',
    nameZh: '木金混合貨架',
    descriptionEn: 'Industrial style with metal frame and wood panels',
    descriptionZh: '工業風格，金屬框架配木板',
    material: 'wood',
    materialEn: 'Wood + Metal',
    materialZh: '木 + 五金',
  },
  {
    id: 12,
    nameEn: 'Acrylic Light Box Display',
    nameZh: '亞克力燈箱展示架',
    descriptionEn: 'Backlit acrylic display with LED illumination',
    descriptionZh: '背光亞克力展示架，LED照明',
    material: 'acrylic',
    materialEn: 'Acrylic',
    materialZh: '亞克力',
  },
]

const PRODUCTS_STORAGE_KEY = 'gp_metalware_products'

export function ProductGrid() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>(defaultProducts)

  // Load products from localStorage if edited by admin
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY)
      if (stored) {
        setProducts(JSON.parse(stored))
      }
    } catch (e) {
      // Use default products on error
    }
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        >
          {/* Product Image - Display only */}
          <DisplayImage
            id={`product-${product.id}`}
            alt={`${product.nameEn} - ${product.nameZh} - Custom POP display by GP Metalware`}
            aspectRatio="aspect-square"
            placeholderIcon={
              <div className="text-5xl mb-2 opacity-30">
                {product.material === 'metal' && '⚙️'}
                {product.material === 'wood' && '🪵'}
                {product.material === 'acrylic' && '💎'}
              </div>
            }
            placeholderText={t('Product Image', '產品圖片')}
          />

          {/* Product Info */}
          <div className="flex flex-col flex-grow p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-foreground">{t(product.nameEn, product.nameZh)}</h3>
              </div>
            </div>
            
            <p className="mt-2 text-sm text-muted-foreground flex-grow">
              {t(product.descriptionEn, product.descriptionZh)}
            </p>
            
            {/* Material Tag */}
            <div className="mt-3">
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                {t(product.materialEn, product.materialZh)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
