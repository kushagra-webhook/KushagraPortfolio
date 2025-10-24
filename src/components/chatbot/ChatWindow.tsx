import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuickActions } from './QuickActions';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  isTyping?: boolean;
  html?: boolean;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 p-3">
    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{ animationDelay: '0ms' }}></div>
    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{ animationDelay: '300ms' }}></div>
    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{ animationDelay: '600ms' }}></div>
  </div>
);

const WelcomeMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-100 dark:border-purple-800"
  >
    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
      <span className="text-2xl">👋</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Welcome!</h3>
    <p className="text-sm text-muted-foreground">
      I'm here to help you learn more about Kushagra Singh. Feel free to ask me anything!
    </p>
  </motion.div>
);

export const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isError, setIsError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fallback responses in case the Flask server is not available
  const fallbackResponses: Record<string, string> = {
    'help': "I can tell you about Kushagra's experience, projects, publications, skills, and how to contact him. Just ask!",
    'projects': "Kushagra has worked on various projects including IRIS Club RAG Chatbot, DocsVerse, LangGraph Researcher, and more. Check out the Projects section for details!",
    'contact': "You can reach Kushagra at kushagraa.n@gmail.com or connect via LinkedIn, GitHub, or the contact form on this website.",
    'about': "Kushagra Singh is a Final Year Computer Science Engineering student at MIT World Peace University, passionate about AI/ML, Web Development, and Embedded Systems.",
    'experience': "Kushagra has worked as an ML Project Intern at Infosys Springboard, ML Research Associate at IIMT University, and is currently the Technical Head at IRIS, MIT WPU.",
    'skills': "Kushagra is proficient in Python, Java, C++, PyTorch, TensorFlow, Next.js, Spring Boot, AWS, Docker, and many more technologies.",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check if Flask server is running
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://portfolio-chatbot-backend-vtgu.onrender.com';
        const response = await fetch(`${apiUrl}/api/health`);
        if (!response.ok) {
          setIsError(true);
        }
      } catch (error) {
        console.error('Error connecting to Flask server:', error);
        setIsError(true);
      }
    };
    
    if (isOpen) {
      checkServerStatus();
    }
  }, [isOpen]);

  const getFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(fallbackResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return "That's an interesting question! For detailed information, please explore the different sections of this portfolio or use the contact form to reach out directly.";
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      if (isError) {
        // Use fallback if server is not available
        setTimeout(() => {
          const botResponse = getFallbackResponse(input);
          const botMessage: Message = { sender: 'bot', text: botResponse };
          setMessages((prev) => [...prev, botMessage]);
          setIsTyping(false);
        }, 1000);
        return;
      }

      // Call Flask backend API
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://portfolio-chatbot-backend-vtgu.onrender.com';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: input,
          // Include user_id if available from auth
          // user_id: auth?.user?.id 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await response.json();
      const botMessage: Message = { 
        sender: 'bot', 
        text: data.response,
        html: true // Mark as HTML to render links correctly
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting chatbot response:', error);
      
      // Use fallback on error
      const botMessage: Message = { 
        sender: 'bot', 
        text: "I'm having trouble connecting to my knowledge base right now. Please try again later or explore the portfolio sections directly."
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsError(true);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (actionText: string) => {
    setInput(actionText);
    handleSend();
  };

  const showQuickActions = messages.length === 0;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-20 right-4 w-[470px] max-w-[calc(100vw-2rem)] h-[700px] max-h-[calc(100vh-120px)] bg-background rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-border"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Assistant</h3>
              <p className="text-xs text-purple-200">
                {isTyping ? 'Typing...' : 'Online'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-purple-200 transition-colors"
            title="Close chat"
            aria-label="Close chat"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/20">
          {messages.length === 0 && <WelcomeMessage />}
          
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-md'
                    : 'bg-card text-foreground rounded-bl-md border border-border shadow-sm'
                }`}
                style={{
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}
              >
                {msg.html ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  <div className="prose prose-sm dark:prose-invert max-w-none space-y-1">
                    {msg.text.split('\n').map((line, i) => {
                      // Handle numbered lists (1. Item)
                      if (/^\d+\.\s/.test(line)) {
                        const number = line.match(/^\d+/)[0];
                        const content = line.replace(/^\d+\.\s/, '');
                        
                        // Process links in content
                        const processedContent = processLinks(content, i);
                        
                        return (
                          <div key={i} className="flex items-start mb-3">
                            <span className="font-bold mr-2 text-purple-600 min-w-[20px] text-right">{number}.</span>
                            <span className="flex-1">{processedContent}</span>
                          </div>
                        );
                      }
                      // Handle bullet points (- Item or • Item)
                      else if (/^[-•]\s/.test(line)) {
                        const content = line.replace(/^[-•]\s/, '');
                        
                        // Process links in content
                        const processedContent = processLinks(content, i);
                        
                        return (
                          <div key={i} className="flex items-start mb-3 ml-2">
                            <span className="mr-2 text-purple-600">•</span>
                            <span className="flex-1">{processedContent}</span>
                          </div>
                        );
                      }
                      // Check for links in backticks format like `http://example.com`
                      else if (/`https?:\/\/[^`]+`/.test(line)) {
                        return <p key={i} className="mb-2">{processLinks(line, i)}</p>;
                      }
                      // Regular text
                      else if (line.trim()) {
                        return <p key={i} className="mb-2">{processLinks(line, i)}</p>;
                      }
                      // Empty line - add more spacing
                      return <div key={i} className="h-2"></div>;
                    })}
                  </div>
                )}
                </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-card rounded-2xl rounded-bl-md border border-border">
                <TypingIndicator />
              </div>
            </div>
          )}
          
          {showQuickActions && (
            <QuickActions onActionClick={handleQuickAction} />
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex space-x-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-border rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              placeholder="Ask me anything..."
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-3 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              title="Send message"
              aria-label="Send message"
            >
              <svg className="w-5 h-5 transform rotate-90" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Add this function before the return statement in the ChatWindow component
function processLinks(text, lineIndex) {
  // Regular expression to find URLs in text, including those in backticks
  const urlRegex = /`?(https?:\/\/[^\s`]+)`?/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  // Find all URLs in the text
  while ((match = urlRegex.exec(text)) !== null) {
    // Add text before the URL
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Extract the URL, removing backticks if present
    let url = match[0];
    const hasBackticks = url.startsWith('`') && url.endsWith('`');
    if (hasBackticks) {
      url = url.substring(1, url.length - 1);
    }
    
    // Add the URL as a link
    parts.push(
      <a 
        key={`link-${lineIndex}-${parts.length}`}
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium border-b border-blue-300 pb-0.5 transition-colors"
      >
        {url}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add any remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  // If we found links, return the processed parts
  if (parts.length > 0) {
    return <>{parts}</>;
  }
  
  // Otherwise, return the text as is
  return text;
}
