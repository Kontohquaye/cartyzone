import BlogCard from "@/app/components/BlogCard";
import { posts } from "@/app/data/data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard {...post} key={post._id} />
        ))}
      </div>
    </section>
  );
}
