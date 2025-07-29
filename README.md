# Pranjal Yadav - Portfolio Website

A modular, organized portfolio website showcasing web development skills, projects, and achievements.

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file with modular section loading
├── index-original-backup.html # Backup of original single-file version
├── css/                       # Organized stylesheets
│   ├── main.css              # Core styles, typography, color scheme
│   ├── components.css        # Reusable components (buttons, cards, skill tags)
│   ├── sections.css          # Section-specific styling
│   └── animations.css        # Animation and transition effects
├── js/                       # Modular JavaScript files
│   ├── main.js              # Core functionality and initialization
│   ├── animations.js        # Fade-in effects, typewriter, glassmorphism
│   └── navigation.js        # Smooth scrolling and navigation handling
└── sections/                 # Individual HTML section files
    ├── about.html           # About Me section
    ├── skills.html          # Technical Expertise section
    ├── certifications.html  # Certifications showcase
    ├── hackathon.html       # Hackathon Experience section
    ├── projects.html        # Portfolio projects grid
    └── contact.html         # Contact form and information
```

## 🚀 Features

- **Modular Architecture**: Each section is in a separate file for easy maintenance
- **Organized CSS**: Styles are categorized by purpose (main, components, sections, animations)
- **Modular JavaScript**: Functionality is split into logical modules
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Glassmorphism Effects**: Modern glass-like visual effects
- **Smooth Animations**: Fade-in effects, hover animations, and transitions
- **Professional Styling**: Clean, modern design with consistent color scheme

## 🎨 Design System

### Colors
- **Primary**: #0a192f (Deep navy blue)
- **Secondary**: #14b8a6 (Teal)
- **Accent**: #38bdf8 (Sky blue)
- **Background**: #f8fafc (Light background)

### Typography
- **Headings**: Pacifico (cursive)
- **Body**: Inter, Poppins (sans-serif)

## 📱 Sections

1. **Header**: Introduction with navigation buttons
2. **About**: Personal information and skills overview
3. **Certifications**: Professional certifications and achievements
4. **Hackathon Experience**: Recent hackathon participation and success
5. **Projects**: Portfolio of web development projects
6. **Skills**: Technical expertise breakdown
7. **Contact**: Contact form and social links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Typography (Pacifico, Inter, Poppins)
- **Remix Icons**: Icon library

## 🔧 Development

### Adding New Sections
1. Create a new HTML file in the `sections/` directory
2. Add section-specific styles to `css/sections.css`
3. Update `index.html` to load the new section
4. Add any required JavaScript functionality

### Modifying Existing Sections
- Edit the corresponding file in the `sections/` directory
- Changes will be automatically reflected when the page loads

### Styling Updates
- **Global styles**: Edit `css/main.css`
- **Component styles**: Edit `css/components.css`
- **Section-specific styles**: Edit `css/sections.css`
- **Animations**: Edit `css/animations.css`

## 📦 Deployment

The website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Any web server

Simply upload all files maintaining the directory structure.

## 🎯 Benefits of Modular Structure

1. **Easy Maintenance**: Modify individual sections without affecting others
2. **Better Organization**: Clear separation of concerns
3. **Scalability**: Easy to add new sections or features
4. **Collaboration**: Multiple developers can work on different sections
5. **Debugging**: Easier to locate and fix issues
6. **Performance**: Organized code loads efficiently

## 📄 License

© 2023 Pranjal Yadav. All rights reserved.
