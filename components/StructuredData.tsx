export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "LocalBusiness"],
    "name": "Sara Mahmodi",
    "brand": {
      "@type": "Brand",
      "name": "MindShift for LifeShift"
    },
    "jobTitle": "Mindset & Life Coach",
    "url": "https://www.saramahmodi.com",
    "image": "https://www.saramahmodi.com/og-image.jpg",
    "sameAs": [
      "https://www.instagram.com/mindshift_for_lifeshift/",
      "https://www.linkedin.com/in/saramahmodi/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Turku",
      "addressCountry": "FI"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Finland"
      },
      {
        "@type": "Place",
        "name": "Worldwide"
      }
    ],
    "availableLanguage": ["English", "Persian"],
    "knowsAbout": [
      "Mindset Coaching",
      "Life Coaching",
      "Career Coaching",
      "Personal Development",
      "Belief Transformation"
    ],
    "priceRange": "€€",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "telephone": "+358417539326",
      "availableLanguage": ["English", "Persian"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
