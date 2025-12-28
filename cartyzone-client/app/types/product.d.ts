export interface Product {
  name: string;
  product: string;
  price: number;
  rating: number;
  instock: number;
  category: string;
  created_At: Date;
  edited_At: Date;
  _id: string;
  description: string;
}

export interface ProductDetails {
  productId: string;
  name: string;
}

export interface PriceRangeSliderProps {
  min?: number;
  max?: number;
  gap?: number;
  initialMin?: number;
  initialMax?: number;
  onChange?: (min: number, max: number) => void;
}
