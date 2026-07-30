import type { CSSProperties } from "react";
import DesignCard, { type DesignItem } from "./DesignCard";

type InfiniteDesignRowProps = {
  designs: DesignItem[];
  direction?: "left" | "right";
  duration?: number;
};

export default function InfiniteDesignRow({
  designs,
  direction = "left",
  duration = 60,
}: InfiniteDesignRowProps) {
  const animationClass =
    direction === "left" ? "marquee-left" : "marquee-right";

  const marqueeStyle = {
    "--marquee-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div className="marquee-shell">
      <div
        className={`marquee-track ${animationClass}`}
        style={marqueeStyle}
      >
        <div className="marquee-group">
          {designs.map((design, index) => (
            <DesignCard
              key={`first-${design.title}-${index}`}
              design={design}
            />
          ))}
        </div>

        <div className="marquee-group" aria-hidden="true">
          {designs.map((design, index) => (
            <DesignCard
              key={`second-${design.title}-${index}`}
              design={design}
            />
          ))}
        </div>
      </div>
    </div>
  );
}