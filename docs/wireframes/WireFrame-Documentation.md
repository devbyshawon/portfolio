# WIREFRAME DOCUMENTATION

## Overview
Low-fidelity wireframes for portfolio website showing:
- Desktop layout (1920x3310)
- Mobile layout (375x5210)
- All 7 sections (Navbar, Hero, About, Projects, Skills, Contact, Footer)

## Figma File
Link: https://www.figma.com/design/M0bpM4hl0FdzAw5XvIiyT4/Wireframes--Low-Fidelity-?m=auto&t=Qac0PMShbiPyOVwi-6

## Desktop Wireframe
![Desktop Wireframe](./Desktop%20Wireframe.png)

Layout from top to bottom:
1. **Navbar (60px)** - Navigation links, theme toggle
2. **Hero (600px)** - Headline, subheadline, CTAs, social icons
3. **About (400px)** - Bio, 3 highlight cards
4. **Projects (1000px)** - 6 project cards (2 cols x 3 rows)
5. **Skills (500px)** - 4 skill categories (2x2 grid)
6. **Contact (600px)** - Form + social links
7. **Footer (150px)** - Copyright, quick links, credits

## Mobile Wireframe
![Mobile Wireframe](./Mobile%20Wireframe.png)

Layout differences:
- Hamburger menu (navbar collapses)
- Single column layout (full width)
- Cards stacked vertically
- Larger touch targets (buttons 48px+)
- Simplified footer

## Key Design Decisions

### Hero Section
- Large, bold headline to grab attention
- 2 CTAs: "Explore Work" (primary), "Download Resume" (secondary)
- Social icons for quick profile access
- Animated gradient background (planned)

### Projects Section
- 6 project cards in 3-column grid (desktop)
- Each card shows: thumbnail, title, description, tags, links
- Last 2 cards marked "Currently Building" with badges
- Hover effect planned (highlights card)

### Contact Section
- Multiple contact methods (email, social, form)
- Form has validation & success message
- Clear call-to-action: "Send me a message"

### Mobile Adaptations
- Hamburger menu: 3-line icon collapses navbar
- Single-column layout for all sections
- Full-width cards on mobile
- Larger buttons (48px height minimum)

## Next Steps
1. Wireframes complete (this doc)
2. → Create high-fidelity mockups (add colors, fonts, images)
3. → Developer handoff (code based on this IA + mockups)

## Notes for Developer
- All sections are responsive (tested on mobile)
- Navbar: Fixed/sticky or regular? (Decide in mockups)
- Contact form: Use Formspree or Resend
- External links: Open in new tab
- Smooth scroll: Implement with Next.js