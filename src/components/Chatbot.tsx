import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your personal assistant for this resume website. Ask me about Jordan's experience, skills, or projects!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for the chatbot
  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Skills and technologies
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "Jordan's technical skills include React, TypeScript, JavaScript, Tailwind CSS, React Router, HTML, CSS, Git, C#, SQL Server, SpecFlow, Python (security libraries), HMAC cryptography, and modern web development practices. This website itself is built with React and TypeScript! They've also published a Python security library called Webhook Guardian on PyPI.";
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return "You can find detailed information about Jordan's work experience on the Resume page. Jordan has experience with both frontend technologies like React and TypeScript, as well as backend development with C# and SQL Server. They thrive in collaborative team environments and enjoy working on complex projects. Check out the Work page to see specific projects and accomplishments!";
    }
    
    // Backend/Database specific
    if (message.includes('backend') || message.includes('database') || message.includes('sql') || message.includes('server') || message.includes('c#')) {
      return "Jordan has strong backend development experience with C# and SQL Server, along with testing expertise using SpecFlow for behavior-driven development. They also work with Python for security applications - they've published a Python security library called Webhook Guardian on PyPI! They enjoy working on full-stack applications and database design.";
    }
    
    // Security specific
    if (message.includes('security') || message.includes('webhook') || message.includes('hmac') || message.includes('crypto')) {
      return "Jordan has a strong focus on security! They've developed and published Webhook Guardian, a Python security library on PyPI that handles webhook validation with HMAC signature verification, replay attack prevention, rate limiting, and IP whitelisting. This demonstrates their understanding of cryptography and secure development practices. They're passionate about helping other developers build more secure applications!";
    }
    
    // Team/Collaboration
    if (message.includes('team') || message.includes('collaborate') || message.includes('work with others') || message.includes('teamwork')) {
      return "Jordan thrives in team environments and loves collaborative development! They have experience working with cross-functional teams and believe that the best solutions come from diverse perspectives and open communication.";
    }
    
    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('work') || message.includes('webhook') || message.includes('python') || message.includes('library')) {
      return "Jordan has some impressive projects! The most notable is Webhook Guardian 🛡️, a Python security library published on PyPI that helps developers validate webhooks safely with HMAC verification, replay attack prevention, and rate limiting. This resume website is also a great example of their React/TypeScript skills, featuring dark mode, responsive design, and this interactive chatbot! Visit the Work page to see more projects and detailed descriptions.";
    }
    
    // Education
    if (message.includes('education') || message.includes('school') || message.includes('degree') || message.includes('university')) {
      return "Information about Jordan's educational background can be found on the Resume page, including degrees, certifications, and relevant coursework.";
    }
    
    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('hire')) {
      return "You can find Jordan's contact information on the Contact page, or reach out directly via the contact form! There you'll find email, phone, social links, and a convenient message form. Feel free to reach out for opportunities or collaborations!";
    }
    
    // About this website
    if (message.includes('website') || message.includes('site') || message.includes('built') || message.includes('made')) {
      return "This website is built with React, TypeScript, and Tailwind CSS. It features a responsive design, dark mode toggle, and this interactive chatbot! The source code demonstrates modern web development practices.";
    }
    
    // Chatbot meta questions
    if (message.includes('who are you') || message.includes('what are you') || message.includes('bot')) {
      return "I'm Jordan's personal assistant chatbot! I'm here to help answer questions about their background, skills, and experience. Try asking about their skills, projects, or experience!";
    }
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Jordan. You can ask me about their skills, experience, projects, or anything else you'd like to know!";
    }
    
    // Default response with suggestions
    return "I'd be happy to help! You can ask me about:\n• Jordan's technical skills and technologies\n• Work experience and background\n• Projects and portfolio (including Webhook Guardian!)\n• Security expertise and Python development\n• Education and certifications\n• Collaboration style and teamwork\n• How to get in contact\n\nWhat would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-24 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col z-[9999]">
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="font-semibold">Resume Assistant</span>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 text-xl font-bold"
          aria-label="Close chat"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                message.isUser
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-200 dark:bg-gray-700 dark:text-white rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-lg rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
