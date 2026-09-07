# Configuration Reference

## Project Configuration Files

### tailwind.config.ts
Tailwind CSS configuration with custom design system.

**Location:** `tailwind.config.ts`

**What it does:**
- Defines custom colors (primary, secondary, accent, etc.)
- Configures fonts (Space Grotesk, Inter)
- Sets up custom components (.btn-primary, .card, .section)
- Adds custom animations

**To modify colors:**
1. Edit `tailwind.config.ts`
2. Add/change color in `colors:` object
3. Restart dev server
4. Use in Tailwind classes

**Example:**
```typescript
colors: {
  'primary': '#0F172A', // Change this
}
```

Then use: `className="bg-primary"`

---

### next.config.js
Next.js configuration for optimization and features.

**Location:** `next.config.js`

**Key settings:**
- Image optimization (external URLs, sizes, caching)
- Security headers (prevent attacks)
- Environment redirects (URL rewrites)
- Build optimization (SWC minification, strict mode)

**When to modify:**
- Adding new image sources → Update `remotePatterns`
- Adding URL redirects → Update `redirects`
- Proxying APIs → Update `rewrites`

---

### .env.local
Environment variables for development.

**Location:** `.env.local` (root folder, git-ignored)

**Rules:**
- Prefix with `NEXT_PUBLIC_` to expose to browser
- No prefix = server-only (secure)
- Restart dev server after changes
- Never commit to Git

**Common variables:**
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_USERNAME=devbyshawon

---

### app/globals.css
Global styles and Tailwind setup.

**Location:** `app/globals.css`

**What it does:**
- Imports Google Fonts
- Applies Tailwind directives
- Sets base styles (body, headings, links)
- Defines component classes (.btn-primary, .card, .section)

**To add custom styles:**
1. Open `app/globals.css`
2. Add to @layer base, @layer components, or @layer utilities
3. Save (dev server reloads automatically)

---

### tsconfig.json
TypeScript configuration with path aliases.

**Location:** `tsconfig.json`

**Path aliases allow clean imports:**
```typescript
// Instead of:
import { projects } from '../../../app/lib/constants'

// Use:
import { projects } from '@/lib/constants'
```

**Available aliases:**
- `@/*` - Any file in root
- `@/app/*` - App folder
- `@/components/*` - Components folder
- `@/lib/*` - Lib folder
- `@/public/*` - Public folder

---

## Quick Reference: Most Changed Files

### When you need to...

**Change colors:**
→ `tailwind.config.ts` (colors object)

**Add new environment variable:**
→ `.env.local` (and Vercel dashboard for production)

**Use environment variable in code:**
→ Add `NEXT_PUBLIC_` prefix for browser access

**Add global styles:**
→ `app/globals.css` (@layer section)

**Add custom font sizes:**
→ `tailwind.config.ts` (extend.fontSize)

**Add custom animation:**
→ `tailwind.config.ts` (extend.animation)

**Optimize images:**
→ `next.config.js` (images.remotePatterns)

**Add URL redirect:**
→ `next.config.js` (redirects)

---

## Common Tasks

### Add a new color
1. Open `tailwind.config.ts`
2. Find `colors:` object
3. Add: `'new-color': '#HEXCODE'`
4. Restart dev server
5. Use: `className="bg-new-color"`

### Add environment variable
1. Open `.env.local`
2. Add: `NEXT_PUBLIC_NEW_VAR=value`
3. Restart dev server
4. Use: `process.env.NEXT_PUBLIC_NEW_VAR`

### Add custom component class
1. Open `app/globals.css`
2. Find `@layer components`
3. Add:
```css
.my-component {
  @apply px-4 py-2 rounded-lg transition-all;
}
```
4. Use: `className="my-component"`

### Test environment variables
1. Use: `process.env.VARIABLE_NAME`
2. Browser console to verify
3. Remember: Only NEXT_PUBLIC_* visible in browser

---

## Debugging

### Changes not applying?
- Save file
- Restart dev server: `npm run dev`
- Clear cache: `rm -rf .next`
- Hard refresh browser: Ctrl+Shift+R or Cmd+Shift+R

### Tailwind classes not working?
- Verify class name in `tailwind.config.ts`
- Check file is in content paths: `app/**/*.{js,ts,jsx,tsx}`
- Restart dev server

### Environment variable undefined?
- Check `.env.local` exists in root
- Verify variable name matches (case-sensitive)
- Check NEXT_PUBLIC_ prefix for browser
- Restart dev server

### Font not loading?
- Check `globals.css` imports fonts from Google
- Verify font-family in CSS matches tailwind config
- Clear browser cache and reload