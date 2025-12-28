import Image from "next/image";

export function ProductCard({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string;
}) {
  return (
    <div>
      <div className="relative w-full h-[300px] bg-gray-100 mb-4">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <h3 className="font-medium">{name}</h3>
      <p className="text-gray-500 text-sm mb-3">{price}</p>

      <div className="flex gap-3">
        <button className="text-sm border px-4 py-1 hover:bg-lime-600 hover:text-white transition">
          Edit
        </button>
        <button className="text-sm border px-4 py-1 hover:bg-red-600 hover:text-white transition">
          Delete
        </button>
      </div>
    </div>
  );
}
