// cart view summary


'use client'

import { Button } from "@/components/ui/button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import axios from 'axios'
import toast from "react-hot-toast";
import { useEffect } from "react";


const Summary = () => {

  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);


  // starts when searchParams changes (after checkout to backend completes)
  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('payment completed')
    }

    if (searchParams.get('cancelled')) {
      toast.error('something went wrong')
    }
  }, [searchParams])


  const totalPrice = items.reduce((rsf, item) => {
    return rsf + Number(item.price)
  }, 0)


  // visit api link and send in product ids as array

  const checkoutCart = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    });

    window.location = response.data.url
  }


  return (
    <div 
      className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
    >
      <h2  className='text-lg font-medium text-gray-900'>
        Order summary
      </h2>

      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>
            Order total
          </div>
          <Currency price={totalPrice}/>
        </div>
      </div>

      <Button className='w-full mt-6' onClick={checkoutCart} disabled={items.length === 0}>
        Checkout
      </Button>
    </div>
  )
}


export default Summary