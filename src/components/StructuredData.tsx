// components/StructuredData.tsx

import Head from "next/head";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    "@id": "https://solaceendoflife.com.au",
    name: "Solace End of Life Services",
    url: "https://solaceendoflife.com.au",
    logo: {
      "@type": "ImageObject",
      url: "https://solaceendoflife.com.au/img/solace-logo.png",
    },
    image: {
      "@type": "ImageObject",
      url: "https://solaceendoflife.com.au/img/solace-logo.png",
    },
    description:
      "Family-led funeral services, home funerals and community education in Tasmania.",
    telephone: "0417 307 658",
    email: "mailto:funerals@solaceendoflife.com.au",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Tasmania",
    },
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
