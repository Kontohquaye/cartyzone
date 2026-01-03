"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";

export default function CreateBlogPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-12 text-center">
        Create Blog Post
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* EDITOR */}
        <div>
          <h2 className="text-xl font-medium mb-4">Editor</h2>

          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-4 py-3 mb-6 focus:outline-none focus:border-black"
          />

          <textarea
            placeholder="Write your post in Markdown..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[400px] border px-4 py-3 resize-none focus:outline-none focus:border-black"
          />

          <button className="mt-6 border px-6 py-2 hover:bg-lime-600 hover:text-white transition">
            Publish Post
          </button>
        </div>

        {/* LIVE PREVIEW */}
        <div>
          <h2 className="text-xl font-medium mb-4">Live Preview</h2>

          <div className="border p-6 min-h-[480px] bg-white">
            {title && <h1 className="text-3xl font-semibold mb-6">{title}</h1>}

            {content ? (
              <article className="markdown-output max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    code({ className, children }) {
                      const match = /language-(\w+)/.exec(className || "");

                      // Code block with language → syntax highlight
                      if (match) {
                        return (
                          <SyntaxHighlighter
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        );
                      }

                      // Inline code
                      return (
                        <code className="bg-gray-100 px-1 rounded text-sm">
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {content}
                </ReactMarkdown>
              </article>
            ) : (
              <p className="text-gray-400">Start typing to see a preview...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
