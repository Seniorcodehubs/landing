import "./globals.css";

export const metadata = {
  title: "Senior CodeHub — IT & AI Consultancy",
  description:
    "Senior CodeHub — IT & AI consultancy delivering senior-level engineering, AI strategy, and shipping velocity.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
