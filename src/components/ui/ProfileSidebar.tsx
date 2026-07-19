import Image from "next/image";
import type { ReactNode } from "react";

type ProfileSidebarProps = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  children?: ReactNode;
};

export default function ProfileSidebar({
  name,
  role,
  image,
  imagePosition = "object-center",
  children,
}: ProfileSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-2xl border border-solace-100 bg-solace-surface shadow-sm">
        <div className="px-6 pb-2 pt-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl border-4 border-solace-100 bg-solace-50 shadow-sm">
            <Image
              src={image}
              alt={name}
              fill
              sizes="280px"
              className={`object-cover ${imagePosition}`}
            />
          </div>
        </div>

        <div className="px-7 pb-7 pt-4 md:px-8 md:pb-8">
          <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-solace-600">
            {role}
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-solace-ink">
            {name}
          </h2>

          {children && (
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              {children}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
