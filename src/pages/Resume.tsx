import React from 'react';
import profileImg from '../assets/profile.png'; // Change filename as needed

const Resume: React.FC = () => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <img
                    src={profileImg}
                    alt="Jordan Guck"
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500 dark:border-blue-400"
                />
                <h1 className="text-3xl font-bold mb-2">Jordan Guck</h1>
                <p className="mb-4 text-lg">Software Developer</p>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <ul>
                        <li>Email: jordanguck22@gmail.com</li>
                        <li>Location: Clear Lake, MN</li>
                        <li>LinkedIn: linkedin.com/in/guck1337</li>
                        <li>GitHub: <a href="https://github.com/rebzie22" target="_blank" rel="noopener noreferrer">github.com/rebzie22</a></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>C# / .NET</li>
                        <li>JavaScript / TypeScript</li>
                        <li>Python</li>
                        <li>Playwright</li>
                        <li>React</li>
                        <li>SQL Server</li>
                        <li>SpecFlow</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Experience</h2>
                    <div className="space-y-6">
                        {/* Example Job 1 */}
                        <div>
                            <h3 className="font-bold">Software Consultant - 360 Degrees LLC</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">2024 – 2025</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Reviewed existing test workflows to identify and resolve inefficiencies.</li>
                                <li>Developed a strategic automation roadmap to align with project priorities. </li>
                                <li>Designed and implemented a web automation framework, 
                                    boosting test coverage and accelerating QA cycles. </li>
                            </ul>
                        </div>
                        {/* Example Job 2 */}
                        <div>
                            <h3 className="font-bold">Software Development Engineer - Gearfire</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">2020 – 2023</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Developed and enhanced internal applications using C# as part of an Agile team.</li>
                                <li>Automated over 70% of test cases, reducing QA cycles by more than 50%.</li>
                                <li>Participated in sprint planning, code reviews, and documentation processes. </li>
                                <li>Utilized Azure DevOps and Git for version control and CI/CD practices.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">Software Development Engineer in Test - Gearfire</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">2017 – 2020</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Developed automated test scripts using SpecFlow and Coded UI.</li>
                                <li>Performed manual and automated API testing with SoapUI. </li>
                                <li>Maintained test data and environments, ensuring pre-release quality. </li>
                                <li>Reported defects and managed work items via Team Foundation Server.</li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold">QA Engineer/Analyst - AcuSport</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">2015 – 2017</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Created and maintained automated test cases in C# using SpecFlow.</li>
                                <li>Conducted stress testing and participated in all Agile ceremonies.</li>
                                <li>Provided Tier 3 customer support and database troubleshooting using SQL.</li>
                            </ul>
                        </div>
                        {/* Add more jobs as needed */}
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Notable Projects</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold">Webhook Guardian 🛡️</h3>
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">Published on PyPI</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Python Security Library</p>
                            <p className="text-sm mb-2">
                                A comprehensive security-focused Python library for webhook validation featuring HMAC signature verification, 
                                replay attack prevention, rate limiting, and IP whitelisting. Developed using professional practices including 
                                Test PyPI validation before production release. Published as an open-source package on PyPI.
                            </p>
                            <div className="flex gap-2 text-xs">
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Python</span>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Security</span>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Cryptography</span>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">PyPI</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Education</h2>
                    <div>
                        <h3 className="font-bold">Associates Degree in Computer Science - Saint Cloud Technical and Community College</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">2013</p>
                    </div>
                    {/* Add more education as needed */}
                </div>
            </div>
        </div>
    );
};

export default Resume;