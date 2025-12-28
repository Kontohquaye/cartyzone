import { MoreHorizontal } from "lucide-react";

export function MoreButton() {
  return (
    <button
      aria-label="More actions"
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <MoreHorizontal size={18} />
    </button>
  );
}
