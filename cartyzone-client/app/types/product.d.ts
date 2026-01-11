export interface Product {
  name: string;
  product: string;
  price: number;
  rating: number;
  instock: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
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

export type AddProductState = {
  success: boolean;
  errors?: Record<string, string[]>;
  data?: unknown;
};
