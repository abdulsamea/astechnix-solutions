export interface CookieVendor {
  name: string;
  domain: string;
  privacyPolicyUrl: string;
}

export interface CookieCategoryDetail {
  id: "essential" | "functional" | "analytics" | "marketing";
  title: string;
  purpose: string;
  dataCollected: string[];
  retention: string;
  vendors: CookieVendor[];
  alwaysActive?: boolean;
  defaultOn: boolean;
}

export const cookieCategories: CookieCategoryDetail[] = [
  {
    id: "essential",
    title: "Essential / Strictly Necessary",
    purpose:
      "These cookies keep the website functional. They handle session continuity, form input persistence, and security tokens. Without them, features like contact forms and navigation would not work.",
    dataCollected: [
      "Session ID",
      "CSRF token",
      "Form input persistence tokens",
    ],
    retention: "Session only (cleared when the browser closes)",
    vendors: [
      {
        name: "AStechnix (first-party)",
        domain: "astechnix.com",
        privacyPolicyUrl: "/privacy",
      },
    ],
    alwaysActive: true,
    defaultOn: true,
  },
  {
    id: "functional",
    title: "Functional & Preferences",
    purpose:
      "These cookies remember choices you make on the site — like language preference or whether you've dismissed a banner — so you don't have to re-set them on every visit.",
    dataCollected: [
      "Language preference",
      "UI state flags (banner dismissed, accordion expanded)",
      "Theme settings if applicable",
    ],
    retention: "365 days",
    vendors: [
      {
        name: "AStechnix (first-party)",
        domain: "astechnix.com",
        privacyPolicyUrl: "/privacy",
      },
    ],
    defaultOn: false,
  },
  {
    id: "analytics",
    title: "Analytics & Performance",
    purpose:
      "These cookies collect aggregated, anonymized data about how visitors use the site — which pages are visited most, where traffic comes from, and whether error messages appear. We use this to fix problems and improve content. IP addresses are hashed or truncated before storage.",
    dataCollected: [
      "Hashed / truncated IP address",
      "Browser type and version",
      "Operating system",
      "Screen resolution",
      "Pages visited and time on page",
      "Referrer URL (first-party only, not shared cross-site)",
    ],
    retention: "14 months (GA4 default), then automatically purged",
    vendors: [
      {
        name: "Google Analytics 4",
        domain: "google-analytics.com",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
    ],
    defaultOn: false,
  },
  {
    id: "marketing",
    title: "Marketing & Advertising",
    purpose:
      "These cookies allow us to measure the effectiveness of advertising campaigns and show relevant content to people who have visited our site before. They enable audience lists and conversion tracking for paid campaigns.",
    dataCollected: [
      "Click ID (e.g., gclid from Google Ads)",
      "Conversion event data",
      "Audience list membership (hashed email if available)",
      "Ad interaction timestamps",
    ],
    retention: "13 months for conversion tracking; 540 days for audience membership",
    vendors: [
      {
        name: "Meta Pixel (Facebook)",
        domain: "facebook.com",
        privacyPolicyUrl: "https://www.facebook.com/privacy/policy/",
      },
      {
        name: "Google Ads",
        domain: "google.com",
        privacyPolicyUrl: "https://policies.google.com/privacy",
      },
      {
        name: "LinkedIn Insight Tag",
        domain: "linkedin.com",
        privacyPolicyUrl: "https://www.linkedin.com/legal/privacy-policy",
      },
    ],
    defaultOn: false,
  },
];
