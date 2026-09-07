import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'primary': '#0F172A',      // Deep Blue
        'secondary': '#06B6D4',    // Cyan
        'accent': '#EA580C',       // Orange
        
        // Text colors
        'text-light': '#F1F5F9',       // Almost white
        'text-secondary': '#CBD5E1',   // Light gray
        'text-muted': '#94A3B8',       // Muted gray
        
        // Background & utility
        'bg-subtle': '#1E293B',    // Subtle blue
        'border': '#334155',       // Border gray
        'success': '#10B981',      // Green
        'error': '#EF4444',        // Red
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
export default config