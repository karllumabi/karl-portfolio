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
    <article className="flex w-full flex-col items-center text-center">
      {/* Years */}
      <div className="flex items-center justify-center gap-3 font-mono text-xs tracking-[0.12em] text-[var(--muted)] sm:text-sm">
        <span>{experience.startYear}</span>

        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-[var(--muted)]"
        />

        <span>{experience.endYear}</span>
      </div>

      {/* Role */}
      <h3 className="mt-4 max-w-[320px] text-xl font-normal leading-[1.25] tracking-[0.015em] text-[var(--text)] sm:max-w-[500px] sm:text-2xl lg:text-[26px]">
        {experience.role}
      </h3>

      {/* Company */}
      <p className="mt-3 max-w-[320px] font-mono text-xs leading-relaxed tracking-[0.12em] text-[var(--muted)] sm:max-w-[500px] sm:text-sm">
        {experience.company}
      </p>

      {/* Timeline connector */}
      {showDivider && (
        <div
          aria-hidden="true"
          className="my-10 h-14 w-px bg-[var(--border-strong)] sm:my-12 sm:h-16"
        />
      )}
    </article>
  );
}