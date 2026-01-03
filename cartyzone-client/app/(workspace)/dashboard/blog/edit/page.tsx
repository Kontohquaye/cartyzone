"use client";

import { Button } from "@/components/ui/button";

export default function ManageBlogPage() {
  const posts = [
    { id: "1", title: "essential anti-aging practices" },
    { id: "2", title: "simple steps to glowing skin" },
    { id: "3", title: "top moisturizers for all skin types" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Blog Posts</h1>
        <Button className="bg-lime-600 text-white">Add New Post</Button>
      </div>

      <div className="border rounded-md divide-y">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex justify-between items-center px-4 py-3"
          >
            <span className="text-sm">{post.title}</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
