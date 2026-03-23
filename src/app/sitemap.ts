import { MetadataRoute } from 'next';
import { PDF_TOOLS } from '../config/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swiftpdf.cloud';

  // 1. Map all your tools from your navigation constant
  const toolRoutes = PDF_TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 2. Add static core pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...staticRoutes, ...toolRoutes];
}