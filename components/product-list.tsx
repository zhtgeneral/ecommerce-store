// product list


import { Product } from "@/types"
import NoResults from "@/components/ui/no-results"
import ProductCard from "@/components/ui/product-card"


interface ProductListProps {
  title: string
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  products
}) => {

  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-2xl'>{title}</h3>

      {/* shows no products found */}
      {products.length === 0 && <NoResults />}
      
      {/* shows products */}
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((p) => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </div>
    </div>
  )
}


export default ProductList