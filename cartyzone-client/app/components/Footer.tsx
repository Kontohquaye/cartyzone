import { Hexagon, Twitter } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { SiX } from "@icons-pack/react-simple-icons";

const year = new Date(Date.now()).getFullYear();
function SiteFooter() {
  return (
    <div className="w-full">
      <Footer
        logo={<Image src="/Logo.png" alt="site logo" width={30} height={30} />}
        brandName="Cartyzone"
        socialLinks={[
          {
            icon: <SiX size={20} />,
            href: "https://twitter.com",
            label: "Twitter",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: `© ${year} Cartyzone`,
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

export { SiteFooter };
