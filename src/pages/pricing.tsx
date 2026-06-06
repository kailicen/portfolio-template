import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import RichContent from "@/components/RichContent";
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
    <div className="bg-white text-black">
      <Head>
        <title>Pricing | Solace Family Led Funerals</title>

        <meta
          name="description"
          content="View pricing for family led funerals in Hobart, including individual service components, cremation packages, burial packages and home vigil options."
        />
      </Head>

      <Header />

      <main>
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

          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h1 className="px-4 text-center text-2xl font-semibold uppercase tracking-[10px] md:text-5xl 2xl:text-7xl">
              Pricing
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 2xl:max-w-7xl">
          <Breadcrumb items={[{ label: "Pricing" }]} />

          <section className="grid items-center gap-8 py-10 md:grid-cols-[1fr_400px] md:py-16">
            <div className="space-y-5 text-base leading-7 text-gray-700 2xl:text-lg">
              <h2 className="text-2xl leading-tight text-gray-900 md:text-3xl">
                HOW MUCH DO{" "}
                <span className="underline decoration-emerald-600 underline-offset-4">
                  FAMILY LED HOME
                </span>{" "}
                FUNERALS COST?
              </h2>

              <p>
                Our prices in their individual components and together as
                packages of services are listed below. All prices are plus GST.
              </p>

              <p>
                We approach our work with the hope that we can empower and skill
                families to care for their person. We encourage families,
                friends and communities to be as involved in the care of their
                person, the planning and all decision making as much as they are
                able and content to do.
              </p>

              <p>
                All packages include our Professional Fee component, giving you
                24-hour support, the initial consultation and up to three home
                visits. These visits are not included in the cremation-only
                option.
              </p>

              <p>
                Transport costs included below cover travel within a 50km radius
                of Hobart.
              </p>

              <p>
                We are happy to meet with you for an initial consultation and
                create a tailored service for you.
              </p>
            </div>

            <Image
              src="/img/pricing-3.jpg"
              alt="Solace family-led funeral support"
              width={400}
              height={400}
              className="h-auto w-full rounded-lg object-cover"
            />
          </section>

          <section className="py-10">
            <div className="mb-6">
              <h2 className="text-2xl text-gray-900 md:text-3xl">
                <span className="underline decoration-emerald-600 underline-offset-4">
                  Individual Components
                </span>
              </h2>

              <p className="mt-3 text-gray-600">
                Select the individual services your family needs.
              </p>
            </div>

            {components.length > 0 ? (
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full border-collapse">
                  <thead className="bg-emerald-700 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-4 text-left font-semibold md:px-6"
                      >
                        Service
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-4 text-right font-semibold md:px-6"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {components.map((component) => (
                      <tr
                        key={component.id}
                        className="odd:bg-white even:bg-gray-50"
                      >
                        <td className="px-4 py-4 text-gray-800 md:px-6">
                          {component.name}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-right font-semibold text-gray-900 md:px-6">
                          {formatCurrency(component.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-600">
                Individual pricing is currently being updated. Please contact us
                for current prices.
              </div>
            )}
          </section>

          <section className="py-10 md:py-16">
            <div className="mb-8">
              <h2 className="text-2xl text-gray-900 md:text-3xl">
                <span className="underline decoration-emerald-600 underline-offset-4">
                  Packages
                </span>
              </h2>

              <p className="mt-3 max-w-3xl text-gray-600">
                Our packages combine commonly requested services. We can also
                tailor a service to your family&apos;s needs.
              </p>
            </div>

            {packages.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {packages.map((pricingPackage) => (
                  <article
                    key={pricingPackage.id}
                    className="flex h-full flex-col rounded-xl border border-emerald-100 bg-emerald-50/60 p-6 md:p-8"
                  >
                    <h3 className="text-2xl font-medium leading-tight text-gray-900">
                      {pricingPackage.name}
                    </h3>

                    <p className="mt-4 text-3xl font-semibold text-emerald-700">
                      {formatCurrency(pricingPackage.price)}

                      <span className="ml-2 text-sm font-normal text-gray-600">
                        + GST
                      </span>
                    </p>

                    <div className="mt-6 flex-1 leading-7 text-gray-700">
                      <RichContent
                        content={pricingPackage.description}
                        variant="compact"
                      />
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-600">
                Package pricing is currently being updated. Please contact us
                for current options.
              </div>
            )}
          </section>

          <section className="mb-16 rounded-xl bg-emerald-700 px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Need a tailored service?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-emerald-50">
              Every family&apos;s situation is different. Contact us to discuss
              the support and services that suit you.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
            >
              Contact Us
            </Link>
          </section>

          {!isUsingContentful && (
            <div className="mb-8 rounded-lg bg-amber-50 p-4 text-center text-sm text-amber-800">
              Pricing content could not be loaded from Contentful.
            </div>
          )}
        </div>
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
