# Hover States & Animations
## HOVER STATES
**BUTTONS:**
- Hover: Background slightly darker, scale up 1.05
- Active: Background even darker
- Disabled: Opacity 0.5, cursor not-allowed

**LINKS:**
- Hover: Color changes to #06B6D4, underline appears
- Active: Color stays #06B6D4, underline stays

**CARDS (Projects, Skills):**
- Hover: Border becomes #06B6D4, shadow appears
- Shadow: 0 8px 24px rgba(6, 182, 212, 0.2)

**NAVIGATION:**
- Hover: Link color → #06B6D4
- Active: Underline appears in #06B6D4

**FORM INPUTS:**
- Focus: Border becomes #06B6D4, shadow subtle
- Filled: Text color #F1F5F9
- Error: Border becomes #EF4444

**SCROLL INDICATOR:**
- Animation: Bounce up-down continuously
- Duration: 2 seconds per cycle
- Opacity: Fades in/out

## ANIMATIONS
ANIMATIONS:

Page Load
Hero: Fade in + slide up (0.6s)
Other sections: Fade in on scroll (0.4s)
Stagger: 0.1s between elements

Button Hover
Background color: 0.2s ease
Scale: 0.15s ease
Shadow: 0.2s ease

Card Hover (Projects, Skills)
Border color: 0.2s ease
Shadow: 0.3s ease
Scale: 0.2s ease (slight, 1.02)

Link Hover
Color: 0.15s ease
Underline: Slide in 0.2s ease

Scroll Indicator
Bounce: 2s infinite ease-in-out
Amplitude: 8px

Section reveals
Fade in when scrolled into view
Duration: 0.6s
Delay: Staggered per element

# MOBILE ANNOTATIONS
1. Hamburger Menu
   Comment: "Click opens slide-out menu from left. 
   Width: 250px, slides in 0.3s ease. Shows links: 
   About, Projects, Skills, Contact. Close button (X) 
   at top. Click outside closes menu."

2. Full-Width Buttons
   Comment: "All buttons full width on mobile. 
   Touch target: 44-48px height. Padding: 12px 
   left/right."

3. Project Cards
   Comment: "On mobile, cards are full width. 
   Thumbnail + text side-by-side (not stacked). 
   Thumbnail: 80x80px on left, text on right."

4. Stack Note
   Comment: "All multi-column layouts become 
   single column on mobile. Padding reduced 
   to 16px (vs 40px desktop)."
   
# MOBILE MOCKUP SPECIFICATIONS

## Overview
Mobile mockup for portfolio website (375x812px)

## Key Mobile Changes from Desktop

### Layout
- Desktop: Multi-column → Mobile: Single column
- Desktop: 40px padding → Mobile: 16px padding
- Desktop: Gaps 20px → Mobile: Gaps 12px

### Typography
- H1: 56px → 32px (heading smaller on mobile)
- Body: 16px → 14-15px (slightly smaller)
- Line heights: Same ratios (1.2, 1.6, etc)

### Components
- Navbar: Full nav → Hamburger menu only
- Buttons: Side-by-side → Stacked vertically
- Cards: Grid 2-3 cols → Single column full width
- Project cards: Vertical → Horizontal (compact)
- Form: Same but full width

### Heights
- Hero: 600px → 450px (compact)
- Projects: 1000px → 800px (due to stacking)
- Skills: 500px → 600px (more cards, stacked)
- Total page: Desktop 3200px → Mobile 3110px

### Touch Targets
- Minimum: 48px x 48px (buttons, icons)
- Inputs: 44px height (touch-friendly)
- Gaps: 12-16px between interactive elements

## Mobile Sections Details

### Hero (450px)
- Headline: 32px (down from 56px)
- Subheadline: 15px (down from 18px)
- Photo: 100px (down from 150px)
- Buttons: FULL WIDTH (stacked)
- Social icons: Same 40px, centered

### About (400px)
- Title: 32px
- Bio: Full width, 14px
- Cards: Stacked 1 column, FULL WIDTH (335px)
- Card height: 180px

### Projects (800px)
- Cards: FULL WIDTH, stacked
- Card layout: Thumbnail (80x80) + Text (horizontal)
- Card height: 120px (compact!)
- 6 cards stacked = ~820px total with gaps

### Skills (600px)
- Cards: FULL WIDTH, stacked (1 column, not 2x2)
- Skills inside: 2 sub-columns (compact fit)
- Card height: 120px
- 4 cards stacked

### Contact (700px)
- Form: FULL WIDTH
- Inputs: FULL WIDTH (335px)
- Button: FULL WIDTH
- Input height: 44px (touch-friendly)

## Navigation (Mobile)
- Hamburger menu (☰) reveals slide-out menu
- Menu width: 250px
- Menu items: About, Projects, Skills, Contact
- Slide in/out: 0.3s ease

## Testing Checklist
- [ ] All text readable on mobile screen
- [ ] No horizontal scrolling
- [ ] Touch targets minimum 48px
- [ ] Buttons full width, spaced
- [ ] Form inputs easy to tap
- [ ] Hamburger menu works
- [ ] All colors have good contrast
- [ ] Images/icons visible
- [ ] Footer sticks or flows naturally