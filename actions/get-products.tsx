// gets products from api link

import { Product } from "@/types";
import qs from 'query-string'


const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;


interface Query {
  categoryId?: string
  sizeId?: string
  colorId?: string
  isFeatured?: boolean
}


const getProducts = async (query: Query): Promise<Product[]> => {

  const url = qs.stringifyUrl({
    url: API_URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured
    }
  })

  const res = await fetch(url, { method: 'GET'} );

  return res.json();
}


export default getProducts