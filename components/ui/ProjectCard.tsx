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
  external?: boolean;
  tools: string[];
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  glowColor?: string;
  coverVariant?:
    | "default"
    | "exquisite"
    | "nexttrip"
    | "engliquest"
    | "astral";
  coverLogo?: string;
  coverMockup?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[30px]">
      <CaseStudyMockupCover project={project} />

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
                {project.external ? "Visit live site" : "View case study"}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            ) : (
              <span className="text-sm text-[var(--muted)]">Coming soon</span>
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

  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
        aria-label={`Visit ${project.name} website`}
      >
        {content}
      </a>
    );
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

function CaseStudyMockupCover({ project }: { project: Project }) {
  const mockup = project.coverMockup ?? project.image;
  const glow = project.glowColor ?? "#8bb8d8";

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[#090909]"
      style={{
        background: `radial-gradient(circle at 50% 42%, ${glow}25 0%, transparent 48%), linear-gradient(145deg, #1b1b1b 0%, #080808 68%)`,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[12%] bottom-[4%] h-[16%] rounded-[50%] blur-3xl"
        style={{ backgroundColor: `${glow}20` }}
      />

      <div className="absolute inset-[7%] flex items-center justify-center">
        <Image
          src={mockup}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 44vw, 92vw"
          className="object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.035] sm:p-6"
        />
      </div>

      <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-6 sm:top-6">
        <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-md sm:text-[9px]">
          {project.label}
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          {project.index}
        </span>
      </div>
    </div>
  );
}
