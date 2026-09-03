# IA Diagram Flowchart
┌─────────────────────────────────────────────────────────────┐
│                       PORTFOLIO HOMEPAGE                    │
│                    (Single Page, Scrolling)                 │
└─────────────────────────────────────────────────────────────┘
                            │
                ┌───────────┼───────────┐
                ▼           ▼           ▼
            ┌────────┐  ┌────────┐  ┌────────┐
            │ NAVBAR │  │  HERO  │  │ FOOTER │
            └────────┘  └────────┘  └────────┘
                            │
                            ▼
                       ┌──────────┐
                       │  ABOUT   │
                       └──────────┘
                            │
                            ▼
                      ┌───────────────┐
                      │ FEATURED      │
                      │ PROJECTS      │
                      └───────────────┘
                            │
           ┌────────────────┼────────────────┐
           ▼                ▼                ▼
        ┌────────┐      ┌────────┐      ┌─────────┐
        │ Project│      │ Project│      │ Coming  │
        │  Link  │      │ Link   │      │ Soon    │
        │(GitHub)│      │(Demo)  │      │(GitHub) │
        └────────┘      └────────┘      └─────────┘
                            │
                            ▼
                       ┌──────────┐
                       │ SKILLS   │
                       └──────────┘
                            │
                            ▼
                      ┌────────────┐
                      │ CONTACT    │
                      │ (Form +    │
                      │  Links)    │
                      └────────────┘

---

# Each section detail represention:
┌─────────────┐
│ NAVBAR      │ ← Always visible
└─────────────┘
┌─────────────────────────────┐
│ HERO                        │ ← Large, attention-grabbing
│ • Headline, CTA, Photo      │
└─────────────────────────────┘
┌─────────────────────────────┐
│ ABOUT                       │ ← Build credibility
│ • Bio, 3 cards              │
└─────────────────────────────┘
┌─────────────────────────────┐
│ PROJECTS (5 cards)          │ ← Showcase work
│ • 2 live + 2 coming soon    │
└─────────────────────────────┘
┌─────────────────────────────┐
│ SKILLS (4 categories)       │ ← Show depth
│ • Frontend, Backend, AI/ML  │
└─────────────────────────────┘
┌─────────────────────────────┐
│ CONTACT (Form + Links)      │ ← Call to action
└─────────────────────────────┘
┌─────────────┐
│ FOOTER      │ ← Navigation + credits
└─────────────┘

---

# Final IA Diagram 
┌──────────────────────────────────────────────────────────────┐
│           PORTFOLIO HOMEPAGE - INFORMATION ARCHITECTURE      │
├──────────────────────────────────────────────────────────────┤
│ NAVBAR (Fixed - Always visible)                              │
│ Logo | Nav Links | Theme Toggle                              │
├──────────────────────────────────────────────────────────────┤
│                          ↓                                   │
│ HERO (Large, Attention-grabbing)                             │
│ Headline | Subheading | Photo | CTAs | Socials | Scroll      │
├──────────────────────────────────────────────────────────────┤
│                          ↓                                   │
│ ABOUT (Build Credibility)                                    │
│ Bio Paragraph | 3 Highlight Cards                            │
├──────────────────────────────────────────────────────────────┤
│                          ↓                                   │
│ FEATURED PROJECTS (4 Serious Works) ★★★                      │
│┌──────────────┬──────────────┬──────────────┬──────────────┐ │
││ 1. HEALTH    │ 2. SHOPFLOW  │ 3. RESUME    │ 4. CASCADE   │ │
││    ASSISTANT │    (Coming)  │    PARSER    │    VLM       │ │
││ LIVE ✓       │ DUE: Sept25  │ (Coming)     │ (In Progress)│ │
││ GitHub|Demo  │ GitHub       │ GitHub|Model │ GitHub|Paper │ │
│└──────────────┴──────────────┴──────────────┴──────────────┘ │
├──────────────────────────────────────────────────────────────┤
│                          ↓                                   │
│ SKILLS (4 Categories)                                        │
│ Frontend | Backend | AI/ML | Research                        │
├──────────────────────────────────────────────────────────────┤
│                          ↓                                   │
│ CONTACT (Multiple ways to reach)                             │
│ Email | GitHub | LinkedIn | Contact Form                     │
├──────────────────────────────────────────────────────────────┤
│ FOOTER (Navigation + Credits)                                │
│ Links | Social | Copyright                                   │
└──────────────────────────────────────────────────────────────┘

---

# CTA Arrows
HEALTH ASSISTANT card → GitHub link
                     → Live demo link

SHOPFLOW card → GitHub link
              → Expected launch date

RESUME PARSER card → GitHub link
                   → HuggingFace Model Hub

CASCADEVLM card → GitHub link
                → Paper link

---

# ANNOTATIONS
**On HERO box:**
"First impression - 5 second grab"
"High contrast, animated background"
"Clear CTA buttons"

---

**On PROJECTS box:**
"Showcase only SERIOUS work"
"4 real projects: 1 live + 3 in-dev"
"Shows production capability"
"Clear links to code & demos"

---

**On CONTACT box:**
"Multiple ways to reach you"
"Form for inquiries"
"Direct links to profiles"

# Color Legend
┌──────────────────────────────────┐
│ COLOR KEY                        │
├──────────────────────────────────┤
│ #0F172A - Primary background.  │
│ #1E293B - Card background      │
│ #06B6D4 - Secondary/highlights │
│ #EA580C - Coming Soon/CTAs.    │
│ #10B981 - Research/thesis.     │
│ #F1F5F9 - Text on dark.        │
└──────────────────────────────────┘

---

# Typography Legend
┌─────────────────────────────┐
│ TYPOGRAPHY                  │
├─────────────────────────────┤
│ H1: Space Grotesk, 56px     │
│ H2: Space Grotesk, 42px     │
│ Body: Inter, 16px           │
│ Caption: Inter, 12px        │
└─────────────────────────────┘