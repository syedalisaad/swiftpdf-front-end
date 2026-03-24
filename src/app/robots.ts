// app/robots.txt
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/temp_pdf_storage/'], // Protect your backend and temp files
    },
    sitemap: 'https://swiftpdf.cloud/sitemap.xml',
  }
}