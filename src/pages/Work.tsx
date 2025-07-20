import React from 'react';
import { Link } from 'react-router-dom';
import websiteProjectImg from '../assets/websiteproject.png'; // adjust path if needed

const projects = [
    {
        title: "Resume Website",
        description: "A personal resume website built with React and TailwindCSS, featuring dark mode and project showcase.",
        link: "https://github.com/yourusername/resume-website",
        image: websiteProjectImg
    },
    {
        title: "Project One",
        description: "A brief description of your awesome project goes here.",
        link: "https://github.com/yourusername/project-one",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Project Two",
        description: "Another cool project with a short summary.",
        link: "https://github.com/yourusername/project-two",
        image: "https://via.placeholder.com/150"
    },
    // Add more projects as needed
];

const Work: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">My Awesome Work</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col">
                            <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                                <p className="mb-4 flex-1">{project.description}</p>
                                <Link
                                    to="/"
                                    className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;