import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EmptyUI() {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-lime-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-2l4 4"
            />
          </svg>
        </div>

        <h1 className="text-xl font-semibold text-gray-900">
          No products found
        </h1>

        <p className="max-w-md text-sm text-gray-500">
          We couldn’t find any products that match your filters. Try adjusting
          the price range or selecting a different category.
        </p>
        <Link href="/products">
          <Button
            variant="default"
            className="mt-2 bg-lime-600 hover:bg-lime-700 text-white"
          >
            Clear filters
          </Button>
        </Link>
      </div>
    </div>
  );
}
