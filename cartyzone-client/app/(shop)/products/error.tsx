"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Something went wrong!
      </h2>

      <button
        onClick={() => reset()}
        className="px-4 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-green-700 transition"
      >
        Try again
      </button>
    </div>
  );
}
