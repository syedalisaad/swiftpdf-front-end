// src/components/Schema.tsx

type RatingType = {
  ratingValue: number;
  ratingCount: number;
};

interface SchemaProps {
  name: string;
  description: string;
  url: string;
  rating?: RatingType; // optional
}

export default function Schema({ name, description, url, rating }: SchemaProps) {
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": `https://swiftpdf.cloud${url}`,
    "operatingSystem": "All",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  // ✅ Only add rating if real data exists
  if (rating) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      ratingCount: rating.ratingCount,
      bestRating: 5,
      worstRating: 1
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}