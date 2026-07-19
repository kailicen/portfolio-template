import Image from "next/image";

type SolaceLogoProps = {
  variant?: "default" | "dark" | "light";
  priority?: boolean;
  className?: string;
  sizes?: string;
};

const logoSources = {
  default: "/img/solace-logo.svg",
  dark: "/img/solace-logo.svg",
  light: "/img/solace-logo-light.svg",
};

export default function SolaceLogo({
  variant = "default",
  priority = false,
  className = "",
  sizes = "160px",
}: SolaceLogoProps) {
  return (
    <div className={className}>
      <Image
        src={logoSources[variant]}
        alt="Solace End of Life Services"
        width={1400}
        height={500}
        priority={priority}
        sizes={sizes}
        unoptimized
        className="h-auto w-full"
      />
    </div>
  );
}
