import { jsonLdPerson, jsonLdWebsite } from "@/app/lib/seo";

const JsonLdPerson = () => {
    return (
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
    )
};

const JsonLdWebsite = () => {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
    />
  )
};

const JsonLdBreadcrumb = () => {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`,
            },
          ],
        }),
      }}
    />
  )
};

export { JsonLdPerson, JsonLdWebsite, JsonLdBreadcrumb };