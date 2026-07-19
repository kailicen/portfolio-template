import ButtonLink from "./ui/ButtonLink";
import ImageContentSection from "./ui/ImageContentSection";

export default function Packages() {
  return (
    <ImageContentSection
      eyebrow="Funeral Pricing"
      title="Clear and transparent funeral pricing."
      description="We believe families should have clear information about costs and the freedom to choose the support that suits their circumstances."
      imageSrc="/img/pricing-1.jpg"
      imageAlt="Solace funeral pricing and support"
      background="white"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-solace-600">
        Flexible funeral support
      </p>

      <h3 className="mt-3 text-2xl font-semibold leading-tight text-solace-ink md:text-3xl">
        How much does a funeral cost?
      </h3>

      <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
        <p>
          Our pricing page lists individual service components and our
          cremation-only option, with all prices shown exclusive of GST.
        </p>

        <p>
          We can also meet with you for an initial consultation and create a
          tailored service or package based on your family&apos;s needs.
        </p>
      </div>

      <div className="mt-7">
        <ButtonLink href="/pricing">View Funeral Pricing</ButtonLink>
      </div>
    </ImageContentSection>
  );
}
