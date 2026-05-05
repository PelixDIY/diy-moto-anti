import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO Component
 * @param {string} pageKey - The translation key for the page (e.g. 'home', 'about', 'services')
 * @param {object} customSchema - Optional additional schema data
 */
export default function SEO({ pageKey, customSchema = null }) {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();
    const lang = i18n.language || 'en';
    const siteUrl = 'https://diymotogarage.com';
    const canonicalUrl = `${siteUrl}${pathname}`;

    // Get translations for the specific page
    const title = t(`seo.${pageKey}.title`);
    const description = t(`seo.${pageKey}.description`);
    const siteName = 'DIY Moto Garage';

    // Base Organization/LocalBusiness Schema
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": siteName,
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "image": `${siteUrl}/og-image.jpg`,
        "description": description || t("seo.home.description"),
        "telephone": "+6287700077111",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jalan Raya Kesambi No. 34",
            "addressLocality": "Kerobokan",
            "addressRegion": "Bali",
            "postalCode": "80361",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -8.6533626,
            "longitude": 115.1724171
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "sameAs": [
            "https://www.google.com/maps/place/DIY+MotoGarage",
            "https://wa.me/6287700077111",
            "https://www.instagram.com/diymotogarage/"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Motorcycle Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Self-Service Workshop"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Professional Mechanic Repair"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Oil Change Service"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Brake System Repair"
                    }
                }
            ]
        }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            }
        ]
    };

    if (pathname !== '/') {
        breadcrumbSchema.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": pageKey.charAt(0).toUpperCase() + pageKey.slice(1).replace(/-/g, ' '),
            "item": canonicalUrl
        });
    }

    return (
        <Helmet htmlAttributes={{ lang }}>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
            
            {/* Hreflang */}
            <link rel="alternate" hrefLang="en" href={canonicalUrl} />
            <link rel="alternate" hrefLang="ru" href={canonicalUrl} />
            <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

            {/* JSON-LD Schemas */}
            <script type="application/ld+json">
                {JSON.stringify(baseSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
            {customSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(customSchema)}
                </script>
            )}
        </Helmet>
    );
}
