import Link from "next/link";

export function ActionCard({ title, link }: { title: string; link: string }) {
  return (
    // <button>
    /* </button> */
    <Link
      href={link}
      className="border border-gray-200 p-8 text-center hover:border-black transition"
    >
      <h3 className="text-lg font-medium">{title}</h3>
    </Link>
  );
}
