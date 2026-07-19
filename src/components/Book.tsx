import ButtonLink from "./ui/ButtonLink";
import ImageContentSection from "./ui/ImageContentSection";

export default function Book() {
  return (
    <ImageContentSection
      eyebrow="Our Book"
      title="A Heartfelt Undertaking."
      description="Bec Lyons’ book grew from her Churchill Fellowship research into death, ceremony and alternative approaches to end-of-life care."
      imageSrc="/img/book-2.jpg"
      imageAlt="A Heartfelt Undertaking by Bec Lyons"
      background="canvas"
      reverse
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-solace-600">
        By Bec Lyons
      </p>

      <h3 className="mt-3 text-2xl font-semibold leading-tight text-solace-ink md:text-3xl">
        A book about death, ceremony and more meaningful approaches to care.
      </h3>

      <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
        <p>
          In 2019, Bec Lyons travelled to six countries on a Churchill
          Fellowship, researching the human relationship to death and ceremony
          through alternative approaches and technologies.
        </p>

        <p>
          <em>A Heartfelt Undertaking</em> is the result of that research,
          bringing together insight, reflection and a deep commitment to
          changing how we approach dying, death and ceremony.
        </p>
      </div>

      <div className="mt-7">
        <ButtonLink href="/book">Learn About the Book</ButtonLink>
      </div>
    </ImageContentSection>
  );
}
