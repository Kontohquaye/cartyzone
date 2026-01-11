"use server";

import { LogInUser, PostData } from "@/lib/utils";
import { z } from "zod";
import { AddProductState } from "./types/product";
import { addProductSchema, loginSchema } from "./schema";
import { UserLoginResponse } from "./types/user";

// schemas
// product addition schema

export const addProductAction = async (
  state: AddProductState,
  formData: FormData
) => {
  const rawData = Object.fromEntries(formData.entries());

  const result = addProductSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten((issue: z.core.$ZodIssue) => issue.message)
        .fieldErrors,
    };
  }

  const response = await PostData("products/create", {
    ...result.data,
    rating: 0,
  });
  console.log(response);
  return {
    success: true,
    data: response,
  };
};

// export const loginAction = async (
//   state: UserLoginResponse,
//   formData: FormData
// ) => {
//   // console.log(formData);
//   const rawInput = Object.fromEntries(formData.entries());
//   const result = loginSchema.safeParse(rawInput);
//   if (!result.success) {
//     return {
//       success: false,
//       errors: result.error.flatten((issue: z.core.$ZodIssue) => issue.message)
//         .fieldErrors,
//     };
//   }
//   const response = await LogInUser("http://localhost:3000/api/auth/login", {
//     ...result.data,
//   });
//   // console.log(response);
//   return {
//     success: true,
//     ...response,
//   };
// };
