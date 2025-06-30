import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Placeholder blog data (replace with Sanity fetch later)
const blogs = [
  {
    slug: 'first-blog-post',
    title: 'First Blog Post',
    content: 'This is the full content of the first blog post.',
    date: '2024-06-01',
  },
  {
    slug: 'second-blog-post',
    title: 'Second Blog Post',
    content: 'This is the full content of the second blog post.',
    date: '2024-06-02',
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Blog Not Found</h1>
        <p className="mb-4">Sorry, the blog post you are looking for does not exist.</p>
        <Link href="/blogs" className="text-blue-700 hover:underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <span className="text-xs text-gray-400">{blog.date}</span>
      <div className="mt-6 text-lg text-gray-800">{blog.content}</div>
      <Link href="/blogs" className="block mt-8 text-blue-700 hover:underline">← Back to Blogs</Link>
    </div>
  );
};

export default BlogPost; 