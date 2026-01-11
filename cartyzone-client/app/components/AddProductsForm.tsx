"use client";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { addProductAction } from "../actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const initialState = { success: false, errors: {}, data: undefined };

const AddProductsForm = () => {
  const [state, addProduct, pending] = useActionState(
    addProductAction,
    initialState
  );
  const router = useRouter();
  console.log(state.data);

  useEffect(() => {
    if (state.success && !state.data) {
      toast.error("Server error occurred");
    }

    if (state.success && state.data.data) {
      toast.success("Product saved successfully");
      router.push("/products");
    }
  }, [state.success]);
  return (
    <form action={addProduct} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Product Name</label>
        <p aria-label="Error message" className="text-red-500 text-sm">
          {state.errors?.name?.[0]}
        </p>
        <input name="name" className="w-full border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm mb-1">Price (GHS)</label>
        <p aria-label="Error message" className="text-red-500 text-sm">
          {state.errors?.price?.[0]}
        </p>
        <input
          name="price"
          type="number"
          min={1}
          step="0.01"
          className="w-full border px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Product Image</label>
        <p aria-label="Error message" className="text-red-500 text-sm">
          {state.errors?.product?.[0]}
        </p>
        <input name="product" type="text" className="w-full border px-3 py-2" />
      </div>

      {/* <div>
        <label className="block text-sm mb-1">Product Rating</label>
        <p aria-label="Error message" className="text-red-500 text-sm">
          {state.errors?.rating?.[0]}
        </p>
        <input
          name="rating"
          type="number"
          min={0}
          className="w-full border px-3 py-2"
        />
      </div> */}
      <div>
        <label className="block text-sm mb-1">In Stock</label>
        <p aria-label="Error message" className="text-red-500 text-sm">
          {state.errors?.instock?.[0]}
        </p>
        <input
          name="instock"
          min={1}
          type="number"
          className="w-full border px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Category</label>
        <p aria-label="Error message" className="text-red-500 text-sm">
          {state.errors?.category?.[0]}
        </p>
        <select name="category" className="w-full border px-3 py-2">
          <option>Skincare</option>
          <option>Haircare</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-1">Description</label>
        <p aria-label="Error message" className="text-red-500 text-sm">
          {state.errors?.description?.[0]}
        </p>
        <textarea
          name="description"
          className="w-full border px-3 py-2 min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        disabled={pending}
        className="mt-4 bg-lime-600 text-white w-full py-6 rounded-full
             flex items-center justify-center gap-2
             disabled:opacity-70"
      >
        {pending ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Saving…
          </>
        ) : (
          "Save Product"
        )}
      </Button>
    </form>
  );
};

export default AddProductsForm;
