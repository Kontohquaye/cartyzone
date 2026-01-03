export interface Product {
  name: string;
  product: string;
  price: number;
  rating: number;
  instock: number;
  category: string;

  description: string;
}

export interface ProductResponse {
  data?: Product[];
  message: string;
  error?: string | boolean;
  statusCode?: number;
}
