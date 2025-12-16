# Portfolio Website Project Structure

## Project Overview
A responsive personal portfolio website built with HTML, CSS, and JavaScript featuring multiple pages, navigation, and dynamic project loading.

## Directory Structure

```
Portfolio-project/
├── index.html              # Home page with profile and bio
├── about.html              # About page with background and qualifications
├── projects.html           # Projects showcase page
├── README.md              # Project documentation
├── STRUCTURE.md           # This file - project structure guide
│
├── css/
│   ├── style.css          # Main stylesheet with all component styles
│   └── responsive.css     # Media queries for mobile/tablet responsiveness
│
├── js/
│   ├── navigation.js      # Mobile menu toggle and active link management
│   └── script.js          # Main JavaScript - project loading and effects
│
├── assets/
│   ├── images/            # Folder for images
│   │   └── profile.jpg    # Your profile photo (placeholder reference)
│   │
│   └── icons/             # Folder for social media icons
│       ├── github.svg     # GitHub icon
│       └── codecademy.svg # Codecademy icon
│
└── data/
    └── projects.json      # Project data for dynamic loading
```

## File Descriptions

### HTML Pages

**index.html** - Home Page
- Hero section with profile photo and bio
- Call-to-action buttons linking to About and Projects
- Navigation bar and footer on all pages
- Responsive profile image with styling

**about.html** - About Page
- Background section for personal information
- Qualifications and skills in a grid layout
- Two-column skill cards layout
- Educational background and certifications

**projects.html** - Projects Page
- Grid layout for project cards
- Projects dynamically loaded from `projects.json`
- Each card displays project icon, title, description, tags, and links
- Responsive grid that adapts to screen size

### CSS Files

**css/style.css** - Main Stylesheet
- CSS variables for consistent color scheme (primary, secondary, text, backgrounds)
- Navigation bar styling with sticky positioning
- Home section with gradient background
- Button styles with hover effects
- About section with skill cards
- Projects grid with hover animations
- Footer with social links
- Overall responsive foundation

**css/responsive.css** - Responsive Design
- **Tablet styles (768px and below)**: Adjusted layouts, hamburger menu activation
- **Mobile styles (480px and below)**: Optimized for small screens, single column layouts
- **Large screens (1200px+)**: Optimized container widths
- Media queries ensure proper spacing, font sizes, and layout adjustments

### JavaScript Files

**js/navigation.js** - Navigation Management
- Hamburger menu toggle for mobile
- Close menu when links are clicked
- Active link highlighting based on current page
- Responsive mobile navigation functionality

**js/script.js** - Main Functionality
- Async function to fetch and load projects from `projects.json`
- Dynamic project card creation
- Tag rendering and link generation
- Scroll effects for visual appeal
- Intersection Observer for animation triggers

### Data Files

**data/projects.json** - Project Information
- JSON array of project objects
- Each project has: title, description, icon, tags, GitHub link, demo link
- Easy to update and add new projects
- Supports dynamic rendering in projects page

### Assets Folder

**assets/images/**
- Store your profile photo and other images
- Currently references `profile.jpg` in index.html
- Add more images as needed for projects

**assets/icons/**
- Social media icons (GitHub, Codecademy)
- Should contain `.svg` files for crisp, scalable icons
- Used in footer for social links

## Key Features

✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Clean Code Structure** - Separated concerns (HTML, CSS, JS)
✅ **Navigation** - Sticky navbar with mobile hamburger menu
✅ **Dynamic Content** - Projects loaded from JSON file
✅ **Social Links** - GitHub and Codecademy profile links
✅ **Accessibility** - Semantic HTML, alt text for images
✅ **Visual Effects** - Hover animations, scroll effects
✅ **Mobile-First** - Built with mobile optimization in mind

## Setup Instructions

1. **Add Your Profile Photo**
   - Place your profile image in `assets/images/`
   - Name it `profile.jpg` or update the reference in `index.html`

2. **Add Social Icons**
   - Add `github.svg` and `codecademy.svg` to `assets/icons/`
   - Or update the icon sources in the HTML

3. **Update Personal Information**
   - Update GitHub and Codecademy URLs in HTML files
   - Add your actual bio in `index.html`
   - Fill in background and skills in `about.html`

4. **Add Your Projects**
   - Edit `data/projects.json`
   - Add your project details
   - Update GitHub and demo links

5. **Customize Colors**
   - Edit CSS variables in `css/style.css`
   - Modify `--primary-color`, `--secondary-color`, etc.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

- Add SVG icons for GitHub and Codecademy
- Upload profile photo
- Populate project information
- Customize colors and fonts
- Deploy to GitHub Pages, Netlify, or Vercel
