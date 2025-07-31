'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function ReportForm() {
  const [formData, setFormData] = useState({
    categoryofconcern: '',
    descriptionofincident: '',
    location: '',
    dateofincident: '',
    witnessifany: '',
    fullname: '',
    email: '',
    phnumber: '',
    phoneCode: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess('');
    setError('');

    // Validate email format
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Build the full payload as JSON
      const payload = {
        categoryofconcern: formData.categoryofconcern,
        descriptionofincident: formData.descriptionofincident,
        location: formData.location,
        dateofincident: formData.dateofincident,
        witnessifany: formData.witnessifany,
        fullname: formData.fullname,
        email: formData.email,
        phone: `${formData.phoneCode} ${formData.phnumber}`,
      };

      const res = await fetch('/api/whistleform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();


      if (res.ok) {
    
        setSuccess('Form submitted successfully');
        window.location.replace('/thankyou');
        console.log(res)
        setFormData({
          categoryofconcern: '',
          descriptionofincident: '',
          location: '',
          dateofincident: '',
          witnessifany: '',
          fullname: '',
          email: '',
          phnumber: '',
          phoneCode: '',
        });
      } else {
        setError(result.message || 'Submission failed.');
      }
    } catch (err) {
      setError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h2 className="font-medium !text-4xl">Submit a Report</h2>
        <p className="text-center mb-6">
          Please provide as much detail as possible to help us investigate your concern effectively.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category of concern</label>
            <input
              type="text"
              name="categoryofconcern"
              placeholder="Category of concern"
              value={formData.categoryofconcern}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description of Incident</label>
            <textarea
              className="resize-none"
              name="descriptionofincident"
              rows="4"
              placeholder="Enter description of incident"
              value={formData.descriptionofincident}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Incident</label>
            <input
              type="date"
              name="dateofincident"
              value={formData.dateofincident}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Witness if any</label>
            <input
              type="text"
              name="witnessifany"
              placeholder="Enter witness name(s)"
              value={formData.witnessifany}
              onChange={handleChange}
            />
          </div>

          <div className="h-[1px] bg-white mb-6"></div>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Ph Number*</label>
            <div className="phone-row">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+91">+91</option>
                <option value="+92">+92</option>
                <option value="+971">+971</option>
                <option value="+880">+880</option>
                <option value="+86">+86</option>
                <option value="+81">+81</option>
                <option value="+49">+49</option>
                <option value="+33">+33</option>
                <option value="+55">+55</option>
                <option value="+7">+7</option>
                <option value="+27">+27</option>
              </select>
              <input
                type="tel"
                name="phnumber"
                placeholder="Mobile number"
                value={formData.phnumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
}
