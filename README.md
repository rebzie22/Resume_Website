# Resume Website

This is a React-based website for displaying resume information and showcasing work. It utilizes Tailwind CSS for styling and is structured to provide a clean and responsive user experience.

## Project Structure

```
resume-website
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── assets              # Static assets (images, fonts, etc.)
│   ├── components
│   │   └── Navbar.tsx      # Navigation bar component
│   ├── pages
│   │   ├── Home.tsx        # Homepage component
│   │   ├── Resume.tsx      # Resume information component
│   │   └── Work.tsx        # Work showcase component
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

- The website consists of three main pages: Home, Resume, and Work.
- Use the navigation bar to switch between the different sections of the website.
- Customize the content in the `src/pages` directory to reflect your own resume and work experience.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router

## License

This project is licensed under the MIT License.