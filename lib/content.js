/**

* Content Configuration
* Centralized repository for all business content (services, testimonials, FAQs, process, etc.)
  */

export const headerNav = [
  { label: "Home", anchor: "top" },
  { label: "Services", anchor: "services" },
  { label: "How It Works", anchor: "process" },
  { label: "About + My Story", anchor: "about" },
  { label: "FAQ", anchor: "faq" },
  { label: "Testimonials", anchor: "testimonials" },
  { label: "Get Started", anchor: "contact", isCta: true }
];

export const services = [
    {
        id: "digital-file-organization",
        title: "Digital File Organization",
        description: "We clean up and structure your files, folders, and digital storage so everything is easy to find and maintain.",
        price: "From $50",
        icon: "📁",
        route: "/file-organization",
        features: [
            "Folder structure design",
            "File naming system",
            "Duplicate file cleanup",
            "Cloud storage organization",
            "Long-term maintenance setup"
        ]
    },
    {
        id: "email-inbox-cleanup",
        title: "Email Inbox Cleanup",
        description: "We organize your inbox, reduce clutter, and build systems so you stay at inbox zero without stress.",
        price: "From $45",
        icon: "📧",
        route: "/email-cleanup",
        features: [
            "Inbox decluttering",
            "Folder & label system",
            "Unsubscribe + filter setup",
            "Priority workflow setup",
            "Ongoing email management tips"
        ]
    },
    {
        id: "business-data-cleanup",
        title: "Business Data Cleanup",
        description: "We clean and standardize messy spreadsheets, CRM systems, and customer data so your business runs smoother.",
        price: "Project-based",
        icon: "📊",
        route: "/business-data",
        features: [
            "Data deduplication",
            "Field standardization",
            "Spreadsheet cleanup",
            "Import/export fixing",
            "Process documentation"
        ]
    },
    {
        id: "digital-declutter",
        title: "Digital Decluttering",
        description: "We help you reduce digital overwhelm by cleaning up apps, files, downloads, and scattered data across devices.",
        price: "From $40",
        icon: "🧹",
        route: "/declutter",
        features: [
            "Downloads & desktop cleanup",
            "App & account audit",
            "Storage optimization",
            "Device organization",
            "Simple system setup"
        ]
    },
    {
        id: "system-setup",
        title: "Custom Organization Systems",
        description: "We build simple, repeatable systems for managing your digital life or business data long-term.",
        price: "Project-based",
        icon: "⚙️",
        route: "/systems",
        features: [
            "Personal workflow systems",
            "Business process setup",
            "Naming & structure standards",
            "Automation suggestions",
            "Scalable organization systems"
        ]
    }
];

export const testimonials = [
    {
        id: "sarah-johnson",
        quote: "My files were everywhere and I couldn’t find anything. Now everything is organized and I actually feel in control.",
        author: "Sarah Johnson",
        role: "Personal Client"
    },
    {
        id: "mike-ramirez",
        quote: "They cleaned up our CRM and spreadsheets. It saved us hours every week and fixed issues we didn’t even realize we had.",
        author: "Mike Ramirez",
        role: "Small Business Owner"
    },
    {
        id: "alex-chen",
        quote: "Inbox zero finally feels possible. The system they set up actually works long term.",
        author: "Alex Chen",
        role: "Freelancer"
    }
];

export const faqs = [
    {
        id: "what-do-you-organize",
        question: "What kind of data do you organize?",
        answer: "We organize files, folders, emails, spreadsheets, and digital systems across personal and business environments."
    },
    {
        id: "do-you-delete-files",
        question: "Do you delete my data?",
        answer: "Only with your approval. We identify duplicates, outdated files, and clutter, but you always control what gets removed."
    },
    {
        id: "how-long-does-it-take",
        question: "How long does it take?",
        answer: "It depends on how much data you have. Small cleanups can take a few hours, while larger projects may take multiple sessions."
    },
    {
        id: "remote-work",
        question: "Do you work remotely?",
        answer: "Yes. All services are done remotely using secure access and collaboration tools."
    },
    {
        id: "ongoing-support",
        question: "Do you offer ongoing support?",
        answer: "Yes. We can maintain your systems or help you adapt them as your needs grow."
    }
];

export const processSteps = [
    {
        id: "audit",
        title: "Audit",
        description: "We review your current files, systems, and pain points to understand what’s not working."
    },
    {
        id: "cleanup",
        title: "Cleanup",
        description: "We remove duplicates, organize content, and eliminate unnecessary clutter."
    },
    {
        id: "structure",
        title: "Structure",
        description: "We build a clean, logical system for organizing your data moving forward."
    },
    {
        id: "system-setup-step",
        title: "System Setup",
        description: "We implement naming conventions, workflows, and tools to keep everything consistent."
    },
    {
        id: "handoff",
        title: "Handoff & Support",
        description: "We walk you through your new system and provide support so you can maintain it easily."
    }
];

export const aboutContent = [
    "Datadustr started from a simple problem: digital chaos. Files everywhere, emails piling up, and no clear system to manage it all.",
    "We help individuals and businesses take control of their data by turning messy, overwhelming systems into clean, structured environments.",
    "This isn’t about complicated tools or overengineered solutions. It’s about simple systems that actually work and are easy to maintain.",
    "Whether you're dealing with years of accumulated files or messy business data, we help you clean it up, structure it, and keep it that way.",
    "At its core, Datadustr is about clarity. We take what feels overwhelming and make it manageable."
];

export const heroContent = {
    title: "We Clean Up Your Digital Chaos.",
    subtitle: "Files, emails, and business data — organized into systems that actually make sense.",
    cta: "Book a Free Consult",
    ctaLink: "/consult"
};

export const problemContent = {
    title: "Your Data Should Work for You, Not Against You.",
    description: "Most people are buried in messy files, cluttered inboxes, and disorganized systems. We bring structure, clarity, and control back to your digital life."
};

export const contactContent = {
    title: "Get in Touch",
    lead: "Whether you're overwhelmed with files, emails, or business data — we’ll help you figure out a clear path forward.",
    formAction: "/__contactForm.html",
    formName: "contact",
    referralOptions: [
        { value: "", label: "How did you hear about us?" },
        { value: "Search Engine", label: "Search Engine" },
        { value: "Social Media", label: "Social Media" },
        { value: "Friend or Colleague", label: "Friend or Colleague" },
        { value: "Newsletter", label: "Newsletter" },
        { value: "Other", label: "Other" }
    ]
};

export const footerContent = {
    tagline: "Turn chaos into clarity",
    taglineEmoji: "✨",
    hideOnPages: ["/consult", "/file-organization", "/email-cleanup", "/business-data", "/declutter", "/systems"],
    newsletterFormAction: "/__newsletterForm.html"
};

export const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "File Organization", href: "/file-organization" },
      { label: "Email Cleanup", href: "/email-cleanup" },
      { label: "Business Data", href: "/business-data" },
      { label: "Digital Decluttering", href: "/declutter" },
      { label: "Organization Systems", href: "/systems" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/#contact" }
    ]
  }
];