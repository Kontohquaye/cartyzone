import React from "react";
import { SiteFooter } from "@/app/components/Footer";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="store-layout">
      {children}
      <SiteFooter />
      <Toaster />
    </main>
  );
}
