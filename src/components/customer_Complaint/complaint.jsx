'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Complainform() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneCode: '+91',
    phonenumber: '',
    property: '',
    propertyaddress: '',
    unitvillanumber: '',
    contractbookingnumber: '',
    categoryofcomplaint: '',
    severitylevel: '',
    dateofincident: '',
    detaileddescription: '',
    previouslycontactattempt: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
      payload.set('phonenumber', `${formData.phoneCode} ${formData.phonenumber}`);

      const res = await fetch('/api/customer', {
        method: 'POST',
        body: payload,
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess('Form submitted successfully');
        window.location.replace('/thankyou');
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
        <h2 className='!text-4xl font-semibold'>Submit Your Complaint</h2>
        <p className='text-center mb-6'>Please provide as much detail as possible to help us investigate your concern effectively.</p>
        <form onSubmit={handleSubmit}>
          <p className='mb-4'>Your contact information</p>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Ph Number*</label>
            <div className="phone-row">
              <select name="phoneCode" value={formData.phoneCode} onChange={handleChange}>
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
                  <option value="+27">+27</option>              </select>
              <input
                type="tel"
                name="phonenumber"
                placeholder="Enter your mobile number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Property/Project</label>
            <select name="property" value={formData.property} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Property Address</label>
              <input
                type="text"
                name="propertyaddress"
                value={formData.propertyaddress}
                onChange={handleChange}
                placeholder="Enter property address"
              />
            </div>
            <div className="form-group">
              <label>Unit/Villa Number</label>
              <input
                type="text"
                name="unitvillanumber"
                value={formData.unitvillanumber}
                onChange={handleChange}
                placeholder="Enter villa/unit number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Contract Booking Number</label>
            <input
              type="text"
              name="contractbookingnumber"
              value={formData.contractbookingnumber}
              onChange={handleChange}
              placeholder="Enter contract/booking number"
            />
          </div>

          <div className="form-group">
            <label>Category of Complaint*</label>
            <input
              type="text"
              name="categoryofcomplaint"
              value={formData.categoryofcomplaint}
              onChange={handleChange}
              placeholder="Enter complaint category"
            />
          </div>

          <div className="form-group">
            <label>Severity Level</label>
            <input
              type="text"
              name="severitylevel"
              value={formData.severitylevel}
              onChange={handleChange}
              placeholder="Enter severity level"
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
            <label>Detailed Description</label>
            <textarea
              className="resize-none"
              name="detaileddescription"
              rows="4"
              value={formData.detaileddescription}
              onChange={handleChange}
              placeholder="Enter detailed description"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Previously Contact Attempt</label>
            <input
              type="text"
              name="previouslycontactattempt"
              placeholder="Enter yes or no"
              value={formData.previouslycontactattempt ? 'Yes' : 'No'}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2 items-center mb-2">
            <input
              type="checkbox"
              name="previouslycontactattempt"
              checked={formData.previouslycontactattempt}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <p className="text-sm">I consent to being contacted for follow-up on this report</p>
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
