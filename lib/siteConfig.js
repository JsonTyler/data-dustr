/**

* Site Configuration
* Global site metadata, branding, and external service URLs
  */

export const siteConfig = {
    // Basic branding
    name: "DataDustr",
    tagline: "We clean up your digital chaos and bring structure to your data.",

    // Domain and SEO
    domain: "https://datadustr.com",
    favicon: "/favicon.ico",
    logo: {
        white: "/datadustrWhitePlainSvg.svg",
        black: "/datadustrBlackPlainSvg.svg",
        iconWhite: "/datadustrWhiteIconOnlyPlainSvg.svg",
        iconBlack: "/datadustrBlackIconOnlyPlainSvg.svg"
    },

    // Contact & social
    email: "[hello@datadustr.com](mailto:hello@datadustr.com)",
    social: {
        instagram: "https://www.instagram.com/datadustr"
    },

    // Core services (lightweight reference, not full content)
    services: [
        "Digital File Organization",
        "Email Inbox Cleanup",
        "Business Data Cleanup",
        "Digital Decluttering",
        "Custom Organization Systems"
    ],

    // External services
    booking: {
        consult: "https://tidycal.com/datadustr/consult",
        fileOrganization: "https://tidycal.com/datadustr/file-organization",
        emailCleanup: "https://tidycal.com/datadustr/email-cleanup",
        businessData: "https://tidycal.com/datadustr/business-data",
        declutter: "https://tidycal.com/datadustr/declutter",
        systems: "https://tidycal.com/datadustr/systems"
    },

    // SEO & Open Graph
    seo: {
        title: "DataDustr – Digital Organization, File Cleanup & Data Systems",
        description: "DataDustr helps individuals and businesses clean up files, organize data, and build simple systems for managing digital life and work.",
        ogTitle: "DataDustr – Digital Organization & Data Cleanup",
        ogDescription: "From messy files to structured systems, DataDustr helps you organize your digital world and stay in control long-term.",
        ogImage: "https://datadustr.com/social-preview.png",
        twitterCard: "summary_large_image",
        themeColor: "#000000"
    },

    // Schema.org structured data
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DataDustr",
        url: "https://datadustr.com",
        logo: "https://datadustr.com/datadustrWhitePlainSvg.svg",
        sameAs: [
        "https://www.instagram.com/datadustr"
        ]
    }
};