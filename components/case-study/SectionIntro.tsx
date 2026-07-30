import MotionReveal from "../motion/MotionReveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <MotionReveal y={20} duration={0.8}>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)] sm:text-xs">
        {eyebrow}
      </p>

      <div className="mt-5 grid gap-8 lg:grid-cols-12">
        <h2 className="max-w-[850px] text-4xl leading-[1.03] tracking-[-0.045em] text-[var(--text)] sm:text-5xl lg:col-span-7 lg:text-6xl">
          {title}
        </h2>

        <p className="max-w-[500px] font-mono text-sm leading-[1.9] text-[var(--muted)] lg:col-span-4 lg:col-start-9 lg:self-end">
          {description}
        </p>
      </div>
    </MotionReveal>
  );
}