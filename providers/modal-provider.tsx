// shows preview modal with logic to prevent hydration


'use client'

import PreviewModal from "@/components/preview-modal"
import { useEffect, useState } from "react";


const ModalProvider = () => {

  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true)
  }, [])
  
  if (!isMounted) {
    return null
  }

  return (
    <>
      <PreviewModal />
    </>
  )
}

export default ModalProvider