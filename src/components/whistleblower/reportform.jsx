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
    phoneCode: '+91',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess('');
    setError('');

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      // Combine phone code and number
      payload.set('phnumber', `${formData.phoneCode} ${formData.phnumber}`);

      const res = await fetch('/api/whistleform', {
        method: 'POST',
        body: payload,
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess('Form submitted successfully');
        window.location.replace('/thankyou');
        setFormData({
          categoryofconcern: '',
          descriptionofincident: '',
          location: '',
          dateofincident: '',
          witnessifany: '',
          fullname: '',
          email: '',
          phnumber: '',
          phoneCode: '+91',
        });
        return;
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
        <p className="text-center">
          Please provide as much detail as possible to help us investigate your concern effectively.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category of concern</label>
            <select
              name="categoryofconcern"
              value={formData.categoryofconcern}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
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
