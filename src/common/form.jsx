'use client'

import { useRouter } from "next/router";
import React from "react"
import { useState } from "react";
const form = ({ className, ref }) => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const router =useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.firstName + " " + fields.lastName,
          email: fields.email,
          phone: fields.phone,
          propertyType: fields.propertyType,
          budget: fields.budget,
          message: fields.message
        })
      });
      const data = await res.json();
    if (res.ok) {
      setSuccess('Form submitted successfully')
       window.location.replace('/thankyou');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          propertyType: "",
          dob: "",
          message: "",
        });
        return;
      } 
      else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-top flex items-center justify-center pt-10 pb-8 md:pt-20 md:pb-20 px-2 sm:px-4"
      style={{ background: "transparent" }}
    >
      <div className="bg-[#0E1527CC]/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 md:p-12 w-full max-w-4xl text-white flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Talk to our Experts</h2>
        <form
          className="grid grid-cols-2 md:grid-cols-1 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            value={fields.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            value={fields.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            value={fields.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            value={fields.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="propertyType"
            placeholder="Property Type"
            className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            value={fields.propertyType}
            onChange={handleChange}
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget"
            className="p-3 rounded-full bg-white/20 text-white placeholder-white outline-none"
            value={fields.budget}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Write your message"
            rows="4"
            className="p-4 rounded-2xl bg-white/20 text-white placeholder-white col-span-2 md:col-span-2 outline-none resize-none"
            value={fields.message}
            onChange={handleChange}
          ></textarea>
          <div className="col-span-2 flex justify-center md:justify-end mt-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] hover:from-[#E5C98C] hover:to-[#FFF3DC] text-gray-800 px-4 lg:px-6 py-2 rounded-full transition-colors duration-300 cursor-pointer transform text-sm lg:text-base whitespace-nowrap disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
          {(success || error) && (
            <div className={`md:col-span-2 mt-2 text-xs md:text-sm w-full ${success ? "text-green-400" : "text-red-400"}`}>
              {success || error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default form;

