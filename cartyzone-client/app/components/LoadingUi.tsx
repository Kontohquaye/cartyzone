// Borrowed ui loading skeleton component
export const LoadingUI = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-6 items-center px-4 py-4 border-b animate-pulse"
        >
          {/* Remove icon placeholder */}
          <div className="w-5 h-5 bg-gray-200 rounded" />

          {/* Product */}
          <div className="col-span-2 flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-gray-200 rounded border" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>

          {/* Price */}
          <div className="h-4 w-12 bg-gray-200 rounded" />

          {/* Quantity */}
          <div className="h-8 w-16 bg-gray-200 rounded" />

          {/* Subtotal */}
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
};

export default LoadingUI;
