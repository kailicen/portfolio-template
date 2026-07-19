import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import NavigationCard from "@/components/ui/NavigationCard";
import SectionIntro from "@/components/ui/SectionIntro";
import Head from "next/head";
import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

const aboutPages = [
  {
    title: "Who Are We?",
    href: "/about/who-we-are",
    eyebrow: "Our people",
    description:
      "Meet Edwin and Bec, the people behind Solace End of Life Services, and learn about the experience and values they bring to this work.",
  },
  {
    title: "How Did We Begin?",
    href: "/about/how-did-we-begin",
    eyebrow: "Our story",
    description:
      "Learn how Solace began, and why community-led death care, education, advocacy and informed choice sit at the heart of what we do.",
  },
];

export default function AboutIndex() {
  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about Solace End of Life Services, our founders Edwin and Bec, our story, and our commitment to changing how we approach dying, death and grief."
        />
        <link rel="canonical" href="https://solaceendoflife.com.au/about" />
      </Head>

      <Header />

      <PageHero
        title="About"
        image="/img/about-b.jpg"
        alt="About Solace End of Life Services"
      />

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "About" }]} />

          <div className="py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionIntro
                align="left"
                eyebrow="About Solace"
                title="Compassionate, honest and community-centred end-of-life care."
                description="Solace comes from a place of compassion, honesty and transparency. Learn more about who we are, how we began, and why we are passionate about changing the conversation around dying, death and grief."
              />
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {aboutPages.map((page, index) => (
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
