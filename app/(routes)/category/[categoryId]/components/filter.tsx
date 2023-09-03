// filter for a category


'use client'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types"
import { useRouter, useSearchParams } from "next/navigation"
import qs from 'query-string';


interface FilterProps {
  searchBy: string
  filterName: string
  data: (Size | Color)[]
}

const Filter: React.FC<FilterProps> = ({
  searchBy,
  filterName,
  data
}) => {


  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(searchBy);

  const filterCategory = (selectedId: string) => {
    const currentFilters = qs.parse(searchParams.toString());

    const combinedFilters = {
      ...currentFilters,
      [searchBy]: selectedId
    }

    if (currentFilters[searchBy] === selectedId) {
      combinedFilters[searchBy] = null;
    }


    const queriedUrl = qs.stringifyUrl({
      url: window.location.href,
      query : combinedFilters
    }, {skipNull: true})

    router.push(queriedUrl)
  }


  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{filterName}</h3>

      <Separator className='my-4'/>

      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div key={filter.id} className='flex items-center'>
            <Button 
              variant='outline' 
              className={cn(
                'rounded-md',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => filterCategory(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter