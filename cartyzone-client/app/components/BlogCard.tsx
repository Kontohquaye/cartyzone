import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import OpenDialogButton from "./OpenDialogButton";

export default function BlogCard({
  image,
  date,
  readTime,
  title,
  excerpt,
}: BlogCardProps) {
  return (
    <article className="bg-lime-50 flex flex-col">
      <div className="relative w-full h-[300px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>
            {date} · {readTime}
          </span>
          <OpenDialogButton>
            <span className="cursor-pointer">
              <EllipsisVertical />
            </span>
          </OpenDialogButton>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-3 truncate">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-700">{excerpt}</p>
      </div>
    </article>
  );
}
