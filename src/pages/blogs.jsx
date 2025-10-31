import React from 'react';
import Link from 'next/link';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { client } from '../../sanity/lib/client'
import { urlFor } from "../../sanity/lib/image";
import { useEffect, useState } from 'react';
import Navigationslider from '../components/navigationslider'
import Mobileslider from '../components/mobileslider'
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "post"] | order(_createdAt desc) {
            title,
            "slug": slug.current,
              Image,
            publishedAt,
            excerpt
          }`
        );
        setBlogs(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Header />
      <div className="w-full md:pt-40 pt-24 mx-auto py-16 md:py-16 px-7 bg-[#0E1527] min-h-screen">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-white md:mb-10 mb-5">BLOGS/NEWS ARTICLES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-3 text-center text-white">Loading blogs...</div>
          ) : error ? (
            <div className="col-span-3 text-center text-red-500">{error}</div>
          ) : (
            blogs.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
                <div className="bg-[#23262F] rounded-3xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl border border-[#23262F] hover:border-[#CCAB64]">
                  <div className="md:h-64 h-full w-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    {blog.Image ? (
                      <img 
                        src={urlFor(blog.Image).url()} 
                        alt={blog.title || 'Blog post image'}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                      />
                    ) : (
                      <div className="text-gray-400 text-center p-4">
                        <svg 
                          className="w-16 h-16 mx-auto mb-2 text-gray-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                          />
                        </svg>
                        <span className="text-sm">No image available</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#CCAB64] transition-colors duration-200">{blog.title}</h2>
                    <p className="text-gray-300 text-base mb-4 flex-1">{blog.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <Navigationslider heading={'Articles'} buttonheading={'View All'} href={'/blogs'} />
      <Mobileslider />
      <Footer />
    </>
  );
};

export default Blogs; 