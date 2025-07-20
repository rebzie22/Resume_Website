# Resume Website

This is a React-based website for displaying resume information and showcasing work. It utilizes Tailwind CSS for styling and features an interactive chatbot assistant. The site is structured to provide a clean, responsive user experience with modern web development practices.

## Features

- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Dark Mode Toggle**: Switch between light and dark themes
- 🤖 **Interactive Chatbot**: AI-powered assistant to answer questions about background and experience
- ⚡ **Fast Performance**: Built with modern React and TypeScript
- 🎨 **Modern UI**: Clean design with Tailwind CSS

## Project Structure

```
resume-website
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── assets              # Static assets (images, fonts, etc.)
│   ├── components
│   │   ├── Navbar.tsx      # Navigation bar component
│   │   ├── DarkModeToggle.tsx # Dark mode functionality
│   │   ├── Chatbot.tsx     # Interactive chatbot component
│   │   └── ChatWidget.tsx  # Floating chat widget
│   ├── pages
│   │   ├── Home.tsx        # Homepage component
│   │   ├── Resume.tsx      # Resume information component
│   │   ├── Work.tsx        # Work showcase component
│   │   ├── Chat.tsx        # Full-page chat interface
│   │   └── Contact.tsx     # Contact page with form
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles
│       └── tailwind.css     # Tailwind CSS styles
├── package.json             # npm configuration file
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd resume-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- The website consists of five main pages: Home, Resume, Work, Chat, and Contact
- Use the navigation bar to switch between different sections
- **Interactive Chat**: Click the floating chat button or visit the Chat page to interact with the AI assistant
- **Contact Form**: Use the Contact page to send direct messages and find contact information
- **Dark Mode**: Toggle between light and dark themes using the mode switch in the navigation
- Customize content in the `src/pages` directory to reflect your own resume and work experience

## Chatbot Features

The integrated chatbot assistant can help visitors learn about:
- Technical skills and technologies
- Work experience and background  
- Projects and portfolio examples
- Education and certifications
- Contact information
- Website development details

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Custom AI Chatbot (no external API required)

## License

This project is licensed under the MIT License.