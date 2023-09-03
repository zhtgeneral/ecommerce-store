// types

export interface Billboard {
  id: string
  label: string
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  billboard: Billboard
}

export interface Product {
  id: string
  name: string
  category: Category
  color: Color
  size: Size
  price: string
  isFeatured: boolean
  images: Image[]
}

export interface Image {
  id: string
  imageUrl: string
}

export interface Size {
  id: string
  name: string
  value: string
}

export interface Color {
  id: string
  name: string
  value: string
}