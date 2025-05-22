# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio showcases my work as a Full Stack Developer and UI/UX Designer.

## Features

- 🎨 Modern, dark-themed design with smooth gradients and high contrast
- 📱 Fully responsive layout for all devices
- ✨ Smooth animations and transitions using Framer Motion
- 🌙 Dark mode support
- 🎯 Interactive UI elements
- 📊 Project showcase with detailed information
- 💼 Work experience timeline
- 📬 Contact section
- 🔍 SEO optimized

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Type Animation](https://github.com/wrongakram/react-type-animation) - Typing animation
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) - Scroll animations

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Hero.tsx       # Hero section
│   ├── Navigation.tsx # Navigation bar
│   ├── ProjectCard.tsx # Project card component
│   ├── Section.tsx    # Section wrapper
│   └── ...           # Other components
└── public/           # Static assets
    └── images/      # Image files
```

## Customization

1. Update personal information in `src/app/page.tsx`
2. Modify theme colors in `tailwind.config.ts`
3. Add your projects in the projects array
4. Update work experience in the workExperience array
5. Replace images in the `public/images` directory


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
