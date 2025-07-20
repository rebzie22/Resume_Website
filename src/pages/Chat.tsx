import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to the interactive chat page! I'm your personal assistant for learning about Jordan's background and experience. What would you like to know?",
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

  // Enhanced knowledge base for the full chat page
  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Skills and technologies
    if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('programming')) {
      return "Jordan's technical expertise includes:\n\n🚀 Frontend: React, TypeScript, JavaScript, HTML5, CSS3\n🎨 Styling: Tailwind CSS, responsive design\n🛠️ Tools: Git, React Router, modern development practices\n💡 Concepts: Component-based architecture, state management, user experience design\n\nThis very website showcases these skills in action!";
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career')) {
      return "Jordan has experience in modern web development with a focus on creating user-friendly, responsive applications. You can find detailed information about work history and professional experience on the Resume page. Each role has contributed to building expertise in full-stack development and problem-solving.";
    }
    
    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('work') || message.includes('example')) {
      return "Great question! Here are some highlighted projects:\n\n📱 This Resume Website: Built with React, TypeScript, and Tailwind CSS, featuring responsive design, dark mode, and this interactive chatbot!\n\n🎯 The chatbot you're talking to right now demonstrates:\n• React component architecture\n• State management\n• Interactive UI design\n• TypeScript implementation\n\nCheck out the Work page for more detailed project descriptions and live examples!";
    }
    
    // About the chatbot
    if (message.includes('chatbot') || message.includes('bot') || message.includes('ai') || message.includes('assistant')) {
      return "I'm a custom-built chatbot created specifically for this resume website! Here's what makes me special:\n\n🤖 Built entirely with React and TypeScript\n💬 Interactive conversation interface\n🎨 Responsive design that works on all devices\n⚡ Real-time message handling\n🧠 Knowledge base about Jordan's background\n\nI'm a great example of how Jordan can create engaging, interactive user experiences!";
    }
    
    // Education
    if (message.includes('education') || message.includes('school') || message.includes('degree') || message.includes('university') || message.includes('learn')) {
      return "Information about Jordan's educational background, including degrees, certifications, relevant coursework, and continuous learning efforts can be found on the Resume page. Education is an ongoing journey in the tech field!";
    }
    
    // Contact and hiring
    if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('hire') || message.includes('opportunity')) {
      return "Interested in working with Jordan? That's great to hear! 🎉\n\nYou can find contact information on both the Resume and Contact pages, including:\n📧 Email address\n📱 Phone number\n💼 LinkedIn profile\n🐙 GitHub repositories\n📝 Contact form for direct messages\n\nThe Contact page has a convenient form where you can send a message directly. Feel free to reach out for job opportunities, collaborations, or just to connect!";
    }
    
    // About this website
    if (message.includes('website') || message.includes('site') || message.includes('built') || message.includes('made') || message.includes('code')) {
      return "This website is a showcase of modern web development! 🌟\n\n🛠️ Built with: React, TypeScript, Tailwind CSS\n✨ Features: Responsive design, dark mode toggle, interactive chatbot\n🎨 Design: Clean, professional, user-friendly interface\n📱 Mobile-first approach with cross-device compatibility\n\nThe entire codebase demonstrates best practices in component architecture, state management, and user experience design!";
    }
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return "Hello there! 👋 Welcome to Jordan's interactive resume experience! I'm here to help you learn more about their background, skills, and projects. \n\nWhat would you like to explore? You can ask about:\n• Technical skills and expertise\n• Work experience and projects\n• Education and background\n• How to get in contact\n• This website and how it was built";
    }
    
    // Thank you
    if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
      return "You're very welcome! 😊 I'm happy to help you learn more about Jordan. Is there anything else you'd like to know about their background, skills, or experience?";
    }
    
    // Default response with suggestions
    return "That's an interesting question! I'd love to help you learn more about Jordan. Here are some topics I can discuss:\n\n💻 Technical Skills & Technologies\n🏢 Work Experience & Career Background\n🚀 Projects & Portfolio Examples\n🎓 Education & Certifications\n📞 Contact Information & Opportunities\n🌐 About This Website & Development\n\nWhat would you like to explore?";
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

    // Simulate realistic typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What are Jordan's technical skills?",
    "Tell me about their projects",
    "How can I contact Jordan?",
    "What technologies were used for this website?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 pb-4">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Chat with My Assistant
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ask me anything about Jordan's background, skills, and experience!
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-96 flex flex-col">
          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex max-w-xs lg:max-w-md">
                  {!message.isUser && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        AI
                      </div>
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-200 dark:bg-gray-700 dark:text-white rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.isUser && (
                    <div className="flex-shrink-0 ml-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        You
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex max-w-xs lg:max-w-md">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      AI
                    </div>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Suggested Questions:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="text-left p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                disabled={isTyping}
              >
                <span className="text-gray-700 dark:text-gray-300">{question}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
