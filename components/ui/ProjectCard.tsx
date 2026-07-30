import Image from "next/image";
import Link from "next/link";

import ArrowUpRight from "./ArrowUpRight";

export type Project = {
  name: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  href?: string;
  size?: "featured" | "wide" | "standard";

  index?: string;
  label?: string;
  description?: string;
  tools?: string[];
  imageFit?: "cover" | "contain";
  imagePosition?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const isClickable = Boolean(project.href);
  const isSvg = project.image.endsWith(".svg");

  const cardContent = (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 sm:rounded-[28px]",
        isClickable
          ? "cursor-pointer hover:-translate-y-1.5 hover:border-[var(--border-strong)]"
          : "",
      ].join(" ")}
    >
      {/* Project visual */}
      <div className="relative aspect-[16/11] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          unoptimized={isSvg}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={[
            "transition-transform duration-[1100ms] ease-out",
            project.imageFit === "contain"
              ? "object-contain p-7 sm:p-10"
              : "object-cover",
            project.imagePosition ?? "object-center",
            isClickable
              ? "group-hover:scale-[1.025]"
              : "group-hover:scale-[1.015]",
          ].join(" ")}
        />

        {project.imageFit !== "contain" && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
        )}

        {/* Top information */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-5 sm:right-5 sm:top-5">
          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/75 backdrop-blur-md sm:text-[10px]">
            {project.label ?? "Selected Project"}
          </span>

          <span className="font-mono text-[10px] tracking-[0.18em] text-white/60 sm:text-xs">
            {project.index}
          </span>
        </div>
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[var(--muted-light)] sm:text-[10px]">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-normal leading-tight tracking-[-0.035em] text-[var(--text)] sm:text-3xl">
              {project.name}
            </h3>
          </div>

          <p className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-[var(--muted-light)] sm:text-xs">
            {project.year}
          </p>
        </div>

        {project.description && (
          <p className="mt-5 max-w-[560px] font-mono text-xs leading-[1.8] text-[var(--muted)] sm:text-sm">
            {project.description}
          </p>
        )}

        <div className="mt-auto pt-7">
          <div className="flex items-end justify-between gap-5 border-t border-[var(--border)] pt-5">
            <div className="flex flex-wrap gap-2">
              {project.tools?.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[9px] tracking-wide text-[var(--muted)] sm:text-[10px]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {isClickable ? (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-soft)] transition-all duration-300 group-hover:rotate-45 group-hover:border-[var(--text)] group-hover:bg-[var(--text)] group-hover:text-[var(--page)]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            ) : (
              <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-light)] sm:text-[10px]">
                Figma Design
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );

  if (!project.href) {
    return cardContent;
  }

  const isExternal =
    project.href.startsWith("http://") ||
    project.href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} project`}
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      href={project.href}
      aria-label={`View ${project.name} project`}
      className="block h-full"
    >
      {cardContent}
    </Link>
  );
}