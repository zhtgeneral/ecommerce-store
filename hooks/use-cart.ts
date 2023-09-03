// the logic for when a product is added

import { create } from 'zustand'
import { Product } from '@/types'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from 'react-hot-toast'



interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  removeAll: () => void
}


// use zustand for global variables (like singleton pattern)
// use persist for storage
// complete all abstract method stubs of interface and separate with commas
const useCart= create(
  persist<CartStore>((set, get) => ({
    items: [],

    addItem: (product: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return toast('Item already in cart');
      }

      set({ items: [...get().items, product]});
      toast.success("item added to cart");
    },

    removeItem: (productId: string) => {
      set({ items: [...get().items.filter((item) => item.id !== productId)] });
      toast.success('Item removed from cart');
    },
    
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
)


export default useCart