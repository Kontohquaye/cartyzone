import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { SharePost } from "./SharePost";

const OpenDialogButton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dialog-btn">
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="self-center">Share post</DialogTitle>
            {/* <DialogDescription></DialogDescription> */}
            <SharePost />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OpenDialogButton;
