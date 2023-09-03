// mobile filters

'use client'

import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types"
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";


interface MobileFilterProps {
  colors: Color[],
  sizes: Size[]
}

const MobileFilters: React.FC<MobileFilterProps> = ({
  colors,
  sizes
}) => {

  const [open, setOpen] = useState(false);
  const openFilter = () => setOpen(true);
  const closeFilter = () => setOpen(false);

  return (
    <>
      <Button onClick={openFilter} className='flex items-center gap-x-2 lg:hidden'>
        Filters
        <Plus size={12}/>
      </Button>    

      <Dialog open={open} as='div' className='relative z-40 lg:hidden' onClose={closeFilter}>
        <div className='fixed inset-0 bg-black bg-opacity-25' />

        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>

            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={closeFilter} className='text-gray-900'/>} />
            </div>

            <div className='p-4'>
              <Filter 
                searchBy='sizeId'
                filterName='sizes'
                data={sizes}
              />
              <Filter 
                searchBy='colorId'
                filterName='colors'
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters