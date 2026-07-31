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

  coverVariant?:
    | "default"
    | "exquisite"
    | "nexttrip"
    | "engliquest";

  coverLogo?: string;
  coverMockup?: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const content = (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[30px]">
      {project.coverVariant === "exquisite" ? (
        <ExquisiteProjectCover project={project} />
      ) : project.coverVariant === "nexttrip" ? (
        <NextTripProjectCover project={project} />
      ) : project.coverVariant === "engliquest" ? (
        <EngliQuestProjectCover project={project} />
      ) : (
        <DefaultProjectCover project={project} />
      )}

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

function DefaultProjectCover({
  project,
}: {
  project: Project;
}) {
  return (
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

      <ProjectLabel label={project.label} />
    </div>
  );
}

function ExquisiteProjectCover({
  project,
}: {
  project: Project;
}) {
  const logo =
    project.coverLogo ??
    "/projects/exquisite-properties/logo-white.png";

  const mockup =
    project.coverMockup ??
    "/projects/exquisite-properties/mockup.png";

  return (
    <div className="relative aspect-[16/11] overflow-hidden border-b border-[var(--border)] bg-[#05080d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_55%,rgba(47,139,255,0.30),transparent_38%),radial-gradient(circle_at_25%_80%,rgba(15,75,145,0.16),transparent_35%),linear-gradient(135deg,#05070b_0%,#070b12_48%,#030508_100%)]" />

      <div className="absolute -right-[10%] bottom-[-25%] h-[70%] w-[70%] rounded-full bg-blue-500/20 blur-[70px]" />

      <div className="absolute -bottom-[45%] -left-[10%] h-[95%] w-[90%] rounded-[50%] border border-blue-300/10" />
      <div className="absolute -bottom-[58%] -left-[4%] h-[105%] w-[105%] rounded-[50%] border border-blue-300/[0.07]" />

      <div className="absolute left-[5%] top-1/2 z-20 flex h-[22%] w-[30%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.045] px-5 backdrop-blur-xl sm:px-7">
        <div className="relative h-full w-full">
          <Image
            src={logo}
            alt="Exquisite Properties logo"
            fill
            sizes="220px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-[18%] bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/80 to-transparent shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
      </div>

      <div className="absolute -right-[10%] top-[10%] z-10 w-[76%] origin-center rotate-[-4deg] transition-transform duration-700 ease-out group-hover:-translate-x-[2%] group-hover:-translate-y-[2%] group-hover:rotate-[-2deg] group-hover:scale-[1.045]">
        <div className="overflow-hidden rounded-[16px] border border-white/20 bg-[#171a20] shadow-[0_30px_80px_rgba(0,0,0,0.65),0_0_45px_rgba(45,129,255,0.22)] sm:rounded-[22px]">
          <div className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-[#202329] px-3 sm:h-9 sm:gap-2 sm:px-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff625a] sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd44] sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#00ca4e] sm:h-2 sm:w-2" />
            <div className="ml-2 h-3 flex-1 rounded-full bg-black/25 sm:ml-4 sm:h-4" />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-[#1884dd]">
            <Image
              src={mockup}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 768px) 40vw, 75vw"
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-white/[0.08]" />
          </div>
        </div>

        <div className="mx-auto h-8 w-[85%] -translate-y-3 rounded-[50%] bg-blue-500/25 blur-xl transition-all duration-700 group-hover:w-[92%] group-hover:bg-blue-400/30" />
      </div>

      <ProjectLabel label={project.label} />
    </div>
  );
}

function NextTripProjectCover({
  project,
}: {
  project: Project;
}) {
  const logo =
    project.coverLogo ??
    "/projects/next-trip/NTLogo.png";

  const screen =
    project.coverMockup ??
    "/projects/next-trip/NTHome.png";

  return (
    <div className="relative aspect-[16/11] overflow-hidden border-b border-[var(--border)] bg-[#11160c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(197,227,132,0.38),transparent_37%),radial-gradient(circle_at_18%_76%,rgba(157,191,88,0.18),transparent_38%),linear-gradient(135deg,#0c1108_0%,#17200f_48%,#090d07_100%)]" />

      <div className="absolute -right-[8%] top-[6%] h-[80%] w-[65%] rounded-full bg-[#C5E384]/20 blur-[75px]" />

      <div className="absolute -bottom-[48%] -left-[20%] h-[105%] w-[100%] rounded-[50%] border border-[#C5E384]/15" />
      <div className="absolute -bottom-[62%] left-[2%] h-[105%] w-[110%] rounded-[50%] border border-[#C5E384]/10" />

      <div className="absolute left-[5%] top-1/2 z-20 flex h-[27%] w-[30%] -translate-y-1/2 items-center justify-center rounded-[24px] border border-[#C5E384]/25 bg-white/[0.055] p-4 backdrop-blur-xl sm:rounded-[30px] sm:p-5">
        <div className="relative h-full w-full">
          <Image
            src={logo}
            alt="Next Trip logo"
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-[18%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#C5E384] to-transparent shadow-[0_0_16px_rgba(197,227,132,0.9)]" />
      </div>

      <div className="absolute right-[9%] top-[5%] z-10 h-[91%] origin-center rotate-[7deg] transition-transform duration-700 ease-out group-hover:-translate-x-[4%] group-hover:-translate-y-[2%] group-hover:rotate-[3deg] group-hover:scale-[1.045]">
        <div className="relative aspect-[9/19.5] h-full rounded-[34px] border border-[#C5E384]/30 bg-[#080a06] p-[5px] shadow-[0_30px_70px_rgba(0,0,0,0.65),0_0_50px_rgba(197,227,132,0.28)] sm:rounded-[42px] sm:p-[7px]">
          <span className="absolute -left-[3px] top-[20%] h-[9%] w-[3px] rounded-l-full bg-white/30" />
          <span className="absolute -left-[3px] top-[32%] h-[13%] w-[3px] rounded-l-full bg-white/30" />
          <span className="absolute -right-[3px] top-[27%] h-[17%] w-[3px] rounded-r-full bg-white/30" />

          <div className="relative h-full w-full overflow-hidden rounded-[29px] bg-white sm:rounded-[35px]">
            <Image
              src={screen}
              alt="Next Trip home screen displayed inside an iPhone mockup"
              fill
              sizes="240px"
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute left-1/2 top-[2.2%] z-20 h-[3.3%] w-[31%] -translate-x-1/2 rounded-full bg-black shadow-md" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.13]" />
          </div>
        </div>

        <div className="absolute -bottom-[5%] left-1/2 h-[8%] w-[84%] -translate-x-1/2 rounded-[50%] bg-[#C5E384]/35 blur-xl transition-all duration-700 group-hover:w-[94%] group-hover:bg-[#C5E384]/45" />
      </div>

      <ProjectLabel label={project.label} />
    </div>
  );
}

function EngliQuestProjectCover({
  project,
}: {
  project: Project;
}) {
  const logo =
    project.coverLogo ??
    "/projects/engliquest/EQLogo.png";

  const screen =
    project.coverMockup ??
    "/projects/engliquest/EQHome.png";

  return (
    <div className="relative aspect-[16/11] overflow-hidden border-b border-[var(--border)] bg-[#0e0e1f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(104,102,217,0.40),transparent_36%),radial-gradient(circle_at_18%_78%,rgba(83,163,255,0.16),transparent_36%),linear-gradient(135deg,#0a0a17_0%,#13152e_48%,#090a14_100%)]" />

      <div className="absolute -right-[8%] top-[6%] h-[78%] w-[64%] rounded-full bg-[#6866D9]/25 blur-[80px]" />

      <div className="absolute -bottom-[48%] -left-[20%] h-[105%] w-[100%] rounded-[50%] border border-[#6866D9]/15" />
      <div className="absolute -bottom-[62%] left-[2%] h-[105%] w-[110%] rounded-[50%] border border-[#8C8AFF]/10" />

      <div className="absolute left-[5%] top-1/2 z-20 flex h-[27%] w-[30%] -translate-y-1/2 items-center justify-center rounded-[24px] border border-[#6866D9]/30 bg-white/[0.055] p-4 backdrop-blur-xl sm:rounded-[30px] sm:p-5">
        <div className="relative h-full w-full">
          <Image
            src={logo}
            alt="EngliQuest logo"
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-[18%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#8C8AFF] to-transparent shadow-[0_0_16px_rgba(140,138,255,0.9)]" />
      </div>

      <div className="absolute right-[9%] top-[5%] z-10 h-[91%] origin-center rotate-[7deg] transition-transform duration-700 ease-out group-hover:-translate-x-[4%] group-hover:-translate-y-[2%] group-hover:rotate-[3deg] group-hover:scale-[1.045]">
        <div className="relative aspect-[9/19.5] h-full rounded-[34px] border border-[#6866D9]/35 bg-[#080812] p-[5px] shadow-[0_30px_70px_rgba(0,0,0,0.65),0_0_50px_rgba(104,102,217,0.30)] sm:rounded-[42px] sm:p-[7px]">
          <span className="absolute -left-[3px] top-[20%] h-[9%] w-[3px] rounded-l-full bg-white/30" />
          <span className="absolute -left-[3px] top-[32%] h-[13%] w-[3px] rounded-l-full bg-white/30" />
          <span className="absolute -right-[3px] top-[27%] h-[17%] w-[3px] rounded-r-full bg-white/30" />

          <div className="relative h-full w-full overflow-hidden rounded-[29px] bg-white sm:rounded-[35px]">
            <Image
              src={screen}
              alt="EngliQuest home screen displayed inside an iPhone mockup"
              fill
              sizes="240px"
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute left-1/2 top-[2.2%] z-20 h-[3.3%] w-[31%] -translate-x-1/2 rounded-full bg-black shadow-md" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.13]" />
          </div>
        </div>

        <div className="absolute -bottom-[5%] left-1/2 h-[8%] w-[84%] -translate-x-1/2 rounded-[50%] bg-[#6866D9]/35 blur-xl transition-all duration-700 group-hover:w-[94%] group-hover:bg-[#8C8AFF]/45" />
      </div>

      <ProjectLabel label={project.label} />
    </div>
  );
}

function ProjectLabel({
  label,
}: {
  label: string;
}) {
  return (
    <div className="absolute bottom-4 left-4 z-30 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:py-2 sm:text-[9px]">
      {label}
    </div>
  );
}