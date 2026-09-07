import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
    minimumCacheTTL: 31536000,
  },

    headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'geolocation=(), microphone=(), camera=()',
        },
      ],
    },
  ],

  redirects: async () => [
    
  ],

    rewrites: async () => ({
    beforeFiles: [
    ],
  }),

    reactStrictMode: true,
  productionBrowserSourceMaps: false,
  
  experimental: {
    optimizePackageImports: ['lucide-react'], 
  },

  typescript: {
    tsconfigPath: './tsconfig.json',
  },

}

module.exports = nextConfig