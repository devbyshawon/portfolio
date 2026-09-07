# Portfolio Website

Personal developer portfolio built with modern web technologies.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode)
- **Deployment:** Vercel

## Project Structure

portfolio/
├── app/
│ ├── components/ # React components
│ │ ├── common/ # Navbar, Footer, Layout
│ │ ├── sections/ # Page sections
│ │ └── ui/ # Reusable UI components
│ ├── lib/
│ │ └── constants.ts # Project data, skills, etc
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home page
│ └── globals.css # Global styles
├── public/ # Static assets (images, resume)
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json # TypeScript configuration

## Design System

### Colors
- **Primary:** #0F172A (Deep Blue)
- **Secondary:** #06B6D4 (Cyan)
- **Accent:** #EA580C (Orange)
- **Text:** #F1F5F9 (Light), #CBD5E1 (Gray)

### Typography
- **Headlines:** Space Grotesk (Bold)
- **Body:** Inter (Regular)

See `app/globals.css` for full configuration.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository (if cloned from GitHub)
git clone https://github.com/USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Content

All content is managed in `app/lib/constants.ts`:
- Projects data
- Skills by category
- Personal information
- Navigation links

Update this file to modify portfolio content without touching components.

## Deployment

### Vercel (Automatic)

Connected to GitHub for automatic deployments:
1. Push changes to `main` branch
2. Vercel automatically builds and deploys
3. Live at: `https://portfolio-username.vercel.app`

### Manual Deployment

```bash
npm run build
npm start
```

## Responsive Design

- **Desktop:** Full multi-column layout
- **Tablet:** Optimized for medium screens
- **Mobile:** Single column, hamburger menu

## Next Steps

- Add project screenshots to `/public/projects/`
- Update content in `lib/constants.ts`
- Build remaining sections (About, Projects, Skills, Contact)
- Add dark/light mode toggle
- Test on multiple devices
- Launch website

## Contact

- **Email:** shawon12hossain@gmail.com
- **GitHub:** github.com/devbyshawon
- **LinkedIn:** linkedin.com/in/devbyshawon

## License

MIT License - feel free to use this as a template!