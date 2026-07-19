import Image from "next/image";
import MailingList from "@/components/MailingList";
import Container from "@/components/Container";
import Link from "next/link";

const partnerLinks = [
  {
    href: "https://www.ahfa.org.au/",
    src: "/img/footer-2.jpe",
    alt: "Australian Home Funeral Alliance",
    ariaLabel: "Visit the Australian Home Funeral Alliance website",
  },
  {
    href: "https://ndan.com.au/",
    src: "/img/footer-3.jpg",
    alt: "Natural Death Advocacy Network member",
    ariaLabel: "Visit the Natural Death Advocacy Network website",
  },
  {
    href: "https://nedalliance.org/",
    src: "/img/footer-4.jpg",
    alt: "National End-of-Life Doula Alliance member",
    ariaLabel: "Visit the National End-of-Life Doula Alliance website",
  },
  {
    href: "https://www.ahfa.org.au/",
    src: "/img/footer-5.jpg",
    alt: "Australian Home Funeral Alliance member",
    ariaLabel: "Visit the Australian Home Funeral Alliance website",
  },
  {
    href: "https://held.org.au/",
    src: "/img/footer-7.jpg",
    alt: "Holistic End of Life and Deathcare Australia practitioner member",
    ariaLabel: "Visit Holistic End of Life and Deathcare Australia",
  },
];

export default function Footer() {
  return (
    <>
      <MailingList />

      <footer className="w-full bg-solace-900 py-8 text-solace-100">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {partnerLinks.map((partner) => (
              <Link
                key={`${partner.href}-${partner.src}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.ariaLabel}
                className="
                  flex min-h-[120px] items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-solace-surface
                  p-4
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-solace-300
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-solace-900
                "
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={500}
                  height={300}
                  className="max-h-24 w-full object-contain"
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-solace-300">
            © {new Date().getFullYear()} Solace End of Life Services. All rights
            reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}
