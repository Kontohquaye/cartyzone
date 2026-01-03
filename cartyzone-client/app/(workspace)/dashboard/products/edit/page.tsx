"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ManageProductsPage() {
  const products = [
    { id: "p1", name: "Glow Serum", price: 120 },
    { id: "p2", name: "Hydrating Cream", price: 95 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link href="/admin/products/add">
          <Button className="bg-lime-600 text-white">Add Product</Button>
        </Link>
      </div>

      <table className="w-full border rounded-md overflow-hidden">
        <thead className="bg-gray-100 text-sm">
          <tr>
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Price</th>
            <th className="text-right px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {products.map((product) => (
            <tr key={product.id} className="text-sm">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">GHS {product.price}</td>
              <td className="px-4 py-2 text-right space-x-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
