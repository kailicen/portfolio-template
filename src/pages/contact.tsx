import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/ui/PageHero";
import SectionIntro from "@/components/ui/SectionIntro";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>Contact Us | Solace End of Life Services</title>

        <meta
          name="description"
          content="Contact Solace for immediate support, funeral guidance, end-of-life care assistance or general enquiries."
        />

        <link rel="canonical" href="https://solaceendoflife.com.au/contact" />
      </Head>

      <Header />

      <PageHero
        title="Contact Us"
        image="/img/contact-b.jpg"
        alt="Contact Solace End of Life Services"
      />

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Contact Us" }]} />

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-8 md:py-12"
          >
            <SectionIntro
              align="left"
              eyebrow="Contact"
              title="Time-sensitive? Don’t wait. Let’s talk."
              description="Have a question or need support? Send us a message and we will get back to you as soon as possible."
              className="mb-10"
            />

            <div className="w-full max-w-3xl">
              <ContactForm compact />
            </div>
          </motion.section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
