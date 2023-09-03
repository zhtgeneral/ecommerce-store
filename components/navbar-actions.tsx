// nav bar actions


'use client'

import { Button } from "@/components/ui/button"
import useCart from "@/hooks/use-cart"
import { ShoppingBag } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const NavbarActions = () => {


  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter();
  const cart = useCart();


  if (!isMounted) {
    return null
  }


  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button onClick={() => router.push('/cart')}>
        <ShoppingBag className='w-5 h-5'/>
        <span className='ml-2 font-semibold'>{cart.items.length}</span>
      </Button>
    </div>
  )
}


export default NavbarActions