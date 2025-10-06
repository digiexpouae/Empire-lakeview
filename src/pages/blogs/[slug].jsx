'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../layout/header';
import Footer from '../../layout/footer';


import { client } from "../../../sanity/lib/client"
import { urlFor } from "../../../sanity/lib/image"
import { PortableText } from '@portabletext/react';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  
  try {
    // Define the query to fetch a single blog post by slug
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      Image,
      publishedAt,
      content,
      excerpt,
      "slug": slug.current
    }`;
    
    const blog = await client.fetch(query, { slug });
    
    if (!blog) {
      return { 
        notFound: true 
      };
    }

    // Return the blog post as props
    return {
      props: {
        blog
      }
    };
  } catch (error) {
    console.error("Error fetching blog post from Sanity:", error);
    
    // Return an empty props object with a 500 status
    return {
      props: {
        error: 'Failed to load blog post',
        blog: null
      }
    };
  }
  }
  
  
// Blog Post Component
// Blog Post Component
const BlogPost = ({ blog, error }) => {
  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl font-semibold mb-2">Error Loading Post</h1>
          <p className="text-sm text-gray-400 mb-4">
            {error}
          </p>
          <Link href="/blogs" className="text-blue-400 text-sm underline underline-offset-4 hover:text-blue-300">
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl font-semibold mb-2">Blog Post Not Found</h1>
          <p className="text-sm text-gray-400 mb-4">
            The post you're looking for doesn't exist or may have been removed.
          </p>
          <Link href="/blogs" className="text-blue-400 text-sm underline underline-offset-4 hover:text-blue-300">
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  const { title, content, publishedAt, Image } = blog;

  return (
    <>
      <Header />
      <div className="bg-black md:pt-20 pt-12 text-white min-h-screen">
        {/* Hero Section */}
        <div
          className="w-full h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center relative "
          style={{
            backgroundImage: Image
              ? `url('${urlFor(Image).width(1920).height(1080).fit('max').auto('format').url()}')` 
              : 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6">
          
          </div>
        </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="max-w-6xl text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
            </div>
        {publishedAt && (
          <p className="text-xs md:text-sm text-gray-500 font-mono mb-6">
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
        <div className="prose prose-invert max-w-none">
          {content && <PortableText value={content} />}
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
