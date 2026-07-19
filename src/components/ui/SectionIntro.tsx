type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
  align = "center",
}: SectionIntroProps) {
  const alignmentClasses =
    align === "left" ? "max-w-4xl text-left" : "mx-auto max-w-4xl text-center";

  const descriptionClasses =
    align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl";

  return (
    <div className={`${alignmentClasses} ${className}`}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-solace-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-medium leading-[1.08] text-solace-ink md:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed text-slate-600 ${descriptionClasses}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
