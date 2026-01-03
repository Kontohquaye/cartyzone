"use client";

import { Button } from "@/components/ui/button";

export default function AddProductPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Product Name</label>
          <input className="w-full border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Price (GHS)</label>
          <input type="number" className="w-full border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Category</label>
          <select className="w-full border px-3 py-2">
            <option>Skincare</option>
            <option>Haircare</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea className="w-full border px-3 py-2 min-h-[120px]" />
        </div>

        <div>
          <label className="block text-sm mb-1">Product Image</label>
          <input type="file" className="w-full" />
        </div>

        <Button className="mt-4 bg-lime-600 text-white w-full py-6 rounded-full">
          Save Product
        </Button>
      </form>
    </div>
  );
}
