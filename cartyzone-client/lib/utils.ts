import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// mine

export const convertRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return {
    fullStars,
    hasHalfStar,
  };
};

export const addedFee = {
  delivery: 7,
  service: 1,
  tax: 1,
};

export const baseUrl = "http://localhost:3500/";

export async function fetchData<T>(url: string, cache = false): Promise<T> {
  try {
    await fetch(
      url,
      cache ? { next: { revalidate: 60 } } : { cache: "no-store" }
    );
  } catch (error) {}
  const res = await fetch(
    url,
    cache ? { next: { revalidate: 60 } } : { cache: "no-store" }
  );
  // console.log(res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<T>;
}

export const PostData = async (url: string, data: any) => {
  // console.log(`${baseUrl}${url}`, data);
  const res = await fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
};

export const LogInUser = async (
  url: string,
  data: { email: string; password: string }
) => {
  const res = await fetch(`${url}`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // if (!res.ok) {
  //   throw new Error("Failed to post data");
  // }
  return res.json();
};
// export const fetchData = async (url: string, cache: boolean = false) => {
//   const res = await fetch(
//     url,
//     !cache
//       ? { cache: "no-store" }
//       : {
//           next: {
//             revalidate: 60,
//           },
//         }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   // console.log(res.body);
//   return await res.json();
// };
