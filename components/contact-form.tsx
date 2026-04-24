'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { useLanguage } from '@/lib/language-context'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()

  const inquiryTypes = [
    { value: 'quote', en: 'Request Quote', zh: '索取報價' },
    { value: 'custom', en: 'Custom OEM/ODM', zh: '定制OEM/ODM' },
    { value: 'product', en: 'Product Inquiry', zh: '產品諮詢' },
    { value: 'partnership', en: 'Partnership', zh: '合作洽談' },
    { value: 'other', en: 'Other', zh: '其他' },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Replace with actual form submission to Formspree or your backend
    // Example:
    // const formData = new FormData(e.currentTarget)
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   body: formData,
    //   headers: { 'Accept': 'application/json' }
    // })
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-lg border border-primary/30 bg-primary/5 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-semibold text-foreground">{t('Thank You!', '謝謝您！')}</h3>
        <p className="mt-4 text-muted-foreground">
          {t(
            "We've received your message and will get back to you within 24 hours.",
            '我們已收到您的消息，將在24小時內回復您。'
          )}
        </p>
        <Button 
          className="mt-6"
          variant="outline"
          onClick={() => setIsSubmitted(false)}
        >
          {t('Send Another Message', '發送另一條消息')}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          {t('Your Name', '姓名')}
          <span className="text-destructive ml-1">*</span>
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          placeholder={t('John Smith', '張三')}
          className="mt-2"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground">
          {t('Company', '公司名稱')}
        </label>
        <Input
          type="text"
          id="company"
          name="company"
          placeholder={t('Your Company Ltd.', '您的公司')}
          className="mt-2"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          {t('Email', '電子郵件')}
          <span className="text-destructive ml-1">*</span>
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@company.com"
          className="mt-2"
        />
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiry_type" className="block text-sm font-medium text-foreground">
          {t('Inquiry Type', '諮詢類型')}
          <span className="text-destructive ml-1">*</span>
        </label>
        <select
          id="inquiry_type"
          name="inquiry_type"
          required
          className="mt-2 w-full rounded-md border border-input bg-input px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">{t('Select inquiry type', '選擇諮詢類型')}</option>
          {inquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {t(type.en, type.zh)}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          {t('Message', '留言內容')}
          <span className="text-destructive ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t(
            'Tell us about your project requirements, quantities, materials needed, etc.',
            '請告訴我們您的項目需求、數量、所需材料等。'
          )}
          className="mt-2 w-full rounded-md border border-input bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            {t('Sending...', '發送中...')}
          </>
        ) : (
          t('Send Message', '發送消息')
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        {t(
          'By submitting this form, you agree to be contacted regarding your inquiry.',
          '提交此表格即表示您同意就您的諮詢事宜與您聯繫。'
        )}
      </p>
    </form>
  )
}
