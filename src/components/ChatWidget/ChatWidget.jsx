import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import bot from '../../../public/assets/Union.png';
import { useConversation } from '@elevenlabs/react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
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

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = 'Phone number should contain only numbers';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const [conversationState, setConversationState] = useState({
    status: 'disconnected',
    isSpeaking: false,
    hasPermission: false,
    isMuted: false,
    errorMessage: '',
    isListening: false, // Track if we're actively listening
    aiResponse: '' // Track AI's spoken text
  });

  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
      setConversationState(prev => ({ ...prev, status: 'connected', errorMessage: '' }));
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
      setConversationState(prev => ({ ...prev, status: 'disconnected' }));
    },
    onMessage: (message) => {
      console.log('Received message:', message);
      if (message.role === 'assistant') {
        setConversationState(prev => ({ ...prev, aiResponse: message.content }));
      }
    },
    onError: (error) => {
      const errorMessage = error?.message || 'An error occurred with the voice service';
      console.error('ElevenLabs Error:', error);
      setConversationState(prev => ({ ...prev, errorMessage }));
    },
  });

  useEffect(() => {
    const requestMicPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setConversationState(prev => ({ ...prev, hasPermission: true }));
      } catch (error) {
        console.error('Error accessing microphone:', error);
        setConversationState(prev => ({
          ...prev,
          hasPermission: false,
          errorMessage: 'Microphone access denied'
        }));
      }
    };

    requestMicPermission();
  }, []);

  const toggleConversation = async () => {
    try {
      if (conversationState.status === 'connected' && conversationState.isListening) {
        // Stop listening but keep the connection alive
        setConversationState(prev => ({ ...prev, isListening: false }));
      } else if (conversationState.status === 'connected') {
        // Already connected, just toggle listening state
        setConversationState(prev => ({ ...prev, isListening: true }));
      } else {
        // Not connected yet, start a new session
        await conversation.startSession({
          agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID,
        });
        setConversationState(prev => ({ ...prev, isListening: true }));
      }
    } catch (error) {
      console.error('Error toggling conversation:', error);
      setConversationState(prev => ({
        ...prev,
        errorMessage: error?.message || 'Failed to toggle conversation'
      }));
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    toggleConversation();
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (conversationState.status === 'connected') {
        conversation.endSession().catch(console.error);
      }
    };
  }, []);

  const handleFirstModalSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
      // Start the conversation when modal opens
      toggleConversation();
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    // Handle chat submission
    console.log('Chat submitted');
  };

  return (
    <>
    {/*chat */}
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
      <div className='flex items-center'><div><Image  src={bot} /></div>  <span className="chat-widget-text">Let's Talk</span></div></div>
      </div>

      {/* First Modal - Contact Form */}
      {isFirstModalOpen && (
        <div className="modal-overlay" onClick={() => {
          // Stop conversation when modal is closed
          if (conversationState.status === 'connected') {
            conversation.endSession().catch(console.error);
          }
          setIsFirstModalOpen(false);
        }}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => {
              // Stop conversation when close button is clicked
              if (conversationState.status === 'connected') {
                conversation.endSession().catch(console.error);
              }
              setIsFirstModalOpen(false);
            }}>×</button>
            <div className="modal-logo">
              <img src="/assets/aibot2.png" alt="AI Assistant" />
              {conversationState.aiResponse && (
                <div className="ai-response-text">
                  {conversationState.aiResponse}
                </div>
              )}
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
                    className="country-code  min-w-[80px] bg-[#FFFFFF33] text-white border border-[rgba(255,255,255,0.1)] rounded-lg px-1 py-2 focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent"
                    style={{ WebkitAppearance: 'none' }}
                  >
                  <option value="+971" className="text-black"> +971</option>
<option value="+92" className="text-black">  +92 </option>
<option value="+91" className="text-black">  +91 </option>
<option value="+966" className="text-black"> +966 </option>
<option value="+965" className="text-black"> +965 </option>
<option value="+974" className="text-black"> +974 </option>
<option value="+968" className="text-black"> +968 </option>
<option value="+973" className="text-black"> +973 </option>
<option value="+880" className="text-black"> +880 </option>
<option value="+20" className="text-black">  +20 </option>
<option value="+60" className="text-black">  +60 </option>
<option value="+63" className="text-black">  +63 </option>
<option value="+62" className="text-black">  +62 </option>
<option value="+65" className="text-black">  +65 </option>

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

      {/* Second Modal - Chat Interface with Voice */}
      {isSecondModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSecondModalOpen(false)}>
          <div className="modal-content chat-modal" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <div 
                className={`modal-logo cursor-pointer transform transition-transform duration-200 hover:scale-110 ${conversationState.isListening ? 'animate-pulse' : ''}`}
                onClick={handleImageClick}
                title={conversationState.isListening ? 'Click to stop' : 'Click to start speaking'}
              >
                <img 
                  src="/assets/aibot2.png" 
                  alt="AI Assistant" 
                  className={`w-12 h-12 ${conversationState.isListening ? 'ring-2 ring-purple-500 rounded-full' : ''}`} 
                />
                {conversationState.isListening && (
                  <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3 animate-ping"></div>
                )}
              </div>
              <div className="flex items-center gap-4">
              <div 
                className={`p-2 rounded-full ${conversationState.isListening ? 'bg-red-500' : 'bg-green-500'} text-white transition-colors duration-200`}
              >
                {conversationState.isListening ? (
                  <MicOff className="w-5 h-5" />
                ) : (
                  <Mic className="w-5 h-5" />
                )}
              </div>
              
              {conversationState.status === 'connected' && (
                <div className="flex items-center text-sm">
                  <span className={`relative flex h-2 w-2 mr-1 ${conversationState.isListening ? 'text-green-500' : 'text-gray-400'}`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full ${conversationState.isListening ? 'bg-green-400' : 'bg-gray-400'} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${conversationState.isListening ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                  </span>
                  {conversationState.isListening ? 'Listening...' : 'Paused'}
                </div>
              )}
              
              <button 
                onClick={() => setIsSecondModalOpen(false)}
                className="close-button ml-2"
              >
                ×
              </button>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">
              {conversationState.isListening ? 'Speak now...' : 'Click the mic to start'}
            </h2>
            
            {/* Status Messages */}
            {!conversationState.hasPermission && (
              <div className="text-yellow-600 text-sm mb-4 p-2 bg-yellow-50 rounded">
                Please allow microphone access to use voice chat
              </div>
            )}
            {conversationState.errorMessage && (
              <div className="text-red-500 text-sm mb-4 p-2 bg-red-50 rounded">
                {conversationState.errorMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
