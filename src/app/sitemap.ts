// app/sitemap.ts
import { MetadataRoute } from 'next';
import { PDF_TOOLS } from '../config/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swiftpdf.cloud';

  // 1. Generate URLs for all your PDF tools dynamically
  const toolUrls = PDF_TOOLS.map((tool) => ({
    url: `${baseUrl}}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const, // Tools don't change often
    priority: 0.8,
  }));

  // 2. Define your core static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // The homepage is the most important
    },
    {
      url: `${baseUrl}/about`, // Add if you have an about page
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...toolUrls];
}