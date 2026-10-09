import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ghostech-afrique.web.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/evenements/hackathons',
    '/formation',
    '/poles/numerique',
    '/projets/impact',
    '/projets/galerie',
    '/projets/videos',
    '/projets/realisations',
    '/equipe/rejoindre',
    '/equipe/bureau',
    '/equipe/membres',
    '/apropos',
    '/createur',
    '/contact',
    '/conditions-generales',
  ];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/evenements/hackathons' || route === '/formation' || route === '/poles/numerique') {
      priority = 0.9;
      changeFrequency = 'daily';
    } else if (route === '/equipe/rejoindre' || route === '/projets/impact') {
      priority = 0.8;
      changeFrequency = 'weekly';
    }

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
