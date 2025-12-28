import { ActionCard } from "@/app/components/ActionCard";
import { BlogRow } from "@/app/components/BlogRow";
import { ProductCard } from "@/app/components/ProductCard";
import { SectionWrapper as Section } from "@/app/components/SectionWrapper";
import { posts, products } from "@/app/data/data";

export default function AdminDashboard() {
  const items = products.slice(0, 3);
  const blogs = posts;
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-center mb-14">
        Admin Dashboard
      </h1>

      {/* ACTION CARDS */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <ActionCard title="Create Blog Post" link="/blog/create" />

        <ActionCard title="Manage Blog Posts" link="#" />

        <ActionCard title="Add Product" link="#" />

        <ActionCard title="Manage Products" link="#" />
      </div>

      {/* PRODUCTS */}
      <Section title="Products">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.product}
            />
          ))}
        </div>
      </Section>

      {/* BLOG POSTS */}
      <Section title="Blog Posts">
        <div className="space-y-4 max-w-3xl">
          {blogs.map((blog) => (
            <BlogRow key={blog._id} title={blog.title} />
          ))}
        </div>
      </Section>
    </section>
  );
}
