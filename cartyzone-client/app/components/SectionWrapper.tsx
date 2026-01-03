import Link from "next/link";
import { MoreButton } from "./AdminOptions";

export function SectionWrapper({
  title,
  link,
  children,
}: {
  title: string;
  link: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-20">
      <div className="header flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-10">{title}</h2>
        <Link href={link}>
          <MoreButton />
        </Link>
      </div>
      {children}
    </div>
  );
}
