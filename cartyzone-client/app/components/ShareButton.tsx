import { IconType } from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";

export function ShareButton({
  children,
  bg,
  label,
}: {
  children: ReactNode;
  bg: string;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      className={`${bg} w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-105`}
    >
      {children}
    </button>
  );
}
