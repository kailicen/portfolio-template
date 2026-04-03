import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

function WhereWeComeFrom() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Where Have We Come From? - About - Solace End of Life Services</title>
        <meta
          name="description"
          content="Our journey from compassion and frustration to advocacy for better death care practices in Australia."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="About - Where We Come From"
          width={2300}
          height={300}
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white px-4">
          <h1 className="text-xl md:text-4xl font-bold tracking-[10px] md:tracking-[20px] 2xl:text-7xl text-center">
            WHERE HAVE WE COME FROM?
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full 2xl:max-w-5xl flex-1">
        <Breadcrumb
          items={[
            { label: "About", href: "/about" },
            { label: "Where Have We Come From?" },
          ]}
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 md:px-10 py-8 space-y-6 text-gray-700 leading-relaxed"
        >
          <p className="text-lg md:text-xl text-gray-900 font-medium">
            We come from a place of compassion.
          </p>
          <p className="text-lg md:text-xl text-gray-900 font-medium">
            We come from a place of frustration.
          </p>
          <p className="text-lg md:text-xl text-gray-900 font-medium">
            We come from a place of honesty, transparency and an absolute desire
            to facilitate a way in which people can make good, informed choices
            that are the right choices for them.
          </p>

          <div className="w-16 h-1 bg-emerald-600 my-8" />

          <p>
            We, and many others around the globe, are working on breaking the
            taboos of death wide open to examine them, break them down and give
            the community the tools and resources they need to put them back
            together in a way that best fits their circumstances, their values
            and their families.
          </p>

          <p>
            Our vision is to see the way we do death and dying in this country
            become family led, in as big or as small a way as the individuals
            involved are comfortable with. We need to do death and dying well in
            this country. We need to do funerals and ceremonies for our dead,
            better than we are. And we need to reclaim some of the control over
            our dead that has been taken away over the last 100 years.
          </p>

          <p>
            Prior to the turn of the century, care for the dead belonged to the
            community. It was community knowledge and families cared for their
            people in the home regularly. We advocate a return to that in a way;
            with the knowledge available in modern society it is easier now than
            before in many ways.
          </p>

          <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
            <p className="text-lg italic text-gray-800">
              Our journey as a family and as a community through the stages of
              grief and bereavement will only ever be made a gentler path by
              allowing ourselves the control and choice over how it is we deal
              with and spend time with our dead.
            </p>
          </blockquote>
        </motion.article>
      </div>

      <Footer />
    </div>
  );
}

export default WhereWeComeFrom;
