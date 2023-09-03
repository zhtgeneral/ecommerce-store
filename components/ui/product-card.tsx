// singular product card


'use client'

import { Product } from "@/types"
import Image from 'next/image'
import IconButton from "@/components/ui/icon-button"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "@/components/ui/currency"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"


interface ProductCardProps {
  product: Product
}


const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {


  const previewModal = usePreviewModal();
  const router = useRouter();
  const cart = useCart();


  const redirectToProductPage = () => [
    router.push(`/product/${product?.id}`)
  ]


  const previewProduct: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product)
  }


  const addProductToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(product)
  }


  return (
    <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4' onClick={redirectToProductPage}>
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image 
          src={product.images?.[0]?.imageUrl}
          fill
          alt="Image"
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton 
              onClick={previewProduct}
              icon={<Expand size={40} className='text-gray-600' />}  
            />

            <IconButton 
              onClick={addProductToCart}
              icon={<ShoppingCart size={40} className='text-gray-600' />}  
            />
          </div>
        </div>
      </div>
      {/* product description */}
      <div>
        <p className='font-semibold text-lg'>{product.name}</p>
        <p className='text-sm text-gray-500'>{product.category.name}</p>
        <div>
          <Currency price={product.price}/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard