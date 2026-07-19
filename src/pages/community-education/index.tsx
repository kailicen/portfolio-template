import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Container from "@/components/Container";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PageHero from "@/components/ui/PageHero";
import SectionIntro from "@/components/ui/SectionIntro";
import NavigationCard from "@/components/ui/NavigationCard";

const educationSubPages = [
  {
    title: "Education & Advocacy",
    href: "/community-education/education-advocacy",
    eyebrow: "Ask away",
    description:
      "Learn how we support community education, death literacy, Q&A sessions, workshops and honest conversations about dying and death.",
  },
  {
    title: "Blog",
    href: "/community-education/blog",
    eyebrow: "Thoughts & stories",
    description:
      "Read reflections, insights and discussions about end-of-life care, death literacy, community care and meaningful choice.",
  },
  {
    title: "Media Appearances",
    href: "/community-education/media",
    eyebrow: "In the media",
    description:
      "Explore articles, interviews and media coverage about our work in death care, education, advocacy and community-led funerals.",
  },
  {
    title: "FAQ",
    href: "/community-education/faq",
    eyebrow: "Common questions",
    description:
      "Find answers to frequently asked questions about dying, death, funerals, rights, choices and what may be possible.",
  },
  {
    title: "Resources",
    href: "/community-education/resources",
    eyebrow: "Helpful links",
    description:
      "Access useful resources, organisations, legislation, planning tools and information to support informed end-of-life choices.",
  },
];

export default function CommunityEducationIndex() {
  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>Community Education | Solace End of Life Services</title>
        <meta
          name="description"
          content="Community education, advocacy and resources to help people speak more openly about dying, death, funerals, rights and end-of-life choices."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/community-education"
        />
      </Head>

      <Header />

      <PageHero
        title="Community Education"
        image="/img/community-education-b.jpg"
        alt="Community Education"
      />

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Community Education" }]} />

          <div className="py-8 md:py-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionIntro
                align="left"
                eyebrow="Community education"
                title="Helping people ask better questions about dying, death and care."
                description="We believe demystifying dying and death through community
                engagement is vital. Through education, advocacy, resources and
                honest conversation, we help people understand their rights,
                options and choices."
              />
            </motion.section>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationSubPages.map((page, index) => (
                <motion.article
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <NavigationCard {...page} />
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
