import Image from "next/image";

export type DesignItem = {
  title: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  format: "mobile" | "graphic";
  borderRadius?: string;
};

type DesignCardProps = {
  design: DesignItem;
};

export default function DesignCard({
  design,
}: DesignCardProps) {
  const isMobile = design.format === "mobile";

  return (
    <article
      className={[
        "group relative flex-shrink-0 overflow-hidden border border-[var(--border)] bg-[var(--surface-soft)]",
        isMobile
          ? "h-[480px] w-[250px] sm:h-[560px] sm:w-[290px]"
          : "h-[330px] w-[330px] sm:h-[390px] sm:w-[390px]",
      ].join(" ")}
      style={{
        borderRadius:
          design.borderRadius ??
          (isMobile ? "28px" : "18px"),
      }}
    >
      <Image
        src={design.image}
        alt={design.imageAlt}
        fill
        unoptimized
        sizes={
          isMobile
            ? "(min-width: 640px) 290px, 250px"
            : "(min-width: 640px) 390px, 330px"
        }
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
          {design.category} · {design.year}
        </p>

        <h3 className="mt-2 text-lg tracking-[-0.025em] text-white sm:text-xl">
          {design.title}
        </h3>
      </div>
    </article>
  );
}