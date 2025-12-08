import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Bonjour ! Je suis l\'assistant du projet HISWACA-Congo. Comment puis-je vous informer sur notre mission et nos activités en République du Congo ?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      // Préparer les messages pour l'API (inclure tous les messages sauf le message de bienvenue initial)
      const apiMessages = messages
        .filter(msg => msg.sender !== 'bot' && msg.id !== 1)
        .map(msg => ({
          role: msg.sender as 'user',
          content: msg.text
        }));
      
      // Ajouter le message actuel
      apiMessages.push({
        role: 'user',
        content: currentInput
      });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages
        })
      });

      const data = await response.json();

      if (response.ok) {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: data.reply,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        // Gérer les erreurs
        const errorMessage: Message = {
          id: Date.now() + 1,
          text: data.error || 'Désolé, une erreur est survenue. Veuillez réessayer.',
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Désolé, je ne peux pas répondre pour le moment. Veuillez réessayer plus tard.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <button 
        className="chatbot-button" 
        id="chatbotToggle"
        onClick={toggleChatbot}
        aria-label="Ouvrir le chatbot"
      >
        <i className="fas fa-comments"></i>
        {messages.length > 0 && (
          <span className="badge">{messages.length}</span>
        )}
      </button>
      
      <div 
        className={`chatbot-window ${isOpen ? 'open' : ''}`} 
        id="chatbotWindow"
      >
        <div className="chatbot-header">
          <h3><i className="fas fa-robot"></i> Assistant HISWACA-Congo</h3>
          <button 
            className="close-btn" 
            id="chatbotClose"
            onClick={closeChatbot}
            aria-label="Fermer le chatbot"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="chatbot-messages" id="chatbotMessages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString('fr-FR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chatbot-input-container">
          <input 
            type="text" 
            className="chatbot-input" 
            id="chatbotInput"
            placeholder="Posez votre question..." 
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="chatbot-send-btn" 
            id="chatbotSend"
            onClick={handleSendMessage}
            aria-label="Envoyer le message"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .chatbot-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .chatbot-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .chatbot-button .badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #e74c3c;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .chatbot-window {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .chatbot-window.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .chatbot-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 15px 15px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chatbot-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .chatbot-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .message {
          max-width: 80%;
          word-wrap: break-word;
        }

        .user-message {
          align-self: flex-end;
        }

        .bot-message {
          align-self: flex-start;
        }

        .message-content {
          padding: 10px 15px;
          border-radius: 18px;
          margin-bottom: 5px;
        }

        .user-message .message-content {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .bot-message .message-content {
          background: #f1f1f1;
          color: #333;
        }

        .message-time {
          font-size: 11px;
          color: #999;
          text-align: right;
        }

        .bot-message .message-time {
          text-align: left;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 10px 15px;
          background: #f1f1f1;
          border-radius: 18px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #999;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .chatbot-input-container {
          padding: 15px 20px;
          border-top: 1px solid #eee;
          display: flex;
          gap: 10px;
        }

        .chatbot-input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 25px;
          outline: none;
          font-size: 14px;
        }

        .chatbot-input:focus {
          border-color: #667eea;
        }

        .chatbot-send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .chatbot-send-btn:hover {
          transform: scale(1.1);
        }

        @media (max-width: 480px) {
          .chatbot-window {
            width: calc(100vw - 40px);
            right: -10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatToggle;