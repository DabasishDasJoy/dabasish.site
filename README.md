# Portfolio Website

A modern, responsive portfolio website for a backend software engineer specializing in NestJS, Node.js, and Golang.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Smooth scrolling and animations
- 🎯 Interactive navigation
- 💼 Skills showcase
- 📂 Projects portfolio
- 📧 Contact form

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons

## Getting Started

### Local Development

There are several ways to run this portfolio locally:

#### Option 1: Simple Browser (Quickest)
1. Double-click `index.html` to open it in your default browser
   - **Note**: Some features may not work perfectly due to CORS restrictions with Font Awesome CDN

#### Option 2: Python HTTP Server (Recommended)
1. Open a terminal in the project directory
2. Run one of these commands:
```bash
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Or specify port
python -m http.server 3000
```
3. Open your browser and navigate to `http://localhost:8000`

#### Option 3: Node.js (Using npx - No Installation Needed)
```bash
# Install and run http-server in one command
npx http-server -p 8000

# Or with specific options
npx http-server -p 8000 -o
```

#### Option 4: Node.js (With Global Installation)
```bash
# Install http-server globally (one time)
npm install -g http-server

# Then run it
http-server -p 8000
```

#### Option 5: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 6: PHP (if installed)
```bash
php -S localhost:8000
```

#### Option 7: Using Node.js http-server package.json (Added below)
```bash
npm install
npm start
```

**Note**: Using a local server is recommended to avoid CORS issues with external resources.

## Deployment to GitHub Pages

1. Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be available at `https://<username>.github.io/<repository-name>`

## Customization

### Personal Information

Update the following in `index.html`:

1. **Contact Information:**
   - Email addresses
   - GitHub username
   - LinkedIn profile URL

2. **Projects Section:**
   - Update project titles, descriptions, and links
   - Modify technology tags

3. **Skills Section:**
   - Adjust skill levels and progress bars
   - Add or remove skills as needed

### Styling

- Colors can be customized in the `:root` section of `styles.css`
- Fonts and spacing can be adjusted throughout the CSS file

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

---

Built with ❤️ for showcasing backend development skills

