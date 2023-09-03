// home page


import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";


// not cached
export const revalidate = 0;


const HomePage = async () => {

  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('3a15b999-cf88-4a5a-9068-461433e93e5b');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard billboard={billboard} />
        
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='featured items' products={products} />
        </div>
        
      </div>
    </Container>
  )
}


export default HomePage