import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 dark:bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Jordan's Portfolio</div>
                <div className="space-x-4 flex items-center">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/resume" className="text-gray-300 hover:text-white">Resume</Link>
                    <Link to="/work" className="text-gray-300 hover:text-white">Projects</Link>
                    <Link to="/chat" className="text-gray-300 hover:text-white">Chat</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;