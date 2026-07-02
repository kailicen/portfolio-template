import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { GetStaticProps } from "next";
import { getResources, isContentfulConfigured } from "@/lib/contentful";
import Image from "next/image";
import RichContent from "@/components/RichContent";

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
    <>
      <Head>
        <title>Resources | Solace</title>
        <meta
          name="description"
          content="Explore trusted end-of-life resources from Tasmania, Australia, and overseas, including organisations, education, services, and practical information."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="Community Education"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Resources
          </h1>
        </div>
      </div>

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
              <p className="text-sm font-medium text-emerald-600 uppercase tracking-[4px] mb-4">
                Community Education
              </p>

              <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-800 mb-6 max-w-4xl">
                Trusted resources for planning, learning, and end-of-life care.
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
                A curated collection of trusted end-of-life resources from
                Tasmania, Australia, and overseas, including practical tools,
                education providers, organisations, and useful information.
              </p>

              <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                <aside>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-[3px] mb-4">
                    Browse By Region
                  </h3>

                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`w-full rounded-lg px-4 py-3 text-left transition-colors ${
                          activeCategory === category
                            ? "bg-emerald-600 text-white font-medium"
                            : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-emerald-200 hover:text-emerald-600"
                        }`}
                      >
                        {categoryLabels[category]}
                      </button>
                    ))}
                  </nav>
                </aside>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
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
                            className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 hover:border-emerald-200 transition-colors"
                          >
                            <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                              {resource.name}
                            </h4>

                            <div className="space-y-2 text-gray-600 leading-relaxed">
                              {resource.trainer && (
                                <p>
                                  <span className="font-medium text-gray-700">
                                    Trainer:
                                  </span>{" "}
                                  {resource.trainer}
                                </p>
                              )}

                              {resource.location && (
                                <p>
                                  <span className="font-medium text-gray-700">
                                    Location:
                                  </span>{" "}
                                  {resource.location}
                                </p>
                              )}
                            </div>

                            {resource.description && (
                              <div className="mt-4 text-gray-600 leading-relaxed">
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
                                className="mt-5 inline-block text-emerald-600 font-medium hover:underline break-all"
                              >
                                {getResourceLinkLabel(resource)} &rarr;
                              </a>
                            ) : (
                              <p className="mt-5 text-gray-400 italic">
                                No link or file provided
                              </p>
                            )}
                          </motion.article>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 text-gray-500">
                      No resources found in this category.
                    </div>
                  )}
                </div>
              </div>

              {!isUsingContentful && (
                <div className="mt-12 bg-emerald-50 rounded-lg p-6 md:p-8 border border-emerald-100">
                  <p className="text-gray-600">
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
    </>
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
