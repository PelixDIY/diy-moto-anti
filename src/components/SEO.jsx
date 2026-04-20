import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * Reusable SEO Component
 * @param {string} pageKey - The translation key for the page (e.g. 'home', 'about', 'services')
 */
export default function SEO({ pageKey }) {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'en';

    // Get translations for the specific page
    const title = t(`seo.${pageKey}.title`);
    const description = t(`seo.${pageKey}.description`);
    const siteName = 'DIY Moto Garage';

    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "DIY Moto Garage",
        "url": "https://diymotogarage.com/",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Motorcycle Services",
            "itemListElement": [
                { "@type": "Service", "name": "Motorcycle Repair" },
                { "@type": "Service", "name": "Oil Change" },
                { "@type": "Service", "name": "Brake Service" }
            ]
        }
    };

    return (
        <Helmet htmlAttributes={{ lang }}>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            
            {/* Adding hreflang links based on the language. Since we don't use dynamic language URL routing, 
                we ensure the search engine knows the current language version properly in JS. */}
            <link rel="alternate" hrefLang="en" href="https://diymotogarage.com/" />
            <link rel="alternate" hrefLang="ru" href="https://diymotogarage.com/" />
            <link rel="alternate" hrefLang="x-default" href="https://diymotogarage.com/" />

            {/* JSON-LD Schema for Local Business (AutoRepair) */}
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
