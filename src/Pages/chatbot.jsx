import React, { useState, useEffect, useRef } from 'react';

function Chatbot() {
    const [chatInput, setChatInput] = useState("");
    const [chatHistory, setChatHistory] = useState([
        { type: 'incoming', message: 'Hi there 👋 How can I help you today?' }
    ]);

    const chatInputRef = useRef();

    const handleChat = () => {
        let userMessage = chatInput.trim();
        if (!userMessage) return;

        setChatInput("");
        setChatHistory([...chatHistory, { type: 'outgoing', message: userMessage }]);

        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: userMessage })
        })
        .then(response => response.json())
        .then(data => {
            setChatHistory(prevChatHistory => [...prevChatHistory, { type: 'incoming', message: data.ai_message }]);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        chatInputRef.current.style.height = 'inherit';
        chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
    }, [chatInput]);

    return (
        <div className="chatbot">
            <header>
                <h2>Chatbot</h2>
                <span className="close-btn material-symbols-outlined">close</span>
            </header>
            <ul className="chatbox">
                {chatHistory.map((chat, index) => (
                    <li key={index} className={`chat ${chat.type}`}>
                        {chat.type === 'incoming' && <span className="material-symbols-outlined">smart_toy</span>}
                        <p>{chat.message}</p>
                    </li>
                ))}
            </ul>
            <div className="chat-input">
                <textarea 
                    placeholder="Enter a message..." 
                    spellCheck="false" 
                    required 
                    value={chatInput} 
                    onChange={e => setChatInput(e.target.value)} 
                    ref={chatInputRef}
                />
                <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>send</span>
            </div>
        </div>
    );
}

export default Chatbot;