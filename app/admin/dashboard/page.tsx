'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { 
  Upload, 
  LogOut, 
  Save, 
  Trash2, 
  Package, 
  Factory as FactoryIcon,
  ImageIcon,
  CheckCircle2,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAdmin } from '@/lib/admin-context'
import { useLanguage } from '@/lib/language-context'
import { useImageStore } from '@/lib/image-store'

// Product data structure for editing
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

// Default product data
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

const factoryImages = [
  { id: 'factory-hero', labelEn: 'Hero Background', labelZh: '首頁背景' },
  { id: 'factory-about', labelEn: 'About Page Hero', labelZh: '關於頁面主圖' },
  { id: 'factory-metal', labelEn: 'Metal Workshop', labelZh: '五金車間' },
  { id: 'factory-wood', labelEn: 'Woodworking Shop', labelZh: '木工車間' },
  { id: 'factory-acrylic', labelEn: 'Acrylic Fabrication', labelZh: '亞克力加工' },
  { id: 'factory-qc', labelEn: 'Quality Control', labelZh: '質量控制' },
  { id: 'factory-warehouse', labelEn: 'Warehouse', labelZh: '倉庫' },
  { id: 'factory-showroom', labelEn: 'Showroom', labelZh: '展廳' },
  { id: 'factory-capabilities', labelEn: 'Capabilities Image', labelZh: '能力展示圖片' },
]

