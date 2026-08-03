export type Experience = {
  startYear: string;
  endYear: string;
  role: string;
  company: string;
};

type ExperienceItemProps = {
  experience: Experience;
  showDivider?: boolean;
};

export default function ExperienceItem({
  experience,
  showDivider = true,
}: ExperienceItemProps) {
  return (
    <article className="group flex w-full flex-col items-center overflow-visible text-center">
      {/* Years */}
      <div className="flex items-center justify-center gap-3 px-3 py-1 font-mono text-xs tracking-[0.12em] text-[var(--muted)] sm:text-sm">
        <span className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1 group-hover:text-[var(--text)]">
          {experience.startYear}
        </span>

        <span
          aria-hidden="true"
          className="relative h-2 w-2 shrink-0 rounded-full bg-[var(--muted)] transition-all duration-500 group-hover:scale-125 group-hover:bg-[var(--text)]"
        >
          <span className="absolute inset-0 rounded-full border border-[var(--text)] opacity-0 transition-all duration-700 group-hover:scale-[2.5] group-hover:opacity-30" />
        </span>

        <span className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-[var(--text)]">
          {experience.endYear}
        </span>
      </div>

      {/* Role */}
      <div className="relative mt-3 px-2 pb-2 pt-1">
        <h3 className="max-w-[320px] text-xl font-normal leading-[1.25] tracking-[0.015em] text-[var(--text)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:tracking-[0.025em] sm:max-w-[500px] sm:text-2xl lg:text-[26px]">
          {experience.role}
        </h3>

        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-[calc(100%-1rem)] origin-center -translate-x-1/2 scale-x-0 bg-[var(--text)] opacity-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        />
      </div>

      {/* Company */}
      <p className="mt-2 max-w-[320px] px-2 font-mono text-xs leading-relaxed tracking-[0.12em] text-[var(--muted)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:tracking-[0.16em] group-hover:text-[var(--text)] sm:max-w-[500px] sm:text-sm">
        {experience.company}
      </p>

      {/* Timeline connector */}
      {showDivider && (
        <div
          aria-hidden="true"
          className="relative my-10 h-14 w-px overflow-hidden bg-[var(--border-strong)] sm:my-12 sm:h-16"
        >
          <span className="absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-[var(--text)] opacity-60 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
        </div>
      )}
    </article>
  );
}