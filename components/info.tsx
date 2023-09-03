// displays product info


'use client'

import { Product } from "@/types"
import Currency from "@/components/ui/currency"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"


interface InfoProps {
  product: Product
}

const Info: React.FC<InfoProps> = ({
  product
}) => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{product.name}</h1>
      <div className='mt-3 items-end justify-between'>
        <p className='text-2xl text-gray-900'>
          <Currency price={product.price}/>
        </p>
      </div>

      <Separator className='my-4' />

      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size: </h3>
          <div>{product.size.name}</div>
        </div>

        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color: </h3>
          <div
            className='h-6 w-6 rounded-full border border-gray-600'
            style={{ backgroundColor: product?.color?.value}}
          >
          </div>
        </div>
      </div>

      <div className='mt-10 flex items-center gap-x-3'>
        <Button>
          <div className='pr-2 text-xl'>
            Add to cart
          </div>
          <ShoppingCart className='h-6 w-6' />
        </Button>
      </div>

    </div>
  )
}


export default Info