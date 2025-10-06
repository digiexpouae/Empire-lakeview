'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const EmailPop = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess('Thank you! We have received your message.');
        setFormData({ name: '', phone: '', email: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[25vh] w-[90vw] md:w-[60vw] lg:w-[40vw] bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-4">
        Get In Touch Now
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-start space-y-3">
        {/* Name */}
        <div className="w-full">
          <label htmlFor="name" className="block text-[10px] md:text-[12px] text-black font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-[95%] p-1 md:p-2 rounded-full text-[10px] md:text-[12px] bg-[#00000033] text-black outline-none border border-gray-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="w-full">
          <label htmlFor="phone" className="block text-[10px] md:text-[12px] text-black font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="w-[95%] p-1 md:p-2 rounded-full text-[10px] md:text-[12px] bg-[#00000033] text-black outline-none border border-gray-300"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className="block text-[10px] md:text-[12px] text-black font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-[95%] p-1 md:p-2 rounded-full text-[10px] md:text-[12px] bg-[#00000033] text-black outline-none border border-gray-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <div className="w-full flex justify-center mt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-[100px] bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 px-4 md:px-6 py-2 rounded-full transition duration-300 text-xs md:text-sm disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>

        {/* Success/Error */}
        {(success || error) && (
          <div className={`text-xs md:text-sm mt-1 w-full ${success ? 'text-green-600' : 'text-red-600'}`}>
            {success || error}
          </div>
        )}
      </form>

      {/* Decorative Image */}
      <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[60px] md:w-[80px] lg:w-[100px] h-auto pointer-events-none">
        <Image
          src="/assets/Frame 255.png"
          alt="Decorative icon"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default EmailPop;
