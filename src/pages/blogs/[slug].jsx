'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../layout/header';
import Footer from '../../layout/footer';

const blogs = [
  {
    slug: 'first-blog-post',
    title: "UAE's Trusted Android Mobile App Development Company",
    content: "This is the full content of the first blog post. Built for minimalism and clarity, this post demonstrates the strength of content-first design.",
    date: '2024-06-01',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'second-blog-post',
    title: "The Role of High-Quality Content in Boosting Website Traffic",
    content: "Quality content is more than just keywords. Learn how compelling writing boosts rankings and engages users organically.",
    date: '2024-06-02',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'third-blog-post',
    title: "Web Development Trends Dubai Startups Should Know in 2025",
    content: "2025 will shape the way startups design and deploy. Explore the emerging frameworks and UI patterns defining the next generation.",
    date: '2024-06-03',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl font-semibold mb-2">404 — Blog Not Found</h1>
          <p className="text-sm text-gray-400 mb-4">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blogs" className="text-blue-400 text-sm underline underline-offset-4 hover:text-blue-300">
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-black md:pt-20 pt-12 text-white min-h-screen">
        {/* Hero Section */}
        <div
          className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('${blog.image}')`,
          }}
        >
        <div className="bg-black/60 w-full h-full flex items-center justify-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center max-w-4xl">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs md:text-sm text-gray-500 font-mono mb-6">{blog.date}</p>
        <div className="text-gray-300 text-base md:text-lg leading-relaxed">
          {blog.content}
        </div>
        <Link
          href="/blogs"
          className="inline-block mt-10 text-sm text-blue-400 underline underline-offset-4 hover:text-blue-300"
        >
          ← Back to all posts
        </Link>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
