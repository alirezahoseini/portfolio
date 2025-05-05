![Portfolio Poster](https://s6.uupload.ir/files/hero_d5dq.png)

# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring internationalization, animations, and a clean design.

## Features

- 🌐 **Multilingual Support**: Full support for English and Persian languages
- 🎨 **Modern UI/UX**: Built with Tailwind CSS and Shadcn UI components
- ✨ **Animations**: Smooth animations using Framer Motion
- 📱 **Fully Responsive**: Optimized for all device sizes
- 📧 **Contact Form**: Integrated email functionality
- 🌙 **Dark/Light Mode**: Theme switching capability
- ⚡ **Fast Loading**: Optimized performance with Next.js 14
- 🔍 **SEO Friendly**: Built with SEO best practices

## Tech Stack

- Next.js 15
- React.js 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- React Query
- Axios
- Eslint
- React Hook forms & zod
- Next-intl
- SSR & SSG


## Project Structure

```
├── src/
│   ├── app/               # Next.js app router and pages
│   ├── components/        # React components
│   │   ├── HOC/          # Higher Order Components
│   │   ├── modules/      # Reusable module components
│   │   ├── templates/    # Page templates
│   │   └── ui/          # UI components
│   ├── i18n/            # Internationalization setup
│   └── lib/             # Utilities and services
├── public/              # Static assets
│   ├── experiences/     # Experience-related images
│   ├── logos/          # Technology logos
│   └── projects/       # Project screenshots
└── messages/           # Translation files
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api/
RESEND_API_KEY=your_resend.com_api_key
```

## Building for Production

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the MIT License.
