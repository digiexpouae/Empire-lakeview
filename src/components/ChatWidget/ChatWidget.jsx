import React, { useState } from 'react';
import Image from 'next/image';
import bot from '../../../public/assets/Union.png'
const ChatWidget = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFirstModalSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    // Handle chat submission
    console.log('Chat submitted');
  };

  return (
    <>
      {/* Floating Button with CSS Golden Border */}
      <div className="chat-widget" onClick={() => setIsFirstModalOpen(true)}>
        <div className="chat-widget-icon">
          <img 
            src="/assets/aibot2.png" 
            alt="AI Assistant" 
            className="ai-logo" 
          />
        </div>
        <div>
            <div className="chat-widget-image">
              <Image 
                src="/assets/aibot2.png" 
                alt="AI Assistant"
                width={24}
                height={24}
              />
            </div>
      <div className='flex'><div><Image  src={bot} /></div>  <span className="chat-widget-text">Let's Talk</span></div></div>
      </div>

      {/* First Modal - Contact Form */}
      {isFirstModalOpen && (
        <div className="modal-overlay" onClick={() => setIsFirstModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsFirstModalOpen(false)}>×</button>
            <div className="modal-logo">
              <img src="/assets/aibot2.png" alt="AI Assistant" />
            </div>
            <h2>Hi Ready To Talk to Me</h2>
            <form onSubmit={handleFirstModalSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <div className="flex gap-1 w-full">
                  <select 
                    className="country-code flex-1 min-w-[80px] bg-[#FFFFFF33] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent"
                    style={{ WebkitAppearance: 'none' }}
                  >
                    <option value="+971" className="text-black">+971</option>
                    <option value="+1" className="text-black">+1</option>
                    <option value="+91" className="text-black">+91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="flex-1 bg-[#FFFFFF33] border border-[rgba(255,255,255,0.1)] rounded-lg px-2 py-2 text-white placeholder-[rgba(255,255,255,0.6)] focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent"
                  />
                </div>
              </div>
              <button type="submit" className="submit-button" 

  className="w-full text-white py-2 rounded-3xl "
  style={{ background: 'linear-gradient(90deg, #CCAB64 0%, #FAECC9 100%)' }}
>              <div className="flex items-center justify-center gap-2">
                  <img 
                    src="/assets/Union2.png" 
                    alt="" 
                    className="w-5 h-5"
                  />
                  <span>Connect to AI Assistant</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Second Modal - Chat Interface */}
      {isSecondModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSecondModalOpen(false)}>
          <div className="modal-content chat-modal" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsSecondModalOpen(false)}>×</button>
            <div className="modal-logo">
              <img src="/assets/aibot2.png" alt="AI Assistant" />
            </div>
            <h2>Ask whatever you want</h2>
            <form onSubmit={handleChatSubmit} className="chat-form">
              <textarea 
                placeholder="Type your message here..."
                className="chat-input"
                rows="4"
              />
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
