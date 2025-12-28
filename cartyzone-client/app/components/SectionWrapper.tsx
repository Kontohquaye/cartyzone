import { MoreButton } from "./AdminOptions";

export function SectionWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-20">
      <div className="header flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-10">{title}</h2>
        <MoreButton />
      </div>
      {children}
    </div>
  );
}
