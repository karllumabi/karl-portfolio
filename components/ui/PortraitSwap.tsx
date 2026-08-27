"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";

type PortraitSwapProps = {
  children?: ReactNode;
  className: string;
  sizes: string;
  priority?: boolean;
  showInstruction?: boolean;
};

export default function PortraitSwap({
  children,
  className,
  sizes,
  priority = false,
  showInstruction = true,
}: PortraitSwapProps) {
  const [supportsHover, setSupportsHover] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    const hoverMediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const updateHoverSupport = () => {
      setSupportsHover(hoverMediaQuery.matches);
    };

    updateHoverSupport();
    hoverMediaQuery.addEventListener("change", updateHoverSupport);

    return () => {
      hoverMediaQuery.removeEventListener("change", updateHoverSupport);
    };
  }, []);

  const showAlternatePortrait = supportsHover ? isHovering : isTapped;

  return (
    <button
      type="button"
      onClick={() => {
        if (!supportsHover) {
          setIsTapped((current) => !current);
        }
      }}
      onMouseEnter={() => {
        if (supportsHover) {
          setIsHovering(true);
        }
      }}
      onMouseLeave={() => {
        if (supportsHover) {
          setIsHovering(false);
        }
      }}
      aria-label={
        showAlternatePortrait
          ? "Show original portrait"
          : "Show alternate portrait"
      }
      aria-pressed={showAlternatePortrait}
      className={className}
    >
      <Image
        src="/images/karl-about.png"
        alt="Karl Lumabi wearing graduation attire"
        fill
        priority={priority}
        unoptimized
        draggable={false}
        sizes={sizes}
        className={`pointer-events-none object-cover object-top transition-all duration-700 ease-in-out ${
          showAlternatePortrait
            ? "scale-[1.02] opacity-0"
            : "scale-100 opacity-100"
        }`}
      />

      <Image
        src="/images/karl-about-hover1.png"
        alt="Karl Lumabi wearing a cap, glasses, and earrings"
        fill
        unoptimized
        draggable={false}
        sizes={sizes}
        className={`pointer-events-none object-cover object-top transition-all duration-700 ease-in-out ${
          showAlternatePortrait
            ? "scale-[1.02] opacity-100"
            : "scale-100 opacity-0"
        }`}
      />

      {showInstruction ? (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-5">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black/50 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/75 shadow-lg backdrop-blur-md">
            <SwitchIcon />

            {supportsHover
              ? "Hover to switch look"
              : showAlternatePortrait
                ? "Tap to switch back"
                : "Tap to switch look"}
          </span>
        </div>
      ) : null}

      {children}
    </button>
  );
}

function SwitchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path
        d="M3.5 7.25A6.75 6.75 0 0 1 15.3 4.8L17 6.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17 3.5V6.5H14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.5 12.75A6.75 6.75 0 0 1 4.7 15.2L3 13.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 16.5V13.5H6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
