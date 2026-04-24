'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/lib/language-context'

const faqs = [
  {
    questionEn: 'What is your Minimum Order Quantity (MOQ)?',
    questionZh: '你們的最小起訂量 (MOQ) 是多少？',
    answerEn: 'Our MOQ varies depending on the product complexity and materials. For standard designs, MOQ is typically 100-500 units. For highly customized products with special tooling, MOQ may be 500-1000 units. We can discuss flexible arrangements for pilot orders.',
    answerZh: '我們的最小起訂量取決於產品複雜度和材料。標準設計通常為100-500件。高度定制的產品需要特殊模具，最小起訂量可能為500-1000件。我們可以為試單提供靈活的安排。',
  },
  {
    questionEn: 'What is the typical lead time for orders?',
    questionZh: '訂單的生產週期通常是多長？',
    answerEn: 'Sample production takes 7-14 days. Mass production typically takes 25-45 days depending on order quantity and complexity. Rush orders can be accommodated with prior arrangement.',
    answerZh: '樣品生產需要7-14天。批量生產通常需要25-45天，具體取決於訂單數量和複雜程度。如需加急訂單，請提前安排。',
  },
  {
    questionEn: 'What materials do you work with?',
    questionZh: '你們使用哪些材料？',
    answerEn: 'We specialize in three core materials: Metal (steel, iron with powder coating or chrome plating), Wood (MDF, plywood, solid wood with various finishes), and Acrylic (PMMA with laser cutting and polishing). We also work with mixed materials combining these options.',
    answerZh: '我們專注於三種核心材料：五金（鋼鐵，粉末噴塗或電鍍），木（中纖板、膠合板、實木，各種表面處理），亞克力（PMMA激光切割和拋光）。我們也做這些材料的混合搭配。',
  },
  {
    questionEn: 'Do you provide OEM/ODM services?',
    questionZh: '你們提供OEM/ODM服務嗎？',
    answerEn: 'Yes, we offer full OEM/ODM services. You can provide your own designs, or our team can help develop custom solutions based on your requirements. We offer 3D rendering and prototyping services.',
    answerZh: '是的，我們提供全套OEM/ODM服務。您可以提供自己的設計，或者我們的團隊可以根據您的需求開發定制解決方案。我們提供3D渲染和打樣服務。',
  },
  {
    questionEn: 'Can you ship internationally?',
    questionZh: '你們可以發國際貨運嗎？',
    answerEn: 'Yes, we ship worldwide. We can arrange sea freight (FCL/LCL), air freight, or express delivery depending on your timeline and budget. We handle all export documentation and can deliver to any port worldwide.',
    answerZh: '是的，我們發貨到全球。我們可以安排海運（整櫃/拼櫃）、空運或快遞，具體取決於您的時間和預算要求。我們處理所有出口文件，可以送達全球任何港口。',
  },
  {
    questionEn: 'What is your payment terms?',
    questionZh: '你們的付款方式是什麼？',
    answerEn: 'For new customers, we typically require 30% deposit upon order confirmation and 70% balance before shipment (T/T). For established customers, we can discuss flexible payment terms including L/C.',
    answerZh: '對於新客戶，我們通常要求訂單確認時支付30%定金，發貨前支付70%尾款（T/T電匯）。對於老客戶，我們可以討論靈活的付款方式，包括信用證。',
  },
  {
    questionEn: 'Do you provide samples?',
    questionZh: '你們提供樣品嗎？',
    answerEn: 'Yes, we can provide samples for evaluation. Sample costs vary depending on complexity and typically range from $50-500 including shipping. Sample costs are often refunded or credited against bulk orders.',
    answerZh: '是的，我們可以提供樣品供評估。樣品費用根據複雜程度而定，通常為50-500美元（含運費）。樣品費用通常可在批量訂單時退還或抵扣。',
  },
  {
    questionEn: 'What quality control measures do you have?',
    questionZh: '你們有什麼質量控制措施？',
    answerEn: 'We have a dedicated QC team that inspects products at multiple stages: raw material inspection, in-process checks, and final inspection before packing. We follow ISO quality standards and can accommodate third-party inspection upon request.',
    answerZh: '我們有專門的質量控制團隊，在多個階段檢驗產品：原材料檢驗、過程檢驗和包裝前最終檢驗。我們遵循ISO質量標準，可根據要求安排第三方驗貨。',
  },
  {
    questionEn: 'Can you match specific colors or finishes?',
    questionZh: '你們能匹配特定的顏色或表面處理嗎？',
    answerEn: 'Yes, we can match Pantone colors, RAL colors, or provide custom color matching based on physical samples. We offer various finishes including matte, gloss, textured, wood grain, and metallic effects.',
    answerZh: '是的，我們可以匹配潘通色、RAL色，或根據實物樣品進行定制配色。我們提供各種表面處理，包括啞光、亮光、紋理、木紋和金屬效果。',
  },
  {
    questionEn: 'How do I get started with an order?',
    questionZh: '如何開始下訂單？',
    answerEn: "Simply contact us via email or our contact form with your requirements (product type, quantities, materials, design files if available). We'll provide a quotation within 24-48 hours. Once approved, we can proceed with sampling or direct production.",
    answerZh: '只需通過電子郵件或聯繫表格向我們發送您的需求（產品類型、數量、材料、設計文件等）。我們將在24-48小時內提供報價。確認後，我們可以開始打樣或直接生產。',
  },
]

export default function FAQPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-12 px-4 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {t('Frequently Asked Questions', '常見問題')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Find answers to common questions about our custom POP display manufacturing services',
              '查找關於我們定制POP展示架生產服務的常見問題解答'
            )}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <p className="font-medium text-foreground">{t(faq.questionEn, faq.questionZh)}</p>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground">{t(faq.answerEn, faq.answerZh)}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">
            {t('Still Have Questions?', '還有其他問題？')}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Our team is ready to help with any questions about your custom POP display project.',
              '我們的團隊隨時準備解答您關於定制POP展示架項目的任何問題。'
            )}
          </p>
          <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              {t('Contact Us', '聯繫我們')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
