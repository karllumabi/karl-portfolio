import Image from "next/image";

import type { CaseStudyScreen } from "../../data/case-studies/types";

type ScreenCardProps = CaseStudyScreen & {
  index: number;
};

export default function ScreenCard({
  image,
  title,
  description,
  index,
}: ScreenCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[28px]">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)] p-5 sm:p-8">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={`${title} interface screen`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
          />
        </div>

        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[9px] tracking-[0.15em] text-white/70 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <h3 className="text-xl leading-tight tracking-[-0.025em] text-[var(--text)] sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 font-mono text-xs leading-[1.8] text-[var(--muted)] sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}