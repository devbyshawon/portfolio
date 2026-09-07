# Environment Variables Documentation

## Overview
Environment variables configuration for development and production environments.

## File Locations
- **Development:** `.env.local` (local machine only, git-ignored)
- **Production:** Set in Vercel dashboard
- **Testing:** `.env.test.local` (if needed)

## Public Variables (NEXT_PUBLIC_*)

These are available in the browser and safe to expose.

### `NEXT_PUBLIC_SITE_URL`
- **Type:** String
- **Default:** `http://localhost:3000`
- **Purpose:** Used for meta tags, canonical URLs
- **Example:** `http://localhost:3000` (dev), `https://portfolio.vercel.app` (prod)

### `NEXT_PUBLIC_GITHUB_USERNAME`
- **Type:** String
- **Default:** `devbyshawon`
- **Purpose:** Link to GitHub profile
- **Usage:** Social links, repository links

### `NEXT_PUBLIC_GITHUB_REPO`
- **Type:** String
- **Default:** `portfolio`
- **Purpose:** Repository name for links
- **Usage:** GitHub links, contribution tracking

### `NEXT_PUBLIC_ENABLE_DARK_MODE`
- **Type:** Boolean
- **Default:** `true`
- **Purpose:** Toggle dark mode feature
- **Usage:** Feature flag for theme switcher

### `NEXT_PUBLIC_ENABLE_ANIMATIONS`
- **Type:** Boolean
- **Default:** `true`
- **Purpose:** Toggle animations for performance
- **Usage:** Respect user preferences, disable on slow devices

## Coming Soon (For future features)

### Contact Form Variables
When you add contact form:
- `NEXT_PUBLIC_FORMSPREE_ID` - Formspree integration
- `NEXT_PUBLIC_RESEND_KEY` - Resend email service

### Analytics Variables
When you add analytics:
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID

### API Variables
When you add backend API:
- `NEXT_PUBLIC_API_BASE_URL` - API endpoint URL
- `API_SECRET_KEY` - Private API key (server-only)

## Setup Instructions

### 1. Create .env.local
```bash
cp .env.example .env.local  # If example exists
# Or create new file: .env.local
```

### 2. Add Variables
Copy variables you need from above into `.env.local`

### 3. Development
```bash
npm run dev
# Variables are automatically loaded
```

### 4. Production (Vercel)
1. Go to Vercel dashboard
2. Select your project
3. Settings → Environment Variables
4. Add each public variable

## Usage in Code

### Client-side (Browser)
```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
```

### Server-side (Node.js)
```typescript
// Only in API routes or server components
const secretKey = process.env.API_SECRET_KEY;
```

## Security Notes

1. **Never commit .env.local** - Already in .gitignore ✓
2. **Public variables only** - Prefix with NEXT_PUBLIC_
3. **Secret keys** - Use server-side environment variables
4. **Production secrets** - Set in Vercel dashboard, never in code
5. **Don't log secrets** - Be careful with console.log in production

## Troubleshooting

### Variables not loading?
- Restart dev server: `npm run dev`
- Check .env.local exists in root folder
- Verify spelling exactly matches

### Variable is undefined?
- Make sure it has NEXT_PUBLIC_ prefix for browser
- Restart dev server
- Clear .next folder: `rm -rf .next && npm run dev`

### Exposed secret key?
- Remove from code immediately
- Regenerate the key (if API key)
- Update .env.local
- Never commit secrets

## References
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)