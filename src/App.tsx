import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Chat from './pages/Chat';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;