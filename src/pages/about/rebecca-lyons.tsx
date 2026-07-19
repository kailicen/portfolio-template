import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import ProfileSidebar from "@/components/ui/ProfileSidebar";
import PageHero from "@/components/ui/PageHero";

function RebeccaLyons() {
  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>Rebecca Lyons | About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about Rebecca Lyons, co-founder of Solace End of Life Services, End of Life Doula, Funeral Director, Churchill Fellow, author and advocate for family-led death care."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/about/rebecca-lyons"
        />
      </Head>

      <Header />

      <PageHero
        title="Rebecca Lyons"
        image="/img/who-are-we-b.jpg"
        alt="Rebecca Lyons"
      />

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "Who Are We?", href: "/about/who-we-are" },
              { label: "Rebecca Lyons" },
            ]}
          />

          <div className="py-8 md:py-12">
            <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">
              <ProfileSidebar
                name="Rebecca Lyons"
                role="Co-founder • Funeral Director • End of Life Doula"
                image="/img/bec.jpg"
                imagePosition="object-[45%_35%]"
              >
                <p>
                  <span className="font-semibold text-solace-ink">
                    Media and info:
                  </span>{" "}
                  <a
                    href="https://linktr.ee/BecLyons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-solace-700 underline decoration-solace-300 underline-offset-4 hover:text-solace-800"
                  >
                    BecLyons
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-solace-ink">Email:</span>{" "}
                  <a
                    href="mailto:bec@solaceendoflife.com.au"
                    className="text-solace-700 underline decoration-solace-300 underline-offset-4 hover:text-solace-800"
                  >
                    bec@solaceendoflife.com.au
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
                  Rebecca Lyons, known to many as Bec, is a funeral director,
                  End of Life Doula, educator, author and long-time advocate for
                  more personal, family-led approaches to death care.
                </p>

                <div className="mt-8 space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Bec hails from the Blue Mountains in NSW but made Tasmania
                    her home in 2006. Over her career she has worked in various
                    industries including finance, real estate and the law, but
                    in 2011 she found her path into the funeral industry and
                    stayed there until mid-2017.
                  </p>

                  <p>
                    During that time she worked across the many roles offered in
                    the contemporary funeral industry; including pre planning,
                    administration, mortuary, funeral arranging and directing.
                    Retraining as an End of Life Doula and becoming an
                    independent Funeral Director, she has worked in home based
                    death care and family led funerals ever since.
                  </p>

                  <p>
                    Bec spent years actively working to educate the community
                    through You n’ Taboo, which is the education and advocacy
                    service she co-founded with Edwin in 2016.
                  </p>

                  <p>
                    In 2018 they began Solace End of Life Services, a local
                    Tasmanian funeral home. Later that year, Bec was awarded a
                    Churchill Fellowship to undertake international research and
                    report on ‘the human relationship to death and ceremony
                    through alternate technologies and approaches’. A link to
                    her Churchill report can be found by{" "}
                    <a
                      href="https://www.churchilltrust.com.au/project/to-investigate-human-relationships-to-death-and-ceremony-through-alternate-approaches-and-technologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-solace-700 hover:text-solace-800 underline"
                    >
                      clicking here
                    </a>
                    .
                  </p>

                  <p>
                    It was the findings from her Churchill research that led her
                    to gather people to form the{" "}
                    <a
                      href="https://www.ahfa.org.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-solace-700 hover:text-solace-800 underline"
                    >
                      Australian Home Funeral Alliance
                    </a>
                    , a charity that was co-founded in 2020 by some brilliant
                    people eager for change.
                  </p>

                  <p>
                    Bec’s Churchill research finally culminated in her book,{" "}
                    <a
                      href="https://solaceendoflife.com.au/book"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-solace-700 hover:text-solace-800 underline"
                    >
                      <em>A Heartfelt Undertaking</em>
                    </a>
                    , and then in 2022 she was selected to give a{" "}
                    <a
                      href="https://youtu.be/_oQz_8v52a0?si=DOEQpB54yPck_mqC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-solace-700 hover:text-solace-800 underline"
                    >
                      TEDx Talk on home funerals
                    </a>
                    .
                  </p>

                  <p>
                    Bec has been the President of the{" "}
                    <a
                      href="https://ndan.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-solace-700 hover:text-solace-800 underline"
                    >
                      Natural Death Advocacy Network
                    </a>{" "}
                    since 2020.
                  </p>

                  <p>
                    In her spare time, she enjoys reading, singing, a good
                    massage, writing, photography, attending the theatre and
                    travelling but what makes her most content is time with her
                    family and chosen communities.
                  </p>

                  <p>
                    She loves being out in the community raising awareness,
                    promoting honest conversations and advocating for positive
                    change.
                  </p>

                  <p>
                    The subjects of death and dying, natural burial and the DIY
                    approach to death care are her passion and she loves being
                    out in the community raising awareness and promoting good
                    honest conversations, she is a dedicated advocate for
                    positive change.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink
                    href="https://linktr.ee/BecLyons"
                    variant="primary"
                    external
                  >
                    Media and Info
                  </ButtonLink>

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

export default RebeccaLyons;
