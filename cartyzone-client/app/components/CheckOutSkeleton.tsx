const CheckoutSkeleton = () => {
  return (
    <div className="container">
      <div className="border rounded-md p-6 h-fit animate-pulse">
        {/* Title */}
        <div className="h-6 w-32 bg-gray-200 rounded mb-6" />

        <div className="space-y-4 text-sm">
          {/* Subtotal row */}
          <div className="flex justify-between">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-20 bg-gray-200 rounded" />
          </div>

          {/* Divider */}
          <div className="border-t pt-4 flex justify-between">
            <div className="h-4 w-12 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Checkout button */}
        <div className="mt-6 h-12 w-full bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};

export default CheckoutSkeleton;
