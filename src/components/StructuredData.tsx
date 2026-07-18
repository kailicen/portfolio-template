// components/StructuredData.tsx

import Head from "next/head";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    name: "Solace End of Life Services",
    url: "https://solaceendoflife.com.au",
    logo: "https://solaceendoflife.com.au/img/solace-logo.png",
    description:
      "Family-led funeral services, home funerals and community education in Tasmania.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tasmania",
      addressCountry: "AU",
    },
    founder: [
      {
        "@type": "Person",
        name: "Edwin Quilliam",
      },
      {
        "@type": "Person",
        name: "Rebecca Lyons",
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </Head>
  );
}
