import Link from "next/link";
import {
  SiFacebook,
  SiYoutube,
  SiPinterest,
  SiX,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

const FollowUs = () => {
  return (
    <section className="bg-lime-50 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg font-medium text-gray-900">
          Follow us @Cartzone_Co.
        </p>

        <div className="flex items-center justify-center gap-6">
          <Link
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:scale-110 transition"
          >
            <SiFacebook size={18} />
          </Link>

          <Link
            href="#"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:scale-110 transition"
          >
            <SiYoutube size={18} />
          </Link>

          <Link
            href="#"
            aria-label="Pinterest"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:scale-110 transition"
          >
            <SiPinterest size={18} />
          </Link>

          <Link
            href="#"
            aria-label="X (Twitter)"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:scale-110 transition"
          >
            <SiX size={18} />
          </Link>

          <Link
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:scale-110 transition"
          >
            <SiInstagram size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
