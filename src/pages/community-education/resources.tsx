import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

// Sample resources data - will be replaced with Contentful integration
const resourceCategories = [
  {
    id: "australia",
    name: "Australia",
    resources: [
      {
        name: "End of Life Education Centre",
        trainer: "Belinda Brooks",
        location: "Australia",
        link: "https://www.endoflifetraining.com/",
      },
      {
        name: "Preparing The Way",
        trainer: "Helen Callanan",
        location: "Australia/NZ – in person & online",
        link: "https://preparingtheway.com.au",
      },
      {
        name: "End of Life Consultant",
        trainer: "Denise Love",
        location: "Australia – in person & online",
        link: "https://www.deniselove.net/about2",
      },
      {
        name: "Gentle Death Education and Training",
        trainer: "Dr Annetta Mallon",
        location: "Australia/International – in person & online",
        link: "https://www.gdep.com.au/trainingandworkshops",
      },
      {
        name: "Death Walker",
        trainer: "Zenith Virago",
        location: "Australia – in person & online",
        link: "https://www.deathwalker.com.au/",
      },
    ],
  },
  {
    id: "overseas",
    name: "Overseas",
    resources: [
      {
        name: "International End of Life Doula Association",
        trainer: "Various",
        location: "International – online",
        link: "https://www.inelda.org/",
      },
      {
        name: "Sacred Crossings",
        trainer: "Olivia Bareham",
        location: "USA – in person & online",
        link: "https://www.sacredcrossings.com/",
      },
    ],
  },
  {
    id: "legislation",
    name: "Tasmanian Legislation",
    resources: [
      {
        name: "Tasmanian Legislation - Burials and Cremations",
        trainer: null,
        location: "Tasmania",
        link: "https://www.legislation.tas.gov.au/",
      },
      {
        name: "Department of Health Tasmania",
        trainer: null,
        location: "Tasmania",
        link: "https://www.health.tas.gov.au/",
      },
    ],
  },
  {
    id: "training",
    name: "End of Life Training",
    resources: [
      {
        name: "End of Life Education Centre",
        trainer: "Belinda Brooks",
        location: "Australia",
        link: "https://www.endoflifetraining.com/",
      },
      {
        name: "Preparing The Way",
        trainer: "Helen Callanan",
        location: "Australia/NZ – in person & online",
        link: "https://preparingtheway.com.au",
      },
      {
        name: "End of Life Consultant",
        trainer: "Denise Love",
        location: "Australia – in person & online",
        link: "https://www.deniselove.net/about2",
      },
      {
        name: "Gentle Death Education and Training",
        trainer: "Dr Annetta Mallon",
        location: "Australia/International – in person & online",
        link: "https://www.gdep.com.au/trainingandworkshops",
      },
    ],
  },
  {
    id: "tools",
    name: "End of Life Tools",
    resources: [
      {
        name: "Advance Care Planning Australia",
        trainer: null,
        location: "Australia",
        link: "https://www.advancecareplanning.org.au/",
      },
      {
        name: "The Groundswell Project",
        trainer: null,
        location: "Australia",
        link: "https://www.thegroundswellproject.com/",
      },
      {
        name: "Dying to Know Day",
        trainer: null,
        location: "Australia",
        link: "https://www.dyingtoknowday.org/",
      },
    ],
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("training");

  const activeResources =
    resourceCategories.find((cat) => cat.id === activeCategory)?.resources || [];

  return (
    <>
      <Head>
        <title>Resources - Solace</title>
        <meta
          name="description"
          content="End of life resources including training providers, legislation, and tools for death and dying in Australia."
        />
      </Head>
      <Header />
      <main className="pt-10 md:pt-28 min-h-screen bg-gray-50">
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
            className="py-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">
              A curated collection of end of life training providers,
              legislation references, and helpful tools to support your journey.
            </p>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Category Sidebar */}
              <nav className="md:w-64 flex-shrink-0">
                <ul className="space-y-1">
                  {resourceCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          activeCategory === category.id
                            ? "bg-emerald-600 text-white font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Resources List */}
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
                  {activeResources.map((resource, index) => (
                    <motion.div
                      key={index}
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
                      <p className="text-gray-600 mb-3">
                        <span className="font-medium">Location:</span>{" "}
                        <em>{resource.location}</em>
                      </p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline"
                      >
                        {resource.link}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
              <p className="text-gray-600">
                More resources coming soon. Content will be managed through
                Contentful.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
