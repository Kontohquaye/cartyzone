import {
  ShoppingCart,
  ShieldCheck,
  Sparkles,
  Users,
  Package,
  Zap,
} from "lucide-react";

const values = [
  {
    title: "Quality Products",
    description:
      "We carefully select products to ensure quality, durability, and value in every purchase.",
    icon: Package,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your happiness comes first. We prioritize support, transparency, and smooth experiences.",
    icon: Users,
  },
  {
    title: "Smart Innovation",
    description:
      "We continuously improve how you shop by using smarter tools and modern technology.",
    icon: Sparkles,
  },
  {
    title: "Secure Shopping",
    description:
      "Your data and payments are protected with trusted and secure systems.",
    icon: ShieldCheck,
  },
  {
    title: "Simple Experience",
    description:
      "Our platform is designed to be clean, intuitive, and easy to use for everyone.",
    icon: Zap,
  },
  {
    title: "All-in-One Marketplace",
    description:
      "From fashion to electronics — everything you need, all in one zone.",
    icon: ShoppingCart,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-lime-50 py-20 mt-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Our Core Values That Drive <br className="hidden sm:block" />
          Everything We Do
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shrink-0">
                <item.icon size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
