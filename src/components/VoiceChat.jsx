'use client';

import React, { useEffect, useState } from 'react';
import { useConversation } from '@elevenlabs/react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const VoiceChat = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [textInput, setTextInput] = useState('');

  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs');
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs');
    },
    onMessage: (message) => {
      console.log('Received message:', message);
    },
    onError: (error) => {
      setErrorMessage(typeof error === 'string' ? error : error.message);
      console.error('Error:', error);
    },
  });

  const { status, isSpeaking } = conversation;

  useEffect(() => {
    const requestMicPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setHasPermission(true);
      } catch (error) {
        setErrorMessage('Microphone access denied');
        console.error('Error accessing microphone:', error);
      }
    };

    requestMicPermission();
  }, []);

  const handleStartConversation = async () => {
    try {
      await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID,
      });
    } catch (error) {
      setErrorMessage('Failed to start conversation');
      console.error('Error starting conversation:', error);
    }
  };

  const handleEndConversation = async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      setErrorMessage('Failed to end conversation');
      console.error('Error ending conversation:', error);
    }
  };

  const toggleMute = async () => {
    try {
      await conversation.setVolume({ volume: isMuted ? 1 : 0 });
      setIsMuted(!isMuted);
    } catch (error) {
      setErrorMessage('Failed to change volume');
      console.error('Error changing volume:', error);
    }
  };

  const handleSendText = async () => {
    try {
      console.log('Sending text:', textInput);
      await conversation.sendText(textInput);
      setTextInput('');
    } catch (error) {
      console.error('sendText failed:', error);
      setErrorMessage(error?.message || 'Failed to send message');
    }
  };
  
  return (
    <div className="border rounded-lg shadow p-4 w-full max-w-md mx-auto bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Voice Chat</h2>
        <button
          onClick={toggleMute}
          disabled={status !== 'connected'}
          className={`p-2 border rounded ${status !== 'connected' ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <div className="mb-4">
        {status === 'connected' ? (
          <button
            onClick={handleEndConversation}
            className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            <MicOff className="w-4 h-4" />
            End Conversation
          </button>
        ) : (
          <button
            onClick={handleStartConversation}
            disabled={!hasPermission}
            className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
              !hasPermission ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Mic className="w-4 h-4" />
            Start Conversation
          </button>
        )}
      </div>

      {status === 'connected' && (
        <div className="mb-4">
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-2 border rounded mb-2"
            rows={3}
          />
          <button
            onClick={handleSendText}
            disabled={!textInput.trim()}
            className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      )}

      <div className="text-center text-sm space-y-1">
        {status === 'connected' && (
          <p className="text-green-600">{isSpeaking ? 'Agent is speaking...' : 'Listening...'}</p>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {!hasPermission && (
          <p className="text-yellow-600">Please allow microphone access to use voice chat</p>
        )}
      </div>
    </div>
  );
};

export default VoiceChat;
