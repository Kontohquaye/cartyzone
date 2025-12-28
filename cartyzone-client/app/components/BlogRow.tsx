export function BlogRow({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <span>{title}</span>

      <div className="flex gap-3">
        <button className="text-sm border px-3 py-1 hover:bg-lime-600 hover:text-white transition">
          Edit
        </button>
        <button className="text-sm border px-3 py-1 hover:bg-red-600 hover:text-white transition">
          Delete
        </button>
      </div>
    </div>
  );
}
