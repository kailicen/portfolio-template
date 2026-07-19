import Image from "next/image";

type PageHeroProps = {
  title: string;
  image: string;
  alt?: string;
  priority?: boolean;
  imagePosition?: string;
};

export default function PageHero({
  title,
  image,
  alt = "",
  priority = false,
  imagePosition = "object-center",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={image}
        alt={alt}
        width={2300}
        height={600}
        priority={priority}
        className={`
          h-48 w-full object-cover
          brightness-[0.72] saturate-[0.78]
          md:h-80
          ${imagePosition}
        `}
      />

      <div className="absolute inset-0 bg-solace-900/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/35" />

      <div className="absolute inset-0 flex items-center justify-center px-5">
        <h1 className="max-w-5xl text-center text-3xl font-semibold uppercase tracking-[0.18em] text-white drop-shadow-sm md:text-5xl md:tracking-[0.22em] 2xl:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
