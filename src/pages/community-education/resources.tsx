import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { GetStaticProps } from "next";
import { getResources, isContentfulConfigured } from "@/lib/contentful";
import RichContent from "@/components/RichContent";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import PageHero from "@/components/ui/PageHero";
import SectionIntro from "@/components/ui/SectionIntro";

// Fallback resources data when Contentful is not configured
const fallbackResources = [
  {
    id: "1",
    name: "End of Life Education Centre",
    trainer: "Belinda Brooks",
    location: "Australia",
    link: "https://www.endoflifetraining.com/",
    category: "australia" as const,
  },
  {
    id: "2",
    name: "Preparing The Way",
    trainer: "Helen Callanan",
    location: "Australia/NZ – in person & online",
    link: "https://preparingtheway.com.au",
    category: "australia" as const,
  },
  {
    id: "3",
    name: "End of Life Consultant",
    trainer: "Denise Love",
    location: "Australia – in person & online",
    link: "https://www.deniselove.net/about2",
    category: "australia" as const,
  },
  {
    id: "4",
    name: "Gentle Death Education and Training",
    trainer: "Dr Annetta Mallon",
    location: "Australia/International – in person & online",
    link: "https://www.gdep.com.au/trainingandworkshops",
    category: "australia" as const,
  },
  {
    id: "5",
    name: "Death Walker",
    trainer: "Zenith Virago",
    location: "Australia – in person & online",
    link: "https://www.deathwalker.com.au/",
    category: "australia" as const,
  },
  {
    id: "6",
    name: "International End of Life Doula Association",
    trainer: "Various",
    location: "International – online",
    link: "https://www.inelda.org/",
    category: "overseas" as const,
  },
  {
    id: "7",
    name: "Sacred Crossings",
    trainer: "Olivia Bareham",
    location: "USA – in person & online",
    link: "https://www.sacredcrossings.com/",
    category: "overseas" as const,
  },
  {
    id: "8",
    name: "Tasmanian Legislation - Burials and Cremations",
    trainer: null,
    location: "Tasmania",
    link: "https://www.legislation.tas.gov.au/",
    category: "tasmania" as const,
  },
  {
    id: "9",
    name: "Department of Health Tasmania",
    trainer: null,
    location: "Tasmania",
    link: "https://www.health.tas.gov.au/",
    category: "tasmania" as const,
  },
];

const categoryLabels: Record<string, string> = {
  tasmania: "Tasmania",
  australia: "Australia",
  overseas: "Overseas",
};

interface Resource {
  id: string;
  name: string;
  trainer?: string | null;
  location?: string | null;
  link?: string | null;
  category: string;
  description?: string | null;
  file?: {
    url: string;
    title?: string | null;
    fileName?: string | null;
    contentType?: string | null;
  } | null;
}

interface Props {
  resources: Resource[];
  isUsingContentful: boolean;
}

