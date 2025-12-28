import { SiFacebook, SiX } from "@icons-pack/react-simple-icons";

import { Link as LinkIcon } from "lucide-react";
import { ShareButton } from "./ShareButton";

export function SharePost() {
  return (
    <div className="w-full py-12 flex flex-col items-center">
      {/* <h4 className="text-lg font-semibold mb-6">Share Post</h4> */}

      <div className="flex gap-5">
        <ShareButton bg="bg-[#1877F2]" label="Facebook">
          <SiFacebook size={18} />
        </ShareButton>

        <ShareButton bg="bg-[#1DA1F2]" label="X">
          <SiX size={18} />
        </ShareButton>

        <ShareButton bg="bg-[#2f2f2f]" label="Copy link">
          <LinkIcon size={18} />
        </ShareButton>
      </div>
    </div>
  );
}
