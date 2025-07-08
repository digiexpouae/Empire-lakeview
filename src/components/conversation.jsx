'use client';

import { useState } from 'react';

function TextOnlyChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: 'user', text: input }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      const reply = data?.response?.text || 'No response from agent';

      setMessages((prev) => [...prev, { from: 'agent', text: reply }]);
    } catch (err) {
      console.error('Error sending:', err);
      setMessages((prev) => [...prev, { from: 'agent', text: 'Error sending message' }]);
    }

    setInput('');
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">ElevenLabs Chat</h2>

      <div className="max-h-64 overflow-y-auto border rounded p-4 bg-white mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.from === 'user' ? 'text-blue-600' : 'text-green-700'}`}>
            <strong>{msg.from === 'user' ? 'You' : 'Agent'}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={sendMessage}
          disabled={!input.trim() || loading}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default TextOnlyChat;
