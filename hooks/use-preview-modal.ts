// the logic for when a product is previewed

import { create } from 'zustand'


import { Product } from '@/types'

interface PreviewModalProps {
  isOpen: boolean,
  product?: Product,
  onOpen: (product: Product) => void;
  onClose: () => void
}


const usePreviewModal = create<PreviewModalProps>((set) => ({
  isOpen: false,
  product: undefined,
  onOpen: (product: Product) => set({ product: product, isOpen: true }),
  onClose: () => set({ isOpen: false })
}))


export default usePreviewModal