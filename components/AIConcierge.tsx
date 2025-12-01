import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { getBookRecommendations } from '../services/geminiService';
import { ChatMessage, Book } from '../types';

interface AIConciergeProps {
  books: Book[];
}

export const AIConcierge: React.FC<AIConciergeProps> = ({ books }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init-0', role: 'model', text: 'Irasshaimase! Welcome to Kinokuniya. I am your AI concierge. Looking for a specific manga, novel, or gift? Ask me!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    const context = books.map(b => `${b.title} by ${b.author} (${b.category})`).join(', ');
    const responseText = await getBookRecommendations(userMsg.text, context);

    const modelMsg: ChatMessage = {
      id: generateId(),
      role: 'model',
      text: responseText
    };

    setIsThinking(false);
    setMessages(prev => [...prev, modelMsg]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col transition-all duration-300 ease-in-out transform origin-bottom-right overflow-hidden border border-gray-200 ${isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-90 opacity-0 h-0 mb-0'}`}
        style={{ maxHeight: '600px', height: isOpen ? '500px' : '0' }}
      >
        {/* Header */}
        <div className="bg-kino-blue p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <div className="bg-white/10 p-1.5 rounded-full">
              <Sparkles className="text-yellow-300 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Kinokuniya Assistant</h3>
              <p className="text-blue-200 text-xs">Powered by Gemini AI</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-kino-blue text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isThinking && (
             <div className="flex justify-start">
               <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-1">
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100 shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask for a recommendation..."
              className="w-full bg-gray-100 text-gray-900 text-sm rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-kino-blue/50 focus:bg-white transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isThinking}
              className="absolute right-2 p-1.5 bg-kino-blue text-white rounded-full hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full shadow-lg transform transition-transform hover:scale-105 active:scale-95 focus:outline-none ${isOpen ? 'bg-gray-200 text-gray-600 rotate-90' : 'bg-kino-blue text-white'}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};