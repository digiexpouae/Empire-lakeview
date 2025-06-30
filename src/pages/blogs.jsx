import React from 'react';
import Link from 'next/link';
import Header from '../layout/header';
import Footer from '../layout/footer';

// Placeholder blog data (replace with Sanity fetch later)
const blogs = [
  {
    slug: 'first-blog-post',
    title: "UAE's Trusted Android Mobile App Development Company",
    excerpt: "UAE's Trusted Android Mobile App Development Company",
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'second-blog-post',
    title: "The Role of High-Quality Content in Boosting Website Traffic",
    excerpt: "The Role of High-Quality Content in Boosting Website Traffic",
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'third-blog-post',
    title: "Web Development Trends Dubai Startups Should Know in 2025",
    excerpt: "Web Development Trends Dubai Startups Should Know in 2025",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
];

const Blogs = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-40 mx-auto py-16 px-7 bg-black min-h-screen">
        <h1 className="text-5xl font-extrabold text-center text-white mb-4">Accomplish more, Together</h1>
        <p className="text-center text-gray-300 text-lg mb-12">Softuch blog is your knowledge center for everything remote.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
              <div className="bg-[#23262F] rounded-3xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl border border-[#23262F] hover:border-[#CCAB64]">
                <div className="h-56 w-full overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#CCAB64] transition-colors duration-200">{blog.title}</h2>
                  <p className="text-gray-300 text-base mb-4 flex-1">{blog.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs; 