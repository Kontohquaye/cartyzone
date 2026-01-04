import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
// Borrowed Ui
export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <ShoppingCart className="h-10 w-10 text-gray-400" />
      </div>

      {/* Text */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-500 max-w-sm mb-6">
        Looks like you haven’t added anything to your cart yet. Start shopping
        to fill it up.
      </p>

      {/* Action */}
      <Link href="/products">
        <Button className="rounded-full bg-lime-600 hover:bg-lime-700 px-8 py-6 text-white">
          Continue shopping
        </Button>
      </Link>
    </div>
  );
}
