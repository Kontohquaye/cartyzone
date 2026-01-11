import AddProductsForm from "@/app/components/AddProductsForm";

export default function AddProductPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

      <AddProductsForm />
    </div>
  );
}
