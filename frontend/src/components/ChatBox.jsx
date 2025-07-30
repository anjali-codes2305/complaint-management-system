import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hi, any update on my complaint?' },
    { sender: 'agent', text: 'Yes, it’s being processed.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="bg-white p-4 rounded shadow max-w-md">
      <h3 className="text-lg font-bold mb-2">Chat</h3>
      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-1 text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-1 rounded ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type message..."
          className="flex-1 border px-2 py-1 rounded-l"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-3 py-1 rounded-r hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
