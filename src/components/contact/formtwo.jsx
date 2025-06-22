import React, { useState } from "react";

const FormTwo = ({ className, ref }) => {
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
        setSuccess("Your message has been sent successfully!");
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
    <form id="webcrumbs" className={className} ref={ref} onSubmit={handleSubmit}>
      <div className="relative h-[100%] w-full xl:min-w-[50vw] overflow-hidden rounded-lg">
        <div className="absolute inset-0 w-full h-[100%] md:z-10 backdrop-blur-xs"></div>
        <div className="absolute inset-0 md:z-20 flex flex-col h-[100%] items-center justify-center ">
          <div className="lg:grid flex flex-col lg:h-[70%] xl:h-auto xl:grid-cols-2 gap-2 md:gap-3 relative">
            <div className="relative w-[60vw] lg:w-auto ">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full py-1 px-2 lg:py-1 md:py-2 md:px-4 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full md:py-2 lg:py-1 md:px-4 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full md:py-2 md:px-4 lg:py-1 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                required
              />
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full md:py-2 md:px-4 py-1 lg:py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                required
              />
            </div>
            <div className="relative">
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full md:py-2 md:px-4 py-1 lg:py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all appearance-none"
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
            <div className="relative">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full md:py-2 md:px-4 py-1 lg:py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
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
                className="w-full md:py-2 lg:py-1 md:px-1 py-1 px-2 bg-slate-200/20 backdrop-blur-sm text-white placeholder-white/60 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all resize-none"
                required
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-2 ">
              <button
                type="submit"
                className="py-2 px-6 bg-gradient-to-r from-[#CCAB64] to-[#FAECC9] lg:py-1 rounded-4xl disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              {success && <span className="text-green-400 text-sm">{success}</span>}
              {error && <span className="text-red-400 text-sm">{error}</span>}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormTwo;
