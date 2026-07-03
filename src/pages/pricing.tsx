import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import RichContent from "@/components/RichContent";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import type { GetStaticProps } from "next";
import {
  getPricingComponents,
  getPricingPackages,
  isContentfulConfigured,
  PricingComponentEntry,
  PricingPackageEntry,
} from "@/lib/contentful";

interface PricingProps {
  components: PricingComponentEntry[];
  packages: PricingPackageEntry[];
  isUsingContentful: boolean;
}

function formatCurrency(price: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
  }).format(price);
}

const categoryOrder = [
  "Professional and ceremony services",
  "Care and preparation",
  "Transfers, permits and cremation",
];

function groupPricingComponents(components: PricingComponentEntry[]) {
  return categoryOrder
    .map((category) => ({
      category,
      components: components.filter(
        (component) => component.category === category,
      ),
    }))
    .filter((group) => group.components.length > 0);
}

export default function Pricing({
  components,
  packages,
  isUsingContentful,
}: PricingProps) {
  const groupedComponents = groupPricingComponents(components);

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Head>
        <title>Funeral Pricing | Solace End of Life Services</title>

        <meta
          name="description"
          content="View Solace funeral pricing in Hobart, including individual service costs, cremation-only pricing and tailored funeral support."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/pricing-b.jpg"
          alt="Solace funeral services"
          width={2300}
          height={300}
          priority
          className="h-48 w-full object-cover md:h-80"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-white">
          <h1 className="text-center text-2xl font-semibold uppercase tracking-[10px] md:text-5xl 2xl:text-7xl">
            Funeral Pricing
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Funeral Pricing" }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="py-8 md:py-12">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-emerald-600">
                    Funeral Pricing
                  </p>

                  <h2 className="mb-6 text-3xl font-semibold leading-tight text-gray-800 md:text-4xl 2xl:text-5xl">
                    How much does a funeral cost?
                  </h2>

                  <div className="space-y-5 leading-relaxed text-gray-600">
                    <p>Below is our list of prices, exclusive of GST.</p>

                    <p>
                      We are happy to meet with you for an initial consultation
                      and create a tailored service or package for you.
                    </p>

                    <p>
                      The transport costs included below encompass travel within
                      a 50km radius of Hobart.
                    </p>

                    <p>
                      We approach our work with the hope that we can empower and
                      equip families to care for their person.
                    </p>

                    <p>
                      We encourage families, friends and communities to be as
                      involved in the care of their person, the planning and all
                      decision-making as much as they are able and comfortable
                      to be.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Image
                    src="/img/pricing-3.jpg"
                    alt="Solace funeral support"
                    width={400}
                    height={400}
                    className="w-full max-w-sm rounded-xl border border-gray-200 object-cover shadow-sm"
                  />
                </div>
              </div>
            </section>

            <section className="py-8">
              <div className="mb-8">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
                  Choose the support you need
                </p>

                <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
                  Individual Components
                </h2>

                <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                  Select the individual services that suit your family&apos;s
                  needs. We can help you understand which components may be
                  appropriate for your circumstances.
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  All prices shown are exclusive of GST.
                </p>
              </div>

              {groupedComponents.length > 0 ? (
                <div className="max-w-5xl space-y-8">
                  {groupedComponents.map((group) => (
                    <div key={group.category}>
                      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <div className="bg-emerald-50 px-5 py-4 md:px-6">
                          <h3 className="text-lg font-semibold text-emerald-900">
                            {group.category}
                          </h3>
                        </div>

                        {/* Mobile layout */}
                        <div className="divide-y divide-gray-200 sm:hidden">
                          {group.components.map((component, index) => (
                            <div
                              key={component.id}
                              className={`px-5 py-4 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }`}
                            >
                              <p className="leading-relaxed text-gray-700">
                                {component.name}
                              </p>

                              <p className="mt-2 text-lg font-semibold text-emerald-700">
                                {formatCurrency(component.price)}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Tablet and desktop table */}
                        <table className="hidden w-full border-collapse sm:table">
                          <thead className="bg-emerald-700 text-white">
                            <tr>
                              <th
                                scope="col"
                                className="px-4 py-3.5 text-left font-semibold md:px-6"
                              >
                                Service
                              </th>

                              <th
                                scope="col"
                                className="px-4 py-3.5 text-right font-semibold md:px-6"
                              >
                                Price
                              </th>
                            </tr>
                          </thead>

                          <tbody className="divide-y divide-gray-200">
                            {group.components.map((component, index) => (
                              <tr
                                key={component.id}
                                className={`transition-colors hover:bg-emerald-50/60 ${
                                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                              >
                                <td className="px-4 py-3.5 text-gray-700 md:px-6">
                                  {component.name}
                                </td>

                                <td className="whitespace-nowrap px-4 py-3.5 text-right font-semibold text-gray-800 md:px-6">
                                  {formatCurrency(component.price)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-gray-600 shadow-sm">
                  Individual pricing is currently being updated. Please contact
                  us for current prices.
                </div>
              )}
            </section>

            <section className="py-8">
              <div className="mb-8">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
                  Simple cremation option
                </p>

                <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
                  Cremation Only
                </h2>

                <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
                  Our cremation-only option provides a simple arrangement
                  without a funeral service. Please review the inclusions below,
                  or contact us to discuss whether this option is suitable for
                  your family.
                </p>
              </div>

              {packages.length > 0 ? (
                <div className="max-w-2xl">
                  {packages.map((pricingPackage, index) => (
                    <motion.article
                      key={pricingPackage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-colors hover:border-emerald-300 md:p-8"
                    >
                      <h3 className="text-2xl font-semibold leading-tight text-gray-800">
                        {pricingPackage.name}
                      </h3>

                      <p className="mt-4 text-3xl font-semibold text-emerald-700">
                        {formatCurrency(pricingPackage.price)}

                        <span className="ml-2 text-sm font-normal text-gray-500">
                          + GST
                        </span>
                      </p>

                      <div className="mt-6 flex-1 leading-relaxed text-gray-600">
                        <RichContent
                          content={pricingPackage.description}
                          variant="compact"
                        />
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="max-w-2xl rounded-xl border border-gray-200 bg-gray-50 p-8 text-gray-600 shadow-sm">
                  Cremation-only pricing is currently being updated. Please
                  contact us for current pricing.
                </div>
              )}
            </section>

            <section className="py-8 md:pb-12">
              <div className="rounded-2xl bg-emerald-700 p-6 text-white md:p-8">
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Need a tailored service?
                </h2>

                <p className="mt-4 max-w-3xl leading-relaxed text-emerald-50">
                  Every family&apos;s situation is different. We are happy to
                  meet with you for an initial consultation, discuss the support
                  you need and create a service or package that suits your
                  family.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-lg bg-white px-6 py-3 font-medium text-emerald-700 transition-colors hover:bg-emerald-50"
                  >
                    Contact Solace
                  </Link>
                </div>
              </div>
            </section>

            {!isUsingContentful && (
              <div className="mb-12 rounded-lg bg-amber-50 p-4 text-center text-sm text-amber-800">
                Pricing content could not be loaded from Contentful.
              </div>
            )}
          </motion.div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<PricingProps> = async () => {
  const isConfigured = isContentfulConfigured();

  if (!isConfigured) {
    return {
      props: {
        components: [],
        packages: [],
        isUsingContentful: false,
      },
      revalidate: 60,
    };
  }

  try {
    const [components, packages] = await Promise.all([
      getPricingComponents(),
      getPricingPackages(),
    ]);

    return {
      props: {
        components,
        packages,
        isUsingContentful: components.length > 0 || packages.length > 0,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error loading pricing content:", error);

    return {
      props: {
        components: [],
        packages: [],
        isUsingContentful: false,
      },
      revalidate: 60,
    };
  }
};
