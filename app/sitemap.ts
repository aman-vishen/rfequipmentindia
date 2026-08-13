import type { MetadataRoute } from 'next';
import { commpolarProducts, shieldBoxes, site } from '@/lib/data';

type SitemapEntry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: SitemapEntry[] = [
    { url: site.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/products`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/solutions`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/rf-calibration`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/commpolar`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/shield-boxes`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 }
  ];

  const commpolarRoutes: SitemapEntry[] = commpolarProducts.map((product) => ({
    url: `${site.url}/commpolar/${product.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const shieldBoxRoutes: SitemapEntry[] = shieldBoxes.map((product) => ({
    url: `${site.url}/shield-boxes/${product.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticRoutes, ...commpolarRoutes, ...shieldBoxRoutes];
}
