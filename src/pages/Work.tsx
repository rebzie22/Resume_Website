import React from 'react';
import { Link } from 'react-router-dom';
import websiteProjectImg from '../assets/websiteproject.png'; // adjust path if needed
import minesweeperImg from '../assets/minesweeper.png';

const projects = [
    {
        title: "Webhook Guardian 🛡️",
        description: "A production-ready Python security library for webhook validation. Features HMAC signature verification, replay attack prevention, rate limiting, and IP whitelisting. Follows best practices with Test PyPI validation before production release.",
        link: "https://pypi.org/project/webhook-guardian/",
        github: "https://github.com/rebzie22/webhook-guardian",
        testPypi: "https://test.pypi.org/project/webhook-guardian/0.1.0/",
        image: "https://via.placeholder.com/400x250/1f2937/ffffff?text=🛡️+Webhook+Guardian",
        tags: ["Python", "Security", "PyPI", "HMAC", "Cryptography", "API"],
        type: "library"
    },
    {
        title: "Classic Games Collection 🎮",
        description: "A modular C# Windows Forms application featuring a unified launcher and multiple classic games (Minesweeper, Snake, and more). Demonstrates OOP, plugin architecture, and desktop UI/UX design.",
        link: "https://github.com/rebzie22/classic-games-collection",
        github: "https://github.com/rebzie22/classic-games-collection",
        image: require('../assets/class-games-collection.png'),
        tags: ["C#", ".NET", "Windows Forms", "Game Development", "OOP", "Launcher", "Portfolio"],
        download: "https://github.com/rebzie22/classic-games-collection/releases/download/v.1.0.0/classic-games-collection.zip",
        type: "desktop"
    },
    {
        title: "Minesweeper Game 💣",
        description: "A classic Windows Minesweeper game built in C# using Windows Forms. Features customizable difficulty levels, timer, mine counter, and the classic gameplay experience from Windows Vista era.",
        link: "https://github.com/rebzie22/minesweeper-csharp",
        github: "https://github.com/rebzie22/minesweeper-csharp",
        image: minesweeperImg,
        tags: ["C#", "Windows Forms", ".NET", "Desktop App", "Game Development"],
        type: "desktop"
    },
    {
        title: "Resume Website",
        description: "A personal resume website built with React and TailwindCSS, featuring dark mode and project showcase.",
        link: "https://github.com/rebzie22/resume-website",
        github: "https://github.com/rebzie22/resume-website",
        image: websiteProjectImg,
        tags: ["React", "TypeScript", "TailwindCSS"],
        type: "web"
    }
    // Add more projects as needed
];

const Work: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
                
                {/* Featured Project */}
                <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">🛡️</span>
                                <h2 className="text-3xl font-bold">Webhook Guardian</h2>
                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">LIVE ON PyPI</span>
                            </div>
                            <p className="text-lg mb-4 text-blue-100">
                                A production-ready Python security library for webhook validation. Features HMAC verification, 
                                replay attack prevention, rate limiting, and comprehensive security measures. Developed with 
                                professional practices including Test PyPI validation before production release.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Security", "PyPI", "HMAC", "Cryptography", "Testing"].map((tag, idx) => (
                                    <span key={idx} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://pypi.org/project/webhook-guardian/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm"
                                >
                                    Production PyPI
                                </a>
                                <a
                                    href="https://test.pypi.org/project/webhook-guardian/0.1.0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/20 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition text-sm"
                                >
                                    Test PyPI
                                </a>
                                <a
                                    href="https://github.com/rebzie22/webhook-guardian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/10 transition text-sm"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-4xl mb-2">📦</div>
                                <div className="text-sm text-blue-100">Published Package</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.filter(project => project.title !== "Webhook Guardian 🛡️").map((project, idx) => (
                        <div key={idx} className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className={
                                    `w-full h-48 object-contain bg-gray-50 dark:bg-gray-700`
                                } 
                            />
                            {/* Download button now only appears below the title */}
                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                                {project.download && (
                                    <div className="flex justify-center mb-2">
                                        <a
                                            href={project.download}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-center text-sm font-semibold shadow"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10" />
                                            </svg>
                                            Download
                                        </a>
                                    </div>
                                )}
                                <p className="mb-3 flex-1 text-gray-700 dark:text-gray-300">{project.description}</p>
                                
                                {/* Tags */}
                                {project.tags && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span key={tagIdx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex gap-2 mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center text-sm"
                                    >
                                        {project.type === 'library' ? 'View on PyPI' : 
                                         project.type === 'desktop' ? 'View on GitHub' : 'View Project'}
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-center text-sm"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;