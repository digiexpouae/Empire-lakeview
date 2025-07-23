import React, { useState } from "react";
import { useRouter } from "next/router";
const FormTwo = ({ className, ref }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyType: "",
    dob: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          phone: formData.phone,
          propertyType: formData.propertyType,
          dob: formData.dob,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        window.location.replace('/thankyou');

        // setSuccess("Your message has been sent successfully!");
          setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          propertyType: "",
          dob: "",
          message: "",
        });
     
      
      } else {
        setError(data.message || "Failed to send message.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="webcrumbs"
      className={`w-full max-w-4xl ${className}`}
      ref={ref}
      onSubmit={handleSubmit}
    >
      <div className="w-full p-4 md:p-6 lg:p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
              required
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
              required
            />
          </div>
          <div className="col-span-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
              required
            />
          </div>
          <div className="col-span-1">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
              required
            />
          </div>
          <div className="col-span-1">
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full p-3 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all appearance-none"
              required
            >
              <option value="" disabled className="text-slate-700">
                Property Type
              </option>
              <option value="apartment" className="text-slate-700">
                Apartment
              </option>
              <option value="house" className="text-slate-700">
                House
              </option>
              <option value="condo" className="text-slate-700">
                Condo
              </option>
              <option value="villa" className="text-slate-700">
                Villa
              </option>
            </select>
          </div>
          <div className="col-span-1">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <textarea
              name="message"
              placeholder="Write your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all resize-none"
              required
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-2">
            <button
              type="submit"
              className="w-full md:w-auto py-3 px-8 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] rounded-full disabled:opacity-60 text-gray-900 font-medium hover:opacity-90 transition-opacity"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {success && <span className="text-green-400 text-sm">{success}</span>}
            {error && <span className="text-red-400 text-sm">{error}</span>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormTwo;