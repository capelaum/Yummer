interface SeoProps {
  title: string;
  description: string;
  url: string;
}

export function Seo({ title, description, url }: SeoProps) {
  return (
    <>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content="Yummer"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR"></meta>
      <meta
        property="og:image"
        itemProp="image"
        content="Logos/yummer_logo.png"
      />
      <meta property="og:image:type" content="image/png"></meta>

      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@capellett" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="Logos/yummer_logo.png" />
    </>
  );
}
