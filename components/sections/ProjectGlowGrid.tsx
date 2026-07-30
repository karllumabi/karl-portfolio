"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type { Project } from "../ui/ProjectCard";

import MotionReveal from "../motion/MotionReveal";
import ProjectCard from "../ui/ProjectCard";

type ProjectGlowGridProps = {
  projects: Project[];
};

type GlowPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function ProjectGlowGrid({
  projects,
}: ProjectGlowGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const hoveredIndexRef = useRef<number | null>(null);
  const visibilityRatiosRef = useRef<Record<number, number>>(
    {},
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);
  const [supportsHover, setSupportsHover] = useState(true);

  const [glowPosition, setGlowPosition] =
    useState<GlowPosition>({
      x: 0,
      y: 0,
      width: 400,
      height: 400,
    });

  const positionGlow = useCallback((index: number) => {
    const container = containerRef.current;
    const card = cardRefs.current[index];

    if (!container || !card) {
      return;
    }

    const containerRect =
      container.getBoundingClientRect();

    const cardRect = card.getBoundingClientRect();

    setGlowPosition({
      x:
        cardRect.left -
        containerRect.left +
        cardRect.width / 2,
      y:
        cardRect.top -
        containerRect.top +
        cardRect.height / 2,

      // Keeps the glow close around the card
      width: cardRect.width + 70,
      height: cardRect.height + 70,
    });
  }, []);

  const activateProject = useCallback(
    (index: number) => {
      activeIndexRef.current = index;
      setActiveIndex(index);

      window.requestAnimationFrame(() => {
        positionGlow(index);
      });
    },
    [positionGlow],
  );

  const getMostVisibleProject = useCallback(() => {
    let highestRatio = 0;
    let mostVisibleIndex = activeIndexRef.current;

    Object.entries(visibilityRatiosRef.current).forEach(
      ([index, ratio]) => {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          mostVisibleIndex = Number(index);
        }
      },
    );

    return mostVisibleIndex;
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const updateHoverSupport = () => {
      setSupportsHover(mediaQuery.matches);
    };

    updateHoverSupport();

    mediaQuery.addEventListener(
      "change",
      updateHoverSupport,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateHoverSupport,
      );
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      positionGlow(activeIndexRef.current);
    });

    const delayedPosition = window.setTimeout(() => {
      positionGlow(activeIndexRef.current);
    }, 800);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(delayedPosition);
    };
  }, [positionGlow]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      positionGlow(activeIndexRef.current);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        resizeObserver.observe(card);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [positionGlow, projects.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          const index = Number(card.dataset.projectIndex);

          visibilityRatiosRef.current[index] =
            entry.isIntersecting
              ? entry.intersectionRatio
              : 0;
        });

        if (hoveredIndexRef.current === null) {
          activateProject(getMostVisibleProject());
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-15% 0px -15% 0px",
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [
    activateProject,
    getMostVisibleProject,
    projects.length,
  ]);

  const handleMouseEnter = (index: number) => {
    hoveredIndexRef.current = index;
    setHoveredIndex(index);
    activateProject(index);
  };

  const handleMouseLeave = () => {
    hoveredIndexRef.current = null;
    setHoveredIndex(null);
    activateProject(getMostVisibleProject());
  };

  const activeProject = projects[activeIndex];

  const glowColor =
    activeProject?.glowColor ?? "#7C5CFF";

  const showGlow =
    hoveredIndex !== null || !supportsHover;

  return (
    <div
      ref={containerRef}
      className="relative isolate -m-8 overflow-visible p-8"
      onMouseLeave={handleMouseLeave}
    >
      {/* Compact glow around active card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 rounded-[40px] transition-[transform,width,height,opacity,background-color,box-shadow] duration-500 ease-out motion-reduce:transition-none"
        style={{
          width: `${glowPosition.width}px`,
          height: `${glowPosition.height}px`,
          opacity: showGlow ? 0.5 : 0,
          backgroundColor: glowColor,
          boxShadow: `0 0 50px 12px ${glowColor}`,
          filter: "blur(28px)",
          transform: `translate3d(
            ${glowPosition.x - glowPosition.width / 2}px,
            ${glowPosition.y - glowPosition.height / 2}px,
            0
          )`,
        }}
      />

      <div className="relative z-10 grid items-stretch gap-5 sm:gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <MotionReveal
            key={project.name}
            className="h-full"
            delay={index * 0.08}
            duration={0.85}
            y={30}
            amount={0.1}
          >
            <div
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              data-project-index={index}
              className="h-full"
              onMouseEnter={() =>
                handleMouseEnter(index)
              }
              onFocus={() => handleMouseEnter(index)}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  handleMouseLeave();
                }
              }}
            >
              <ProjectCard project={project} />
            </div>
          </MotionReveal>
        ))}
      </div>
    </div>
  );
}