import { z } from "zod";
export const addProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  product: z.string().min(1, "Product image URL is required"),
  price: z.coerce.number().min(1, "Price must be at least 1 GHS"),
  //   rating: z.coerce.number().min(0, "Rating is required"),
  instock: z.coerce.number().min(0, "In stock quantity must be at least 0"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
});

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
