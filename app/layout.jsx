import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://seniorcodehub.dev"),
  title: {
    default: "Senior CodeHub — IT & AI Consultancy",
    template: "%s | Senior CodeHub",
  },
  description:
    "Senior-level engineering and AI consultancy. We architect, build, and launch AI-first products with precision.",
  keywords: [
    "AI consultancy",
    "AI strategy",
    "LLM",
    "MLOps",
    "Senior engineering",
    "Next.js",
    "RAG",
    "Agents",
    "Platform engineering",
    "Cloud architecture",
  ],
  category: "technology",
  applicationName: "Senior CodeHub",
  authors: [{ name: "Senior CodeHub" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Senior CodeHub",
    title: "Senior CodeHub — IT & AI Consultancy",
    description:
      "Senior-level engineering and AI consultancy. We architect, build, and launch AI-first products with precision.",
    images: [{ url: "/seo/opengraph-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior CodeHub — IT & AI Consultancy",
    description:
      "Senior-level engineering and AI consultancy. We architect, build, and launch AI-first products with precision.",
    images: ["/seo/twitter-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/seo/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/seo/icon.svg"],
    apple: ["/seo/icon.svg"],
  },
  referrer: "origin-when-cross-origin",
  creator: "Senior CodeHub",
  publisher: "Senior CodeHub",
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
