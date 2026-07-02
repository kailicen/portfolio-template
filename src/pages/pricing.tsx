import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import RichContent from "@/components/RichContent";
import { motion } from "framer-motion";
import {
  getPricingComponents,
  getPricingPackages,
  isContentfulConfigured,
  PricingComponentEntry,
  PricingPackageEntry,
} from "@/lib/contentful";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";

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

export default function Pricing({
  components,
  packages,
  isUsingContentful,
}: PricingProps) {
  return (
    <>
      <Head>
        <title>Pricing | Solace Family Led Funerals</title>
        <meta
          name="description"
          content="View pricing for family led funerals in Hobart, including individual service components, cremation packages, burial packages and home vigil options."
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
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Pricing
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Pricing" }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="py-8">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="text-sm font-medium text-emerald-600 uppercase tracking-[4px] mb-4">
                    Family Led Funeral Pricing
                  </p>

                  <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-800 mb-6">
                    How much do family-led home funerals cost?
                  </h2>

                  <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p>
                      Our prices in their individual components and together as
                      packages of services are listed below. All prices are plus
                      GST.
                    </p>

                    <p>
                      We approach our work with the hope that we can empower and
                      skill families to care for their person. We encourage
                      families, friends and communities to be as involved in the
                      care of their person, the planning and all decision making
                      as much as they are able and content to do.
                    </p>

                    <p>
                      All Packages outlined below include our Professional Fee
                      component, giving you 24 hour support, the initial
                      consultation, and up to three home visits (these visits
                      are not included in the cremation only option).
                    </p>

                    <p>
                      The transport costs included below encompass travel within
                      a 50km radius of Hobart.
                    </p>

                    <p>
                      We are happy to meet with you for an initial consultation
                      and create a tailored service for you.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Image
                    src="/img/pricing-3.jpg"
                    alt="Solace family-led funeral support"
                    width={400}
                    height={400}
                    className="w-full max-w-sm rounded-lg shadow-sm border border-gray-200 object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="py-8">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  Individual Components
                </h2>

                <p className="text-lg text-gray-600 max-w-3xl">
                  Select the individual services your family needs.
                </p>
              </div>

              {components.length > 0 ? (
                <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
                  <table className="w-full border-collapse">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-4 md:px-6 text-left font-semibold"
                        >
                          Service
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-4 md:px-6 text-right font-semibold"
                        >
                          Price
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {components.map((component) => (
                        <tr
                          key={component.id}
                          className="odd:bg-white even:bg-gray-50 hover:bg-emerald-50/50 transition-colors"
                        >
                          <td className="px-4 py-4 md:px-6 text-gray-700">
                            {component.name}
                          </td>

                          <td className="px-4 py-4 md:px-6 text-right font-semibold text-gray-800 whitespace-nowrap">
                            {formatCurrency(component.price)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200 text-gray-600">
                  Individual pricing is currently being updated. Please contact
                  us for current prices.
                </div>
              )}
            </section>

            <section className="py-8">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  Packages
                </h2>

                <p className="text-lg text-gray-600 max-w-3xl">
                  Our packages combine commonly requested services. We can also
                  tailor a service to your family&apos;s needs.
                </p>
              </div>

              {packages.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {packages.map((pricingPackage, index) => (
                    <motion.article
                      key={pricingPackage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex h-full flex-col bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 hover:border-emerald-200 transition-colors"
                    >
                      <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
                        {pricingPackage.name}
                      </h3>

                      <p className="mt-4 text-3xl font-semibold text-emerald-600">
                        {formatCurrency(pricingPackage.price)}
                        <span className="ml-2 text-sm font-normal text-gray-500">
                          + GST
                        </span>
                      </p>

                      <div className="mt-6 flex-1 text-gray-600 leading-relaxed">
                        <RichContent
                          content={pricingPackage.description}
                          variant="compact"
                        />
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200 text-gray-600">
                  Package pricing is currently being updated. Please contact us
                  for current options.
                </div>
              )}
            </section>

            <section className="py-8">
              <div className="bg-emerald-700 text-white rounded-2xl p-6 md:p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Need a tailored service?
                </h2>

                <p className="mt-4 text-emerald-50 leading-relaxed max-w-3xl">
                  Every family&apos;s situation is different. We are happy to
                  meet with you for an initial consultation, talk through the
                  support you need, and create a service that suits your family.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                  >
                    Contact Solace
                  </Link>

                  {/* <Link
                    href="/contact"
                    className="inline-block px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
                  >
                    Ask About Pricing
                  </Link> */}
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
    </>
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