const PRODUCTS_STORAGE_KEY = 'gp_metalware_products'

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAdmin()
  const { t } = useLanguage()
  const { getImage, setImage, removeImage } = useImageStore()
  const router = useRouter()
  
  const [activeTab, setActiveTab] = useState<'products' | 'factory'>('products')
  const [products, setProducts] = useState<Product[]>(defaultProducts)
  const [editingProduct, setEditingProduct] = useState<number | null>(null)
  const [saveMessage, setSaveMessage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [currentUploadId, setCurrentUploadId] = useState<string | null>(null)

  // Load products from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY)
      if (stored) {
        setProducts(JSON.parse(stored))
      }
    } catch (e) {
      console.error('Failed to load products:', e)
    }
  }, [])

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/admin')
  }

  const handleImageUpload = (id: string) => {
    setCurrentUploadId(id)
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && currentUploadId) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const dataUrl = reader.result as string
        setImage(currentUploadId, dataUrl)
        setSaveMessage(t('Image uploaded successfully', '圖片上傳成功'))
        setTimeout(() => setSaveMessage(null), 3000)
      }
      reader.readAsDataURL(file)
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setCurrentUploadId(null)
  }

  const handleRemoveImage = (id: string) => {
    removeImage(id)
    setSaveMessage(t('Image removed', '圖片已移除'))
    setTimeout(() => setSaveMessage(null), 3000)
  }

  const handleProductChange = (id: number, field: keyof Product, value: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    )
  }

  const saveProducts = () => {
    try {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products))
      setSaveMessage(t('Products saved successfully', '產品信息已保存'))
      setTimeout(() => setSaveMessage(null), 3000)
    } catch (e) {
      console.error('Failed to save products:', e)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Header */}
      <div className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">
                {t('Admin Dashboard', '管理員控制台')}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('Manage images and product content', '管理圖片和產品內容')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {saveMessage && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-500/10 text-green-500 text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{saveMessage}</span>
                </div>
              )}
              <Button
                variant="outline"
                onClick={handleLogout}
                className="text-destructive border-destructive/30 hover:bg-destructive/10"
              >
                <LogOut className="mr-2 h-4 w-4" />
                {t('Logout', '登出')}
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'products'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <Package className="h-4 w-4" />
              {t('Product Images', '產品圖片')}
            </button>
            <button
              onClick={() => setActiveTab('factory')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'factory'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <FactoryIcon className="h-4 w-4" />
              {t('Factory Images', '工廠圖片')}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        {activeTab === 'products' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">
                {t('Product Management', '產品管理')}
              </h2>
              <Button onClick={saveProducts} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Save className="mr-2 h-4 w-4" />
                {t('Save All Changes', '保存所有更改')}
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                const imageId = `product-${product.id}`
                const imageUrl = getImage(imageId)
                const isEditing = editingProduct === product.id

                return (
                  <div key={product.id} className="bg-card border border-border rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="relative aspect-square bg-muted">
                      {imageUrl ? (
                        <>
                          <Image
                            src={imageUrl}
                            alt={product.nameEn}
                            fill
                            className="object-cover"
                          />
                          <button
                            onClick={() => handleRemoveImage(imageId)}
                            className="absolute top-2 right-2 p-1.5 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                          <ImageIcon className="h-12 w-12 opacity-30 mb-2" />
                          <span className="text-xs">{t('No image', '暫無圖片')}</span>
                        </div>
                      )}
                      <button
                        onClick={() => handleImageUpload(imageId)}
                        className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-2 py-2 rounded-md bg-background/90 text-foreground text-sm hover:bg-background transition-colors"
                      >
                        <Upload className="h-4 w-4" />
                        {t('Upload Image', '上傳圖片')}
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      {isEditing ? (
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs text-muted-foreground">Name (EN)</label>
                            <Input
                              value={product.nameEn}
                              onChange={(e) => handleProductChange(product.id, 'nameEn', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Name (中文)</label>
                            <Input
                              value={product.nameZh}
                              onChange={(e) => handleProductChange(product.id, 'nameZh', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Description (EN)</label>
                            <Input
                              value={product.descriptionEn}
                              onChange={(e) => handleProductChange(product.id, 'descriptionEn', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Description (中文)</label>
                            <Input
                              value={product.descriptionZh}
                              onChange={(e) => handleProductChange(product.id, 'descriptionZh', e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Material Tag</label>
                            <select
                              value={product.material}
                              onChange={(e) => {
                                const val = e.target.value
                                handleProductChange(product.id, 'material', val)
                                if (val === 'metal') {
                                  handleProductChange(product.id, 'materialEn', 'Metal')
                                  handleProductChange(product.id, 'materialZh', '五金')
                                } else if (val === 'wood') {
                                  handleProductChange(product.id, 'materialEn', 'Wood')
                                  handleProductChange(product.id, 'materialZh', '木')
                                } else {
                                  handleProductChange(product.id, 'materialEn', 'Acrylic')
                                  handleProductChange(product.id, 'materialZh', '亞克力')
                                }
                              }}
                              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            >
                              <option value="metal">Metal / 五金</option>
                              <option value="wood">Wood / 木</option>
                              <option value="acrylic">Acrylic / 亞克力</option>
                            </select>
                          </div>
                          <Button
                            onClick={() => setEditingProduct(null)}
                            size="sm"
                            className="w-full"
                          >
                            {t('Done', '完成')}
                          </Button>
                        </div>
                      ) : (
                        <>
                          <h3 className="font-semibold text-foreground">{product.nameEn}</h3>
                          <p className="text-sm text-muted-foreground">{product.nameZh}</p>
                          <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                            {product.descriptionEn}
                          </p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                              {product.materialEn}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setEditingProduct(product.id)}
                            >
                              {t('Edit', '編輯')}
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'factory' && (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-6">
              {t('Factory & Site Images', '工廠及網站圖片')}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {factoryImages.map((item) => {
                const imageUrl = getImage(item.id)

                return (
                  <div key={item.id} className="bg-card border border-border rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] bg-muted">
                      {imageUrl ? (
                        <>
                          <Image
                            src={imageUrl}
                            alt={item.labelEn}
                            fill
                            className="object-cover"
                          />
                          <button
                            onClick={() => handleRemoveImage(item.id)}
                            className="absolute top-2 right-2 p-1.5 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                          <FactoryIcon className="h-12 w-12 opacity-30 mb-2" />
                          <span className="text-xs">{t('No image', '暫無圖片')}</span>
                        </div>
                      )}
                      <button
                        onClick={() => handleImageUpload(item.id)}
                        className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-2 py-2 rounded-md bg-background/90 text-foreground text-sm hover:bg-background transition-colors"
                      >
                        <Upload className="h-4 w-4" />
                        {t('Upload Image', '上傳圖片')}
                      </button>
                    </div>

                    {/* Label */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">{t(item.labelEn, item.labelZh)}</h3>
                      <p className="text-xs text-muted-foreground mt-1">ID: {item.id}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
