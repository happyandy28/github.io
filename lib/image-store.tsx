'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

/**
 * Simple image storage using localStorage
 * Images are stored as base64 data URLs
 */

interface ImageStoreContextType {
  getImage: (id: string) => string | null
  setImage: (id: string, dataUrl: string) => void
  removeImage: (id: string) => void
  getAllImageIds: () => string[]
}

const ImageStoreContext = createContext<ImageStoreContextType | undefined>(undefined)

const IMAGE_STORAGE_KEY = 'gp_metalware_images'

export function ImageStoreProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<Record<string, string>>({})

  // Load images from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(IMAGE_STORAGE_KEY)
      if (stored) {
        setImages(JSON.parse(stored))
      }
    } catch (e) {
      console.error('Failed to load images from storage:', e)
    }
  }, [])

  // Save to localStorage whenever images change
  useEffect(() => {
    if (Object.keys(images).length > 0) {
      try {
        localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images))
      } catch (e) {
        console.error('Failed to save images to storage:', e)
      }
    }
  }, [images])

  const getImage = (id: string): string | null => {
    return images[id] || null
  }

  const setImage = (id: string, dataUrl: string) => {
    setImages((prev) => ({ ...prev, [id]: dataUrl }))
  }

  const removeImage = (id: string) => {
    setImages((prev) => {
      const newImages = { ...prev }
      delete newImages[id]
      return newImages
    })
  }

  const getAllImageIds = (): string[] => {
    return Object.keys(images)
  }

  return (
    <ImageStoreContext.Provider value={{ getImage, setImage, removeImage, getAllImageIds }}>
      {children}
    </ImageStoreContext.Provider>
  )
}

export function useImageStore() {
  const context = useContext(ImageStoreContext)
  if (context === undefined) {
    throw new Error('useImageStore must be used within an ImageStoreProvider')
  }
  return context
}
