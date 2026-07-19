import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PageHero from "@/components/ui/PageHero";
import SectionIntro from "@/components/ui/SectionIntro";
import NavigationCard from "@/components/ui/NavigationCard";

const funeralPages = [
  {
    title: "Planning",
    href: "/having-a-funeral-with-solace/planning-a-funeral",
    eyebrow: "Plan ahead",
    description:
      "Explore funeral wishes, advance care planning, key documents, family-led options, and practical resources to help you make informed decisions.",
  },
  {
    title: "Funeral Pricing",
    href: "/pricing",
    eyebrow: "Costs and services",
    description:
      "View Solace’s pricing, service options and costs so you can understand what support is available and make informed choices.",
  },
  {
    title: "Home Funerals in Tasmania",
    href: "/having-a-funeral-with-solace/home-funerals-in-tasmania",
    eyebrow: "Family-led care",
    description:
      "Learn how family-led home funerals can offer more time, choice and involvement, and how Solace can support you through the process.",
  },
];

function HavingAFuneralWithSolace() {
  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>
          Having a Funeral with Solace | Solace End of Life Services
        </title>

        <meta
          name="description"
          content="Explore funeral planning and family-led home funeral support with Solace, including wishes, advance care planning, practical resources and home funerals in Tasmania."
        />

        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/having-a-funeral-with-solace"
        />
      </Head>

      <Header />

      <PageHero
        title="Having a Funeral with Solace"
        image="/img/having-a-funeral-with-solace-b.jpg"
        alt="Having a Funeral with Solace"
      />

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Having a Funeral with Solace" }]} />

          <div className="py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionIntro
                align="left"
                eyebrow="Funeral support"
                title="Practical guidance for planning, choice and family-led care."
                description="Whether you are planning ahead or navigating a death now, Solace can help you understand your options, make informed choices and create arrangements that feel authentic to the person who has died."
                className="mb-12"
              />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {funeralPages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <NavigationCard {...page} />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default HavingAFuneralWithSolace;
