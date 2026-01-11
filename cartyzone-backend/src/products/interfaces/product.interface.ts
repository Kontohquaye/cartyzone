export interface Product {
  name: string;
  product: string;
  price: number;
  rating: number;
  instock: number;
  category: string;
  description: string;
}

export interface CreateProduct extends Omit<Product, 'rating'> {
  rating?: number;
}

export interface ProductResponse {
  data?: CreateProduct[] | CreateProduct;
  message: string;
  error?: string | boolean;
  statusCode?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}
