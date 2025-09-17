# Modern Portfolio Website

A stunning, modern personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and responsive design.

## ✨ Features

- **🌙 Dark/Light Mode**: Smooth theme switching with system preference detection
- **🎬 Video Project Cards**: Auto-playing looped videos with hover effects
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎭 Smooth Animations**: Beautiful Framer Motion animations throughout
- **⚡ Performance Optimized**: Built with Next.js 15 and modern best practices
- **🎨 Modern Design**: Clean, minimalistic design with elegant typography
- **📧 Contact Form**: Integrated contact form with email functionality
- **🔧 TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── Navigation.tsx      # Sticky navigation with smooth scroll
│   ├── HeroSection.tsx     # Hero section with CTA buttons
│   ├── AboutSection.tsx    # About me with skills grid
│   ├── ProjectsSection.tsx # Projects with video cards
│   └── ContactSection.tsx  # Contact form and info
├── contexts/
│   └── ThemeContext.tsx    # Theme context for dark/light mode
└── types/
    └── portfolio.ts        # TypeScript type definitions
```

## 🎨 Customization

### Personal Information

Update the following components with your information:

1. **Hero Section** (`src/components/HeroSection.tsx`):

   - Name and title
   - Description
   - Social media links

2. **About Section** (`src/components/AboutSection.tsx`):

   - Biography
   - Skills and technologies
   - Experience stats

3. **Projects Section** (`src/components/ProjectsSection.tsx`):

   - Replace sample projects with your own
   - Update video URLs, descriptions, and links

4. **Contact Section** (`src/components/ContactSection.tsx`):
   - Update contact information
   - Configure email integration

### Styling

- **Colors**: Modify the gradient colors in Tailwind classes
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Animations**: Adjust Framer Motion animations in each component

## 📧 Contact Form Setup

The contact form is currently set up to open the user's email client. For a production setup, consider integrating with:

- **EmailJS** for client-side email sending
- **Formspree** for form handling
- **Netlify Forms** if deploying to Netlify
- **Custom API route** with a service like SendGrid or Nodemailer

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Drag and drop your `out` folder after running `npm run build`
- **GitHub Pages**: Use the `gh-pages` package for static deployment

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

Built with ❤️ using Next.js and Tailwind CSS
