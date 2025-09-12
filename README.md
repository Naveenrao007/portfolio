# Naveen Raw Yadav - Portfolio Website

A modern, responsive portfolio website built with React showcasing my skills as a MERN Stack Developer.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) *(Update with your actual deployment URL)*

## 📋 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic animations
- **Performance Optimized**: Fast loading times and smooth user experience
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **CSS3** - Modern CSS with Flexbox and Grid
- **Responsive Design** - Mobile-first approach

### Development Tools
- **Create React App** - Development environment
- **Git** - Version control
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1200px
- **Large Desktop**: 1201px+

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme with gradient accents
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradient Text**: Eye-catching gradient text effects
- **Smooth Animations**: Framer Motion powered animations
- **Interactive Hover States**: Engaging hover effects throughout

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Experience.js & Experience.css
│   ├── Projects.js & Projects.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
└── public/
    ├── index.html
    └── manifest.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 Customization

### Personal Information
Update the following files with your personal information:

- `src/components/Hero.js` - Name, title, and description
- `src/components/About.js` - About section content
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Footer information

### Projects
Add your projects in `src/components/Projects.js`:

```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    features: ["Feature 1", "Feature 2"],
    status: "Completed",
    category: "Full Stack",
    liveUrl: "https://your-project-url.com"
  }
];
```

### Skills
Update your skills in `src/components/Skills.js`:

```javascript
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 90 }
    ]
  }
];
```

### Experience
Add your work experience in `src/components/Experience.js`:

```javascript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "Location",
    period: "Start Date - End Date",
    description: "Job description",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
    technologies: ["React", "Node.js"]
  }
];
```

## 🎨 Styling

The portfolio uses a modern dark theme with the following color palette:

- **Primary**: #4f46e5 (Indigo)
- **Secondary**: #06b6d4 (Cyan)
- **Background**: #0a0a0a (Dark)
- **Text**: #ffffff (White)
- **Muted Text**: #a1a1aa (Gray)

### CSS Architecture

- **Component-based CSS**: Each component has its own CSS file
- **CSS Variables**: Consistent spacing and colors
- **Flexbox & Grid**: Modern layout techniques
- **Media Queries**: Responsive design implementation

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices with:

- **Touch-friendly buttons**: Minimum 44px touch targets
- **Readable text**: Proper font sizes and line heights
- **Optimized images**: Responsive images with proper sizing
- **Fast loading**: Optimized assets and lazy loading
- **Smooth scrolling**: Native smooth scrolling behavior

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain (optional)

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📊 Performance

The portfolio is optimized for performance with:

- **Code Splitting**: Automatic code splitting with React
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Compressed and properly sized images
- **Minified CSS/JS**: Production builds are minified
- **Caching**: Proper cache headers for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Naveen Raw Yadav**
- Email: yadavraw123@gmail.com
- Phone: +91 8109949129
- Location: Indore, MP, India
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Typography

---

⭐ **Star this repository if you found it helpful!**
