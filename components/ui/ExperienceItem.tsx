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
      <div className="flex items-center justify-center gap-3 font-mono text-xs tracking-[0.14em] text-[var(--muted-light)] sm:text-sm">
        <span className="transition-colors duration-500 group-hover:text-[var(--text)]">
          {experience.startYear}
        </span>

        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted-light)] transition-all duration-500 group-hover:scale-125 group-hover:bg-[var(--text)]"
        />

        <span className="transition-colors duration-500 group-hover:text-[var(--text)]">
          {experience.endYear}
        </span>
      </div>

      {/* Role and company */}
      <div className="mt-3 px-2">
        <h3 className="text-xl font-normal leading-[1.2] tracking-[-0.035em] text-[var(--text)] transition-all duration-500 group-hover:-translate-y-0.5 sm:text-2xl">
          {experience.role}
        </h3>

        <p className="mt-2 text-sm leading-relaxed tracking-[-0.01em] text-[var(--muted)] transition-colors duration-500 group-hover:text-[var(--text)] sm:text-base">
          {experience.company}
        </p>
      </div>

      {/* Timeline connector */}
      {showDivider && (
        <div
          aria-hidden="true"
          className="relative my-6 h-10 w-px overflow-hidden bg-[var(--border-strong)] sm:my-7 sm:h-11"
        >
          <span className="absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-[var(--text)] opacity-70 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
        </div>
      )}
    </article>
  );
}
