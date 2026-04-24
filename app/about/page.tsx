'use client'

import Link from 'next/link'
import { Factory, Users, Wrench, Award, CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { DisplayImage } from '@/components/display-image'

export default function AboutPage() {
  const { t } = useLanguage()

  const strengths = [
    {
      icon: Factory,
      titleEn: 'In-House Metal Workshop',
      titleZh: '自有五金車間',
      descriptionEn: 'Full metal fabrication including cutting, welding, bending, powder coating, and chrome plating.',
      descriptionZh: '全套五金加工，包括切割、焊接、折彎、粉末噴塗和電鍍。',
    },
    {
      icon: Wrench,
      titleEn: 'Woodworking Shop',
      titleZh: '木工車間',
      descriptionEn: 'CNC routing, edge banding, laminating, veneer application, and custom finishing.',
      descriptionZh: 'CNC加工、封邊、貼面、木皮處理和定制表面處理。',
    },
    {
      icon: Award,
      titleEn: 'Acrylic Fabrication',
      titleZh: '亞克力加工',
      descriptionEn: 'Laser cutting, diamond polishing, thermoforming, and precision bonding for crystal-clear displays.',
      descriptionZh: '激光切割、鑽石拋光、熱成型和精密粘接，打造透明展示架。',
    },
    {
      icon: Users,
      titleEn: 'Skilled Workforce',
      titleZh: '熟練團隊',
      descriptionEn: '300+ experienced workers with dedicated QC team ensuring consistent quality on every order.',
      descriptionZh: '300+經驗豐富的工人，專業QC團隊確保每個訂單質量一致。',
    },
  ]

  const capabilitiesEn = [
    'Custom OEM/ODM design services',
    '3D rendering and prototyping',
    'Volume production (100 to 100,000+ units)',
    'Global shipping and logistics',
    'Quality control and inspection',
    'On-time delivery guarantee',
  ]

  const capabilitiesZh = [
    '定制OEM/ODM設計服務',
    '3D渲染和打樣',
    '批量生產（100至100,000+件）',
    '全球物流配送',
    '質量控制和檢驗',
    '準時交付保證',
  ]

  const galleryItems = [
    { id: 'factory-metal', labelEn: 'Metal Workshop', labelZh: '五金車間' },
    { id: 'factory-wood', labelEn: 'Woodworking Shop', labelZh: '木工車間' },
    { id: 'factory-acrylic', labelEn: 'Acrylic Fabrication', labelZh: '亞克力加工' },
    { id: 'factory-qc', labelEn: 'Quality Control', labelZh: '質量控制' },
    { id: 'factory-warehouse', labelEn: 'Warehouse', labelZh: '倉庫' },
    { id: 'factory-showroom', labelEn: 'Showroom', labelZh: '展廳' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                {t('About Us', '關於我們')}
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground">
                {t(
                  'We are a 300-worker POP display factory in Dongguan, China, specializing in custom retail display stands for over 15 years. Our facility houses complete in-house production capabilities for metal, wood, and acrylic fabrication.',
                  '我們是一家位於中國東莞的300人POP展示架工廠，專注於定制零售展示架超過15年。我們的工廠擁有完整的五金、木工和亞克力加工自有生產線。'
                )}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    {t('Contact Us', '聯繫我們')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/products">
                    {t('View Products', '查看產品')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Factory Image - Display only */}
            <div className="relative rounded-lg overflow-hidden">
              <DisplayImage
                id="factory-about"
                alt="GP Metalware factory floor in Dongguan, China"
                aspectRatio="aspect-[4/3]"
                placeholderIcon={<Factory className="h-16 w-16 opacity-30 mb-4" />}
                placeholderText={t('Factory Image', '工廠圖片')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 px-4 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t('Core Strengths', '核心優勢')}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t(
                'Full in-house production capabilities for complete quality control and faster turnaround',
                '全套自有生產線，全面質量控制，更快交付'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength.titleEn}
                className="flex gap-4 p-6 rounded-lg border border-border bg-background"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <strength.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t(strength.titleEn, strength.titleZh)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(strength.descriptionEn, strength.descriptionZh)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Gallery - Display only */}
      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t('Our Facility', '我們的工廠')}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.id} className="relative rounded-lg overflow-hidden">
                <DisplayImage
                  id={item.id}
                  alt={`${item.labelEn} - ${item.labelZh}`}
                  aspectRatio="aspect-[4/3]"
                  placeholderIcon={<Factory className="h-12 w-12 opacity-30 mb-2" />}
                  placeholderText={t(item.labelEn, item.labelZh)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                {t('Our Capabilities', '我們的能力')}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t(
                  'From initial design to final delivery, we handle every aspect of your POP display project with precision and care.',
                  '從初始設計到最終交付，我們精心處理您POP展示架項目的每個環節。'
                )}
              </p>

              <ul className="mt-8 space-y-3">
                {capabilitiesEn.map((capability, index) => (
                  <li key={capability} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{t(capability, capabilitiesZh[index])}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <DisplayImage
                id="factory-capabilities"
                alt="GP Metalware production capabilities"
                aspectRatio="aspect-square"
                placeholderIcon={<Wrench className="h-16 w-16 opacity-30 mb-4" />}
                placeholderText={t('Capabilities Image', '能力展示圖片')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t('Partner With Us', '與我們合作')}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Whether you need 100 units or 100,000, we have the capacity and expertise to deliver quality POP displays on time.',
              '無論您需要100件還是100,000件，我們都有能力和專業知識準時交付高品質POP展示架。'
            )}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                {t('Get in Touch', '聯繫我們')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
