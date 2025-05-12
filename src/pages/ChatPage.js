import React, { useState } from 'react';
import axios from 'axios';
import './ChatPage.css';

function ChatPage() {
  const [prompt, setPrompt] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    try {
      const response = await axios.post('http://127.0.0.1:8000/generate', {
        prompt: prompt
      });

      setImageURL(response.data.image_url);
    } catch (error) {
      console.error(error);
      alert('Failed to generate image');
    }
  };

  return (
    <div className="chat-page">
      <header className="chat-header"> 
        <img src="image8.png" alt="Bird" className="header-bird" />
      </header>

      <main className="chat-main">
        <h4 className="section-title"><span>UNLEASH AI CREATIVITY</span></h4>
        <h2 className="section-heading">Design Smarter with AI-Powered Brilliance</h2>

        <div className="features-row">
          {[
            { icon: "🤖", title: "Intelligent" },
            { icon: "👁️", title: "Visualization" },
            { icon: "💡", title: "Creativity" },
            { icon: "🎚️", title: "Flexible" }
          ].map((item, i) => (
            <div className="feature-item" key={i}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>Smarter Images with Every Prompt</p>
              <div className="arrow">→</div>
            </div>
          ))}
        </div>

        {imageURL && (
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <h3>Generated Image:</h3>
            <img src={imageURL} alt="Generated" style={{ maxWidth: "90%", borderRadius: "10px" }} />
          </div>
        )}
      </main>

      <footer className="chat-footer">
        <input
          type="text"
          placeholder="Type a prompt to generate an image..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleGenerate}>➤</button>
      </footer>
    </div>
  );
}

export default ChatPage;