export default function Resources({ resources, isUsingContentful }: Props) {
  const [activeCategory, setActiveCategory] = useState("tasmania");

  const categories = Object.keys(categoryLabels);

  const activeResources = resources.filter(
    (resource) => resource.category === activeCategory,
  );

  const getResourceLinkLabel = (resource: Resource) => {
    if (resource.link) return "Visit Resource";

    if (resource.file?.contentType === "application/pdf") {
      return resource.file.fileName
        ? `Open PDF - ${resource.file.fileName}`
        : "Open PDF";
    }

    return resource.file?.title || resource.file?.fileName || "Open File";
  };

  const getResourceUrl = (resource: Resource) => {
    if (resource.link) return resource.link;
    if (resource.file?.url) return resource.file.url;
    return null;
  };

  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>Resources | Solace</title>
        <meta
          name="description"
          content="Explore trusted end-of-life resources from Tasmania, Australia, and overseas, including organisations, education, services, and practical information."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/community-education/resources"
        />
      </Head>

      <Header />

      <PageHero
        title="Resources"
        image="/img/resources-b.jpg"
        alt="Trusted end-of-life resources"
      />

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "Community Education", href: "/community-education" },
              { label: "Resources" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="py-8">
              <SectionIntro
                align="left"
                eyebrow="Community Education"
                title="Trusted resources for planning, learning, and end-of-life care."
                description="A curated collection of trusted end-of-life resources from
                Tasmania, Australia, and overseas, including practical tools,
                education providers, organisations, and useful information."
                className="mb-12"
              />

              <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                <aside>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-solace-600">
                    Browse By Region
                  </h3>

                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`
                          w-full rounded-lg border px-4 py-3 text-left
                          font-medium transition-colors
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-solace-300
                          focus-visible:ring-offset-2
                          focus-visible:ring-offset-solace-canvas
                          ${
                            activeCategory === category
                              ? "border-solace-600 bg-solace-600 text-white"
                              : "border-solace-100 bg-solace-surface text-solace-700 hover:border-solace-300 hover:bg-solace-50"
                          }
                        `}
                      >
                        {categoryLabels[category]}
                      </button>
                    ))}
                  </nav>
                </aside>

                <div>
                  <h3 className="mb-6 text-2xl font-semibold text-solace-ink">
                    {categoryLabels[activeCategory]}
                  </h3>

                  {activeResources.length > 0 ? (
                    <div className="space-y-6">
                      {activeResources.map((resource, index) => {
                        const resourceUrl = getResourceUrl(resource);

                        return (
                          <motion.article
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="
                              rounded-2xl
                              border border-solace-100
                              bg-solace-surface
                              p-6
                              shadow-sm
                              transition-all duration-300
                              hover:-translate-y-0.5
                              hover:border-solace-300
                              hover:shadow-md
                              md:p-8
                            "
                          >
                            <h4 className="mb-4 text-xl font-semibold text-solace-ink md:text-2xl">
                              {resource.name}
                            </h4>

                            <div className="space-y-2 text-slate-600 leading-relaxed">
                              {resource.trainer && (
                                <p>
                                  <span className="font-semibold text-solace-ink">
                                    Trainer:
                                  </span>{" "}
                                  {resource.trainer}
                                </p>
                              )}

                              {resource.location && (
                                <p>
                                  <span className="font-semibold text-solace-ink">
                                    Location:
                                  </span>{" "}
                                  {resource.location}
                                </p>
                              )}
                            </div>

                            {resource.description && (
                              <div className="mt-4 text-slate-600 leading-relaxed">
                                <RichContent
                                  content={resource.description}
                                  variant="compact"
                                />
                              </div>
                            )}

                            {resourceUrl ? (
                              <a
                                href={resourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-5 inline-flex max-w-full items-center gap-2 font-medium text-solace-700 transition-colors hover:text-solace-800"
                              >
                                <span className="break-words">
                                  {getResourceLinkLabel(resource)}
                                </span>

                                <ArrowTopRightOnSquareIcon
                                  aria-hidden="true"
                                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                              </a>
                            ) : (
                              <p className="mt-5 italic text-slate-400">
                                No link or file provided
                              </p>
                            )}
                          </motion.article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-solace-100 bg-solace-surface p-6 text-slate-500 shadow-sm md:p-8">
                      No resources found in this category.
                    </div>
                  )}
                </div>
              </div>

              {!isUsingContentful && (
                <div className="mt-12 bg-solace-50 rounded-lg p-6 md:p-8 border border-solace-100">
                  <p className="text-slate-600">
                    Showing sample content. Connect Contentful to manage
                    resources dynamically.
                  </p>
                </div>
              )}
            </section>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const isConfigured = isContentfulConfigured();

  if (isConfigured) {
    try {
      const contentfulResources = await getResources();

      if (contentfulResources.length > 0) {
        return {
          props: {
            resources: contentfulResources.map((resource) => ({
              id: resource.id,
              name: resource.name,
              trainer: resource.trainer || null,
              location: resource.location || null,
              link: resource.link || null,
              category: resource.category,
              description: resource.description || null,
              file: resource.file?.fields?.file?.url
                ? {
                    url: `https:${resource.file.fields.file.url}`,
                    title: resource.file.fields.title ?? null,
                    fileName: resource.file.fields.file.fileName ?? null,
                    contentType: resource.file.fields.file.contentType ?? null,
                  }
                : null,
            })),
            isUsingContentful: true,
          },
          revalidate: 60,
        };
      }
    } catch (error) {
      console.error("Error fetching from Contentful:", error);
    }
  }

  return {
    props: {
      resources: fallbackResources,
      isUsingContentful: false,
    },
  };
};
