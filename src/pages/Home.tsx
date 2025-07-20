import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Jordan Guck's Website!</h1>
            <p className="text-lg mb-8">Showcasing my skills, experience, and awesome work.</p>
            {/* Add more home page content here */}
        </div>
    );
};

export default Home;