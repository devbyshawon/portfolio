# MOCKUP DOCUMENTATION

## Overview
High-fidelity mockups for portfolio website with:
- All colors from design system applied
- Typography hierarchy implemented
- Interactive elements documented
- Desktop (1920x1080) & Mobile (375x812) versions

## Figma File
Link: https://www.figma.com/design/LuP6FWadY5GKQZBvhgT7hq/Portfolio-Design-System?m=auto&t=JwuLgNGXQbiylu9a-6

## Color Implementation

### Background Colors
- Primary background: #0F172A (Deep blue)
- Card backgrounds: #1E293B (Subtle blue)
- Form inputs: #0F172A
- Borders: #334155

### Text Colors
- Headings: #F1F5F9 (Light)
- Body text: #CBD5E1 (Light gray)
- Secondary: #94A3B8 (Muted gray)

### Accent Colors
- Primary action: #EA580C (Orange)
- Secondary action: #06B6D4 (Cyan)
- Success: #10B981 (Green)
- Error: #EF4444 (Red)

## Typography Implementation

### Headlines (Space Grotesk, Bold)
- H1 (Hero): 56px, line-height 1.2
- H2 (Sections): 42px, line-height 1.2
- H3 (Subsections): 28px, line-height 1.3
- H4 (Cards): 20px, line-height 1.4

### Body Text (Inter)
- Large (18px): line-height 1.6
- Regular (16px): line-height 1.6
- Small (14px): line-height 1.5
- Caption (12px): line-height 1.4

### Font Weights
- Headlines: Bold (700)
- Subheadings: Semi-Bold (600)
- Body: Regular (400)
- Emphasis: Medium (500)

## Component Specifications

### Buttons

**Primary Button (Orange/CTA)**
- Background: #EA580C
- Text: #FFFFFF, Inter Semi-Bold 14px
- Padding: 12px 24px
- Height: 48px
- Border radius: 8px
- Hover: Background #C4430A, scale 1.05
- Transition: 0.2s ease

**Secondary Button (Cyan/Outline)**
- Background: Transparent
- Border: 2px #06B6D4
- Text: #06B6D4, Inter Semi-Bold 14px
- Padding: 12px 24px
- Height: 48px
- Border radius: 8px
- Hover: Background #06B6D4, text white
- Transition: 0.2s ease

### Cards

**Project/Skill Cards**
- Background: #1E293B
- Border: 1px #334155
- Border radius: 12px
- Padding: 16px
- Hover: Border #06B6D4, shadow 0 8px 24px rgba(6,182,212,0.2)
- Transition: 0.2s ease

### Form Elements

**Input Fields**
- Background: #0F172A
- Border: 1px #334155
- Border radius: 8px
- Padding: 12px
- Font: Inter Regular 16px
- Color: #F1F5F9
- Placeholder: #94A3B8
- Focus: Border #06B6D4, outline 2px #06B6D4 with 4px offset
- Transition: 0.2s ease

**Textarea**
- Same as inputs
- Min-height: 120px
- Resize: Vertical

## Animations & Interactions

### Page Load
```css
Hero section: fade-in + slide-up (0.6s, ease-out)
Other sections: fade-in on scroll (0.4s)
Stagger: 0.1s between child elements
```

### Button Interactions
```css
Hover: 
  - Background: 0.2s ease
  - Scale: 1.05
  - Transition: 0.15s ease-out

Active:
  - Scale: 0.98
  - Transition: 0.1s ease
```

### Card Hover
```css
Border color: 0.2s ease
Box shadow: 0.3s ease
Scale: 1.02 (slight), 0.2s ease
```

### Scroll Indicator
```css
Animation: bounce infinite
Duration: 2s
Direction: Up and down
Easing: ease-in-out
Amplitude: 8px
Opacity: Fade in/out, 1s
```

### Link Hover
```css
Color: 0.15s ease
Text decoration: underline
Transition: 0.2s ease
```

## Responsive Breakpoints

### Desktop (1920px and above)
- Multi-column layouts
- Full-width navbar
- Project cards: 2 columns
- Skills: 2x2 grid

### Tablet (768px - 1024px)
- Some layout adjustments
- Narrower containers
- Project cards: May fit 2 cols or 1
- Skills: 2 columns (2x2 stacked)

### Mobile (375px)
- Single column throughout
- Hamburger menu
- Full-width cards
- Skills: 1 column
- Buttons: Full width
- Padding: 16px (reduced from 40px)

## Mobile Specific

### Hamburger Menu
- Icon: 3 horizontal lines (24x24px)
- Color: #F1F5F9
- Hover: Color #06B6D4
- Click: Reveals slide-out menu
- Menu items: Same as navbar
- Slide duration: 0.3s ease

### Touch Targets
- Minimum size: 48px x 48px
- Minimum padding: 12px
- All buttons: Full-width or large
- All links: Adequate spacing

### Mobile Typography
- H1: 32px (vs 56px desktop)
- H2: 28px (vs 42px)
- Body: 14px (vs 16px)
- Line heights: Same ratios

## Developer Handoff Notes

### Colors
- Use CSS variables for colors
- Export color palette to Tailwind config
- Test contrast ratios (WCAG AA minimum)

### Typography
- Import fonts via Google Fonts
- Use font-size scale (1:1.3 ratio)
- Line heights: 1.2 (headlines), 1.6 (body)

### Animations
- Use CSS transitions + transforms for smoothness
- Prefer GPU-accelerated properties (transform, opacity)
- Add `prefers-reduced-motion` fallback
- Specify exact timing + easing

### Images
- Provide actual screenshots/photos
- Optimize image sizes before export
- Use Next.js Image component
- Provide alt text for accessibility

### Spacing
- Use 8px baseline rhythm
- Margin/padding: multiples of 8px
- Gaps: 12px (mobile), 20px (tablet), 40px (desktop)

### Components
- Create reusable Button component
- Create reusable Card component
- Create Form component with validation
- Use Next.js Link for internal navigation

## Testing Checklist

Before development:
- [ ] All colors verified visually
- [ ] Typography hierarchy clear
- [ ] Interactive elements obvious
- [ ] Mobile layout tested
- [ ] Accessibility contrast verified
- [ ] Hover states documented
- [ ] Animations specified
- [ ] Images/screenshots finalized
- [ ] Form validation rules clear
- [ ] External links noted

## Files
- Desktop mockup: mockup-desktop.png
- Mobile mockup: mockup-mobile.png
- Figma link: https://www.figma.com/design/LuP6FWadY5GKQZBvhgT7hq/Portfolio-Design-System?m=auto&t=JwuLgNGXQbiylu9a-6
