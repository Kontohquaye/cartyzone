import React from "react";
import { SiteFooter } from "@/app/components/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="store-layout">
      {children}
      <SiteFooter />
    </main>
  );
}
