import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import CartDetails from "./CartDetailsPage";

export const CartButton = ({ children }: { children: ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger className="relative">{children}</SheetTrigger>

      <SheetContent side="right" className=" p-0 flex flex-col">
        {/* Header */}
        <SheetHeader className="px-5 py-4 border-b">
          <SheetTitle className="text-lg font-semibold">
            Shopping Cart
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        {/* Cart body  */}
        <div className="flex-1 overflow-y-auto">
          <CartDetails />
        </div>
      </SheetContent>
    </Sheet>
  );
};
