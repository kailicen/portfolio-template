import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Head from "next/head";
import { motion } from "framer-motion";
import ButtonLink from "@/components/ui/ButtonLink";
import ProfileSidebar from "@/components/ui/ProfileSidebar";
import PageHero from "@/components/ui/PageHero";

function EdwinQuilliam() {
  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>Edwin Quilliam | About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about Edwin Quilliam, co-founder of Solace End of Life Services, Funeral Celebrant and advocate for honest conversations about dying, death and end-of-life care."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/about/edwin-quilliam"
        />
      </Head>

      <Header />

      <PageHero
        title="Edwin Quilliam"
        image="/img/who-are-we-b.jpg"
        alt="Edwin Quilliam"
      />

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "Who Are We?", href: "/about/who-we-are" },
              { label: "Edwin Quilliam" },
            ]}
          />

          <div className="py-8 md:py-12">
            <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">
              <ProfileSidebar
                name="Edwin Quilliam"
                role="Co-founder • Funeral Celebrant"
                image="/img/edwin.jpg"
              >
                <p>
                  <span className="font-semibold text-solace-ink">Email:</span>{" "}
                  <a
                    href="mailto:edwin@solaceendoflife.com.au"
                    className="text-solace-700 underline decoration-solace-300 underline-offset-4 hover:text-solace-800"
                  >
                    edwin@solaceendoflife.com.au
                  </a>
                </p>
              </ProfileSidebar>

              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                  Raised on the North-West Coast of Tasmania, Edwin is a country
                  boy at heart with a deep respect for family, community and
                  honest conversation.
                </p>

                <div className="mt-8 space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Raised on the North-West coast of Tasmania, Edwin is a
                    country boy at heart who spent his early years in the
                    building industry and on the family farm. In 2003, a desire
                    to help others drew him to Hobart, where he studied
                    counselling and found his way into the funeral industry and
                    into a lasting partnership with Bec.
                  </p>

                  <p>
                    Edwin’s vision for a place where people can find honest,
                    accessible information about death and dying, and ask the
                    questions they’re often afraid to voice gave rise to You n’
                    Taboo. That same belief led Edwin and Bec to build a
                    family-owned, community-based funeral business in 2019,
                    rooted in the belief that end-of-life care deserves genuine
                    compassion and connection.
                  </p>

                  <p>
                    Now semi-retired, Edwin continues working as a Funeral
                    Celebrant and volunteers his time supporting those in his
                    community living with a life-limiting diagnosis. He’s the
                    kind of person you’ll find talking openly about dying and
                    death with family, friends, and strangers alike, because he
                    believes those conversations matter.
                  </p>

                  <p>
                    When he’s not in the funeral space, you’ll find him outdoors
                    on a sunny day, tending his veggie patch or fruit trees, and
                    making time for the people he loves most.
                  </p>
                </div>

                <div className="mt-10">
                  <ButtonLink href="/about/who-we-are" variant="outline">
                    Back to Who Are We?
                  </ButtonLink>
                </div>
              </motion.section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default EdwinQuilliam;
