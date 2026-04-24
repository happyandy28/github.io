'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'
import { useImageStore } from '@/lib/image-store'

interface DisplayImageProps {
  id: string
  alt: string
  className?: string
  placeholderIcon?: React.ReactNode
  placeholderText?: string
  aspectRatio?: string
}

/**
 * Display-only image component for public site
 * Shows uploaded images from localStorage or placeholder
 * No upload functionality - admin only can change images
 */
export function DisplayImage({
  id,
  alt,
  className = '',
  placeholderIcon,
  placeholderText,
  aspectRatio = 'aspect-square',
}: DisplayImageProps) {
  const { t } = useLanguage()
  const { getImage } = useImageStore()
  
  const imageUrl = getImage(id)

  return (
    <div className={`relative ${aspectRatio} bg-muted overflow-hidden ${className}`}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
          {placeholderIcon}
          {placeholderText && (
            <span className="text-xs mt-2">{t('Product Image', '產品圖片')}</span>
          )}
        </div>
      )}
    </div>
  )
}
