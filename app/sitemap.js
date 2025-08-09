export default function sitemap() {
  const base = "https://seniorcodehub.dev";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
