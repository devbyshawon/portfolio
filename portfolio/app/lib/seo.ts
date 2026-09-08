import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:300';

const siteMetadata: Metadata = {
    title: {
        default: 'Arham | Full-Stack MERN Developer & AI/ML Engineer',
        template: '%s | Arham Portfolio',
    },
    description: 'Building production-grade MERN systems that solve real problems. Currently working on ShopFlow (POS for Bangladesh retail) and Bangla Resume Parser (AI).',
    keywords: [
        'Full-Stack Developer',
        'MERN',
        'React',
        'Node.js',
        'AI/ML Engineer',
        'Bangladesh',
        'JavaScript',
        'TypeScript',
    ],
    authors: [
        {
        name: 'MD. Shawon Hossain',
        url: 'https://github.com/devbyshawon',
        },
    ],
    creator: 'Arham',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        siteName: 'Arham Portfolio',
        title: 'Arham | Full-Stack Developer & AI/ML Engineer',
        description: 'Building production-grade systems that solve real problems',
        images: [
            {
                url: `${baseUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Arham Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Arham | Full-Stack Developer & AI/ML Engineer', 
        description: 'Building production-grade systems that solve real problems',
        creator: '@devbyshawon',
        images: [`${baseUrl}/og-image.png`],
    },   
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    // VERIFICATION (For Google/Bing verification)
    // After verify with Google Search Console
    // verification: {
    //   google: 'your-google-verification-code',
    //   yandex: 'your-yandex-code',
    // },   
};

const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'MD. Shawon Hossain',
    url: baseUrl,
    email: 'shawon12hossain@gmail.com',
    image: `${baseUrl}/profile.jpg`,
    jobTitle: 'Full-Stack MERN Developer & AI/ML Engineer',
    sameAs: [
        'https://github.com/devbyshawon',
        'https://linkedin.com/in/devbyshawon',
        'https://twitter.com/devbyshawon',
    ],
    worksFor: {
        '@type': 'Organization',
        name: 'Independent Developer',
    },
};

const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: baseUrl,
    name: 'Arham Portfolio',
    description: 'Full-Stack Developer Portfolio',
    potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
    },
};

export { siteMetadata, jsonLdPerson, jsonLdWebsite }