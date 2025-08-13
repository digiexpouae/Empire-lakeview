import React from 'react'
import Home from '../components/Home'
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.empiredevelopments.ae/#website",
                  url: "https://www.empiredevelopments.ae/",
                  name: "Empire Developments",
                  description:
                    "Empire Developments is a leading real estate developer in Dubai, UAE, offering premium residential and commercial properties with modern architecture and high ROI potential.",
                  publisher: {
                    "@id": "https://www.empiredevelopments.ae/#organization",
                  },
                  inLanguage: "en",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://www.empiredevelopments.ae/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.empiredevelopments.ae/#organization",
                  name: "Empire Developments",
                  url: "https://www.empiredevelopments.ae/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.empiredevelopments.ae/wp-content/uploads/2024/04/Empire-Developments-Logo.png",
                  },
                  sameAs: [
                    "https://www.facebook.com/empiredevelopments",
                    "https://www.instagram.com/empiredevelopments",
                    "https://www.linkedin.com/company/empiredevelopments",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+971 800 700007",
                    contactType: "Customer Service",
                    areaServed: "AE",
                    availableLanguage: ["English", "Arabic"],
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.empiredevelopments.ae/#webpage",
                  url: "https://www.empiredevelopments.ae/",
                  name: "Empire Developments | Leading Real Estate Developer in Dubai, UAE",
                  isPartOf: {
                    "@id": "https://www.empiredevelopments.ae/#website",
                  },
                  about: {
                    "@id": "https://www.empiredevelopments.ae/#organization",
                  },
                  description:
                    "Explore premium properties in Dubai by Empire Developments. Discover luxury apartments, villas, and investment opportunities with high returns.",
                  inLanguage: "en",
                },
              ],
            }),
          }}
        />
      </Head>
      <Home /></>

  )
}

export default index
