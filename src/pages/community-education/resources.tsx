import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
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
    category: "tasmanian-legislation" as const,
  },
  {
    id: "9",
    name: "Department of Health Tasmania",
    trainer: null,
    location: "Tasmania",
    link: "https://www.health.tas.gov.au/",
    category: "tasmanian-legislation" as const,
  },
  {
    id: "10",
    name: "End of Life Education Centre",
    trainer: "Belinda Brooks",
    location: "Australia",
    link: "https://www.endoflifetraining.com/",
    category: "end-of-life-training" as const,
  },
  {
    id: "11",
    name: "Preparing The Way",
    trainer: "Helen Callanan",
    location: "Australia/NZ – in person & online",
    link: "https://preparingtheway.com.au",
    category: "end-of-life-training" as const,
  },
  {
    id: "12",
    name: "Advance Care Planning Australia",
    trainer: null,
    location: "Australia",
    link: "https://www.advancecareplanning.org.au/",
    category: "end-of-life-tools" as const,
  },
  {
    id: "13",
    name: "The Groundswell Project",
    trainer: null,
    location: "Australia",
    link: "https://www.thegroundswellproject.com/",
    category: "end-of-life-tools" as const,
  },
  {
    id: "14",
    name: "Dying to Know Day",
    trainer: null,
    location: "Australia",
    link: "https://www.dyingtoknowday.org/",
    category: "end-of-life-tools" as const,
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
    (r) => r.category === activeCategory,
  );

  return (
    <>
      <Head>
        <title>Resources - Solace</title>
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
      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl flex-1">
        <div className="max-w-6xl mx-auto 2xl:max-w-7xl px-4 md:px-5">
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
            className="px-5"
          >
            <div className="px-4 md:px-10 py-8">
              <p className="text-lg text-gray-600 max-w-3xl mb-12">
                A curated collection of trusted end-of-life resources from
                Tasmania, Australia, and overseas.
              </p>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Category Sidebar */}
                <nav className="md:w-64 flex-shrink-0">
                  <ul className="space-y-1">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            activeCategory === category
                              ? "bg-emerald-600 text-white font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {categoryLabels[category]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Resources List */}
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg shadow-sm divide-y divide-gray-300 border border-gray-200">
                    {activeResources.length > 0 ? (
                      activeResources.map((resource, index) => (
                        <motion.div
                          key={resource.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="p-6"
                        >
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {resource.name}
                          </h3>
                          {resource.trainer && (
                            <p className="text-gray-600 mb-1">
                              <span className="font-medium">Trainer:</span>{" "}
                              {resource.trainer}
                            </p>
                          )}
                          {resource.location && (
                            <p className="text-gray-600 mb-3">
                              <span className="font-medium">Location:</span>{" "}
                              <em>{resource.location}</em>
                            </p>
                          )}
                          {resource.link ? (
                            <a
                              href={resource.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 hover:underline break-all"
                            >
                              {resource.link}
                            </a>
                          ) : resource.file?.url ? (
                            <a
                              href={resource.file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 hover:underline"
                            >
                              {resource.file.contentType === "application/pdf"
                                ? `Open PDF${resource.file.fileName ? ` - ${resource.file.fileName}` : ""}`
                                : resource.file.title ||
                                  resource.file.fileName ||
                                  "Open file"}
                            </a>
                          ) : (
                            <p className="text-gray-400 italic">
                              No link or file provided
                            </p>
                          )}
                          {resource.description && (
                            <RichContent
                              content={resource.description}
                              variant="compact"
                            />
                          )}
                        </motion.div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-gray-500">
                        No resources found in this category.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {!isUsingContentful && (
                <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
                  <p className="text-gray-600">
                    Showing sample content. Connect Contentful to manage
                    resources dynamically.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
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

  // Fallback to static data
  return {
    props: {
      resources: fallbackResources,
      isUsingContentful: false,
    },
  };
};
