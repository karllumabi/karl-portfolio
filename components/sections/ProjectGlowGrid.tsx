"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import MotionReveal from "../motion/MotionReveal";
import ProjectCard, {
  type Project,
} from "../ui/ProjectCard";

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

  const cardRefs = useRef<
    (HTMLDivElement | null)[]
  >([]);

  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isVisible, setIsVisible] =
    useState(false);

  const [glowPosition, setGlowPosition] =
    useState<GlowPosition>({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

  const positionGlow = useCallback(
    (index: number) => {
      const container = containerRef.current;
      const card = cardRefs.current[index];

      if (!container || !card) {
        return;
      }

      const containerRect =
        container.getBoundingClientRect();

      const cardRect =
        card.getBoundingClientRect();

      const glowPadding = 18;

      setGlowPosition({
        x:
          cardRect.left -
          containerRect.left -
          glowPadding,

        y:
          cardRect.top -
          containerRect.top -
          glowPadding,

        width:
          cardRect.width +
          glowPadding * 2,

        height:
          cardRect.height +
          glowPadding * 2,
      });
    },
    [],
  );

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

  useEffect(() => {
    const frame =
      window.requestAnimationFrame(() => {
        positionGlow(activeIndexRef.current);
      });

    const resizeObserver =
      new ResizeObserver(() => {
        positionGlow(activeIndexRef.current);
      });

    if (containerRef.current) {
      resizeObserver.observe(
        containerRef.current,
      );
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        resizeObserver.observe(card);
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [positionGlow, projects.length]);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          const mostVisible = entries
            .filter(
              (entry) =>
                entry.isIntersecting,
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio,
            )[0];

          if (!mostVisible) {
            return;
          }

          const index = Number(
            (
              mostVisible.target as HTMLElement
            ).dataset.projectIndex,
          );

          const cannotHover =
            !window.matchMedia(
              "(hover: hover) and (pointer: fine)",
            ).matches;

          if (cannotHover) {
            activateProject(index);
            setIsVisible(true);
          }
        },
        {
          threshold: [
            0.25,
            0.5,
            0.75,
            1,
          ],
          rootMargin:
            "-12% 0px -12% 0px",
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
  }, [activateProject]);

  const activeColor =
    projects[activeIndex]?.glowColor ??
    "#5B72FF";

  return (
    <div
      ref={containerRef}
      className="relative isolate overflow-visible"
      onMouseLeave={() =>
        setIsVisible(false)
      }
    >
      {/* Soft outer glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 rounded-[42px] transition-[transform,width,height,opacity,background,box-shadow] duration-500 ease-out motion-reduce:transition-none"
        style={{
          width: `${glowPosition.width}px`,
          height: `${glowPosition.height}px`,

          opacity: isVisible ? 0.62 : 0,

          background: `linear-gradient(
            135deg,
            ${activeColor}70 0%,
            ${activeColor}28 48%,
            ${activeColor}65 100%
          )`,

          boxShadow: `
            0 0 28px 8px ${activeColor}50,
            0 0 55px 12px ${activeColor}28
          `,

          filter: "blur(13px)",

          transform: `translate3d(
            ${glowPosition.x}px,
            ${glowPosition.y}px,
            0
          )`,
        }}
      />

      {/* Cleaner colored edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-[1] rounded-[38px] border transition-[transform,width,height,opacity,border-color] duration-500 ease-out motion-reduce:transition-none"
        style={{
          width: `${glowPosition.width}px`,
          height: `${glowPosition.height}px`,

          opacity: isVisible ? 0.65 : 0,

          borderColor: `${activeColor}85`,

          transform: `translate3d(
            ${glowPosition.x}px,
            ${glowPosition.y}px,
            0
          )`,
        }}
      />

      <div className="relative z-10 grid items-stretch gap-5 sm:gap-6 md:grid-cols-2">
        {projects.map(
          (project, index) => (
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
                  cardRefs.current[index] =
                    element;
                }}
                data-project-index={index}
                className="h-full"
                onMouseEnter={() => {
                  activateProject(index);
                  setIsVisible(true);
                }}
                onFocus={() => {
                  activateProject(index);
                  setIsVisible(true);
                }}
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as
                        | Node
                        | null,
                    )
                  ) {
                    setIsVisible(false);
                  }
                }}
              >
                <ProjectCard
                  project={project}
                />
              </div>
            </MotionReveal>
          ),
        )}
      </div>
    </div>
  );
}