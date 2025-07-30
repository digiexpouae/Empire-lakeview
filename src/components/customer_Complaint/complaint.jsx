'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
export default function Complainform() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    country: '',
    city: '',
    role: '',
    currentSalary: '',
    expectedSalary: '',
    linkedin: '',
    resume: null,
    skills: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
const router=useRouter();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess('');
    setError('');

    try {
      const payload = new FormData();
      payload.append('fullName', formData.fullName);
      payload.append('email', formData.email);
      payload.append('phone', `${formData.phoneCode} ${formData.phoneNumber}`);
      payload.append('country', formData.country);
      payload.append('city', formData.city);
      payload.append('role', formData.role);
      payload.append('currentSalary', formData.currentSalary);
      payload.append('expectedSalary', formData.expectedSalary);
      payload.append('linkedin', formData.linkedin);
      payload.append('skills', formData.skills);
      if (formData.resume) {
        payload.append('resume', formData.resume);
      }

      const res = await fetch('/api/oppurtunity', {
        method: 'POST',
        body: payload,
      });

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        setSuccess('Form submitted successfully')
        window.location.replace('/thankyou');
        setFormData({
          fullName: '',
          email: '',
          phoneCode: '+91',
          phoneNumber: '',
          country: '',
          city: '',
          role: '',
          currentSalary: '',
          expectedSalary: '',
          linkedin: '',
          resume: null,
          skills: '',
        });
          return
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
        <h2 className='!text-4xl font-semibold '>Submit Your Complaint</h2>
        <p className='text-center mb-6'>Please provide as much detail as possible to help us investigate your concern effectively.</p>
        <form onSubmit={handleSubmit}>
        <p className='mb-4'>Your contact information</p>
        <div className="form-row">
    

          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
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
                  <option value="+27">+27</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Mobile number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
            <label>Property/Project</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Property Adress</label>
              <input
                type="text"
                name="Property Adress"
                placeholder="Enter Property Adress"
                value={formData.PropertyAdress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Unit Villa Number</label>
              <input
                type="text"
                name="Unit Villa Number"
                placeholder="Villa/Unit Number"
                value={formData.Unit}
                onChange={handleChange}
              />
            </div>
          </div>

      
          <div className="form-group">
              <label>Contract Booking number</label>
              <input
                type="text"
                name="Contract Booking number"
                placeholder="Enter"
                value={formData.ContractBookingnumber}
                onChange={handleChange}
              />
            </div>
   
         
            <div className="form-group">
              <label>Category of complaint*</label>
              <input
                type="text"
                name="Category of complaint"
                placeholder="Enter"
                value={formData.Categoryofcomplaint}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label> Severity Level</label>
              <input
                type="text"
                name=" Severity Level"
                placeholder="Enter"
                value={formData.SeverityLevel}
                onChange={handleChange}
              />
            </div>
      
         
            <div className="form-group">
              <label>Date of incident</label>
              <input
                type="date"
                name="dateofincident"
                value={formData.dateofincident}
                onChange={handleChange}
              />
          </div>

          <div className="form-group">
            <label>Detailed Description </label>
            <textarea
            className='resize-none'
              name="detaileddescription"
              rows="4"
              placeholder="Enter description"
              value={formData.detaileddescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
              <label>Previously Contact Attempt</label>
              <input
                type="text"
                name="previouslycontactattempt"
                placeholder='Enter'
                value={formData.contactattempt}
                onChange={handleChange}
              />
          </div> 
          <div className="flex gap-2 items-center mb-2 ">
              <input
                type="checkbox"
                name="previouslycontactattempt"
                value={formData.previouslycontactattempt}
                className='w-4 h-4'
                onChange={handleChange}
              />              <p className="text-sm">i consent to being contacted for follow-up on this report</p>

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
