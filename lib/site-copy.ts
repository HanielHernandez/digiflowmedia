export const HERO_MARQUEE_ITEMS = [
  "Web Development",
  "Digital Solutions",
  "Automation",
  "SEO",
] as const;

export const EXTRA_TECHNOLOGIES = [
  "WordPress",
  "Elementor",
  "Shopify",
  "WooCommerce",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Sanity",
  "Tailwind CSS",
  "Vercel",
  "GSAP",
  "Google Analytics",
  "Google Search Console",
  "Stripe",
  "Resend",
] as const;

export const ANALYZER_FEATURES = [
  {
    icon: "zap",
    title: "Website Performance",
    description: "How fast and efficiently your website loads.",
  },
  {
    icon: "smartphone",
    title: "Mobile Experience",
    description: "How your website performs on phones and tablets.",
  },
  {
    icon: "search",
    title: "SEO Foundations",
    description: "How well your website is structured for search engines.",
  },
  {
    icon: "sparkles",
    title: "User Experience",
    description: "How easy it is for visitors to find what they need.",
  },
  {
    icon: "target",
    title: "Conversion Opportunities",
    description: "Where you may be losing potential customers.",
  },
  {
    icon: "globe",
    title: "Online Presence",
    description: "How effectively your digital presence represents your business.",
  },
] as const;

export const WEBSITE_CARE_PLANS = [
  {
    title: "Essential",
    price: "$99/month",
    description: "Keep your site updated, backed up, and secure.",
    features: [
      "WordPress updates",
      "Plugin & theme updates",
      "Website backups",
      "Security monitoring",
      "Uptime monitoring",
      "Monthly maintenance",
      "30 minutes of content updates",
    ],
  },
  {
    title: "Pro",
    price: "$199/month",
    badge: "Popular",
    featured: true,
    description: "Everything in Essential, plus ongoing performance care.",
    features: [
      "Performance monitoring",
      "Monthly performance review",
      "1 hour of content updates",
      "Technical troubleshooting",
      "SEO health monitoring",
      "Priority support",
    ],
  },
  {
    title: "Growth",
    price: "$349/month",
    description: "Everything in Pro, plus conversion and SEO support.",
    features: [
      "2 hours of updates/development",
      "Monthly SEO review",
      "Conversion recommendations",
      "Performance optimization",
      "Priority technical support",
      "Monthly digital health report",
    ],
  },
] as const;
