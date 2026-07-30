import Image from "next/image";
import Link from "next/link";

import ArrowUpRight from "./ArrowUpRight";

export type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  tools: string[];
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  glowColor?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const content = (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[30px]">
      {/* Project image */}
      <div className="relative aspect-[16/11] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={[
            project.imageFit === "contain"
              ? "object-contain"
              : "object-cover",
            project.imagePosition ?? "object-center",
            "transition-transform duration-700 ease-out group-hover:scale-[1.05]",
          ].join(" ")}
        />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-[10px]">
          {project.label}
        </div>
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:text-xs">
              {project.index} · {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-normal tracking-[-0.035em] text-[var(--text)] sm:text-3xl">
              {project.name}
            </h3>
          </div>

          {project.href ? (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-soft)] transition-colors duration-300 group-hover:border-[var(--button)] group-hover:bg-[var(--button)] group-hover:text-[var(--button-text)]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
          {project.description}
        </p>

        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--muted)] sm:text-[10px]"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
            {project.href ? (
              <span className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-soft)] transition-colors duration-300 group-hover:border-[var(--button)] group-hover:bg-[var(--button)] group-hover:text-[var(--button-text)]">
                View case study

                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            ) : (
              <span className="text-sm text-[var(--muted)]">
                Coming soon
              </span>
            )}

            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)]">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </article>
  );

  if (!project.href) {
    return <div className="h-full">{content}</div>;
  }

  return (
    <Link
      href={project.href}
      className="block h-full"
      aria-label={`View ${project.name} case study`}
    >
      {content}
    </Link>
  );
}