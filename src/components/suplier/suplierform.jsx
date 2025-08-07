

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';


const suplierform=()=>{
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneCode: '+91',
    phonenumber: '',
    YourInterest:'',
    Message:'',
    fileupload: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };


  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files[0]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setSuccess('');
    setError('');
    setIsSubmitting(true);
  
    try {
      // Create FormData instance to send JSON + file
      const form = new FormData();
  
      // Append non-file fields (convert to final format)
      form.append('fullname', formData.fullname);
      form.append('email', formData.email);
      form.append('phonenumber', `${formData.phoneCode} ${formData.phonenumber}`);
      form.append('interest', formData.YourInterest);
      form.append('message', formData.Message);
  
      // Append uploaded file (if exists)
      if (formData.fileupload) {
        form.append('fileupload', formData.fileupload);
      }
  
      // POST to API route (no need for 'Content-Type'; browser sets it automatically)
      const res = await fetch('/api/suplierform', {
        method: 'POST',
        body: form,
      });
  
      const result = await res.json();
  
      if (res.ok) {
        setSuccess('Form submitted successfully');
        window.location.replace('/thankyou');
        setFormData({   fullname: '',
          email: '',
          phoneCode: '+91',
          phonenumber: '',
          YourInterest:'',
          Message:'',
          fileupload: null,})
      } else {
        setError(result.message || 'Submission failed.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <>
    <div className='w-full flex flex-col items-center justify-center bg-[#1B1D2F] '>
        <div className='max-w-[600px] text-white  flex flex-col items-center justify-center pt-10'>
                    <h2 className=' text-2xl  md:!text-4xl font-semibold  '>Supplier Portal Submission</h2>
        <p className='   text-center mb-6'>Please provide detailed information about your concern, or inquiry to help us respond effectively.</p>
        </div></div>
    <div className="page-wrapper-2">

      <div className="form-container">

        <form onSubmit={handleSubmit}>
       
<p className='mb-5'>Company Information</p>
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
            <label>What are you interested in?</label>
            <input name="YourInterest" placeholder="What are you interested in?" value={formData.YourInterest} onChange={handleChange} required/>
         
         
          </div>

            <div className="form-group">
              <label>Attach Company Profile Pre Qualification</label>
              <input 
  type="file" 
  name="fileupload" 
  onChange={handleChange}
  accept=".pdf,.doc,.docx,.xls,.xlsx"
  className="mt-2 block w-full text-sm text-gray-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-xs file:font-light
    file:bg-[linear-gradient(90deg,_#CCAB64_0%,_#FAECC9_100%)] file:text-black
    hover:file:opacity-90"
/>

              <p className="mt-1 text-xs text-gray-500">
                Accepted formats: PDF, DOC, DOCX, XLS, XLSX (Max 5MB)
              </p>
            </div>
           


          <div className="form-group">
            <label>Message</label>
            <textarea
              className="resize-none"
              name="Message"
              rows="4"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
    </>
  );
}


export default suplierform