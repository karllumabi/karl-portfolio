"use client";

import { type RefObject, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type TrailAsset = {
  src: string;
  alt: string;
  label: string;
};

type TrailNode = {
  element: HTMLDivElement;
  fading: boolean;
  fadeStartTimer: number | null;
  holdTimer: number | null;
  removeTimer: number | null;
};

type HeroCursorTrailProps = {
  containerRef: RefObject<HTMLElement | null>;
};

const TRAIL_ASSETS: TrailAsset[] = [
  {
    src: "/designs/exquisite-introduction.svg",
    alt: "Exquisite Properties introduction graphic",
    label: "Brand Design",
  },
  {
    src: "/designs/Residential design.png",
    alt: "Residential real estate social media graphic design",
    label: "Residential 01",
  },
  {
    src: "/designs/one-rockwell.svg",
    alt: "One Rockwell real estate listing graphic",
    label: "One Rockwell",
  },
  {
    src: "/designs/Residential design3.png",
    alt: "Residential property marketing graphic design",
    label: "Residential 02",
  },
  {
    src: "/designs/exquisite-answers.svg",
    alt: "Exquisite Answers social media graphic",
    label: "Social Media",
  },
  {
    src: "/designs/Residential design1.png",
    alt: "Residential real estate campaign graphic",
    label: "Residential 03",
  },
  {
    src: "/designs/Residential design5.png",
    alt: "Residential social media graphic design",
    label: "Residential 04",
  },
  {
    src: "/designs/exquisite-contact.svg",
    alt: "Exquisite Properties contact graphic",
    label: "Contact Campaign",
  },
  {
    src: "/designs/Residential design2.png",
    alt: "Residential property marketing visual",
    label: "Residential 05",
  },
  {
    src: "/designs/Residential design4.png",
    alt: "Residential real estate graphic design",
    label: "Residential 06",
  },
  {
    src: "/designs/graphics-19.png",
    alt: "Graphic design artwork 19",
    label: "Graphic 19",
  },

  {
    src: "/designs/graphics-20.png",
    alt: "Graphic design artwork 20",
    label: "Graphic 20",
  },

  {
    src: "/designs/graphics-21.png",
    alt: "Graphic design artwork 21",
    label: "Graphic 21",
  },

  {
    src: "/designs/graphics-22.png",
    alt: "Graphic design artwork 22",
    label: "Graphic 22",
  },

  {
    src: "/designs/graphics-23.png",
    alt: "Graphic design artwork 23",
    label: "Graphic 23",
  },

  {
    src: "/designs/graphics-24.png",
    alt: "Graphic design artwork 24",
    label: "Graphic 24",
  },

  {
    src: "/designs/graphics-25.png",
    alt: "Graphic design artwork 25",
    label: "Graphic 25",
  },

  {
    src: "/designs/graphics-26.png",
    alt: "Graphic design artwork 26",
    label: "Graphic 26",
  },

  {
    src: "/designs/graphics-27.png",
    alt: "Graphic design artwork 27",
    label: "Graphic 27",
  },

  {
    src: "/designs/graphics-28.png",
    alt: "Graphic design artwork 28",
    label: "Graphic 28",
  },

  {
    src: "/designs/graphics-29.png",
    alt: "Graphic design artwork 29",
    label: "Graphic 29",
  },

  {
    src: "/designs/graphics-30.png",
    alt: "Graphic design artwork 30",
    label: "Graphic 30",
  },

  {
    src: "/designs/graphics-31.png",
    alt: "Graphic design artwork 31",
    label: "Graphic 31",
  },

  {
    src: "/designs/graphics-32.png",
    alt: "Graphic design artwork 32",
    label: "Graphic 32",
  },

  {
    src: "/designs/graphics-33.png",
    alt: "Graphic design artwork 33",
    label: "Graphic 33",
  },

  {
    src: "/designs/graphics-34.png",
    alt: "Graphic design artwork 34",
    label: "Graphic 34",
  },

  {
    src: "/designs/graphics-35.png",
    alt: "Graphic design artwork 35",
    label: "Graphic 35",
  },

  {
    src: "/designs/graphics-36.png",
    alt: "Graphic design artwork 36",
    label: "Graphic 36",
  },

  {
    src: "/designs/graphics-37.png",
    alt: "Graphic design artwork 37",
    label: "Graphic 37",
  },

  {
    src: "/designs/graphics-38.png",
    alt: "Graphic design artwork 38",
    label: "Graphic 38",
  },

  {
    src: "/designs/graphics-39.png",
    alt: "Graphic design artwork 39",
    label: "Graphic 39",
  },

  {
    src: "/designs/graphics-40.png",
    alt: "Graphic design artwork 40",
    label: "Graphic 40",
  },

  {
    src: "/designs/graphics-41.png",
    alt: "Graphic design artwork 41",
    label: "Graphic 41",
  },

  {
    src: "/designs/graphics-42.png",
    alt: "Graphic design artwork 42",
    label: "Graphic 42",
  },

  {
    src: "/designs/graphics-43.png",
    alt: "Graphic design artwork 43",
    label: "Graphic 43",
  },

  {
    src: "/designs/graphics-44.png",
    alt: "Graphic design artwork 44",
    label: "Graphic 44",
  },
];

const PATH_OFFSETS = [
  { x: -26, y: 18 },
  { x: 22, y: -15 },
  { x: -12, y: -24 },
  { x: 28, y: 14 },
  { x: -20, y: 10 },
  { x: 14, y: -20 },
  { x: 6, y: 24 },
  { x: -24, y: -8 },
];
const CARD_SIZES = [
  { width: 226, height: 156 },
  { width: 242, height: 168 },
  { width: 234, height: 162 },
  { width: 250, height: 174 },
  { width: 220, height: 152 },
  { width: 238, height: 165 },
];
const MAX_VISIBLE_NODES = 14;
const MAX_TOTAL_NODES = 22;
const MIN_DISTANCE = 34;
const IDLE_DELAY = 220;
const HOLD_DURATION = 1700;
const FADE_DURATION = 1450;
const APPEAR_TRANSITION =
  "opacity 90ms ease-out, transform 180ms cubic-bezier(0.16, 1, 0.3, 1), filter 180ms ease-out";
const FADE_TRANSITION =
  "opacity 1450ms ease, transform 1450ms cubic-bezier(0.16, 1, 0.3, 1), filter 1450ms ease";

export default function HeroCursorTrail({
  containerRef,
}: HeroCursorTrailProps) {
  const shouldReduceMotion = useReducedMotion();
  const trailRootRef = useRef<HTMLDivElement>(null);
  const activeNodesRef = useRef<TrailNode[]>([]);
  const visibleNodesRef = useRef<TrailNode[]>([]);
  const latestPointRef = useRef<{ x: number; y: number } | null>(null);
  const lastCursorPointRef = useRef<{ x: number; y: number } | null>(null);
  const sequenceRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const idleFadeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trailRoot = trailRootRef.current;

    if (
      !container ||
      !trailRoot ||
      shouldReduceMotion ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    // Warm the browser cache and decode every graphic before interaction.
    TRAIL_ASSETS.forEach((asset) => {
      const preload = new window.Image();
      preload.decoding = "async";
      preload.src = asset.src;
    });

    const removeNode = (trailNode: TrailNode) => {
      if (trailNode.holdTimer !== null) {
        window.clearTimeout(trailNode.holdTimer);
      }

      if (trailNode.fadeStartTimer !== null) {
        window.clearTimeout(trailNode.fadeStartTimer);
      }

      if (trailNode.removeTimer !== null) {
        window.clearTimeout(trailNode.removeTimer);
      }

      trailNode.element.remove();
      activeNodesRef.current = activeNodesRef.current.filter(
        (node) => node !== trailNode,
      );
      visibleNodesRef.current = visibleNodesRef.current.filter(
        (node) => node !== trailNode,
      );
    };

    const beginFade = (trailNode: TrailNode) => {
      if (trailNode.fading) {
        return;
      }

      trailNode.fading = true;
      trailNode.fadeStartTimer = null;
      visibleNodesRef.current = visibleNodesRef.current.filter(
        (node) => node !== trailNode,
      );
      trailNode.element.style.transition = FADE_TRANSITION;
      trailNode.element.style.opacity = "0";
      trailNode.element.style.filter = "blur(1.5px)";
      trailNode.element.style.transform =
        "translate(-50%, -50%) scale(0.96) rotate(0deg)";
      trailNode.removeTimer = window.setTimeout(() => {
        removeNode(trailNode);
      }, FADE_DURATION);
    };

    const fadeAll = () => {
      activeNodesRef.current.slice().forEach((trailNode, index) => {
        if (trailNode.fading) {
          return;
        }

        if (trailNode.holdTimer !== null) {
          window.clearTimeout(trailNode.holdTimer);
          trailNode.holdTimer = null;
        }

        // Stagger the fade in spawn order so the newest card is always last.
        trailNode.fadeStartTimer = window.setTimeout(() => {
          beginFade(trailNode);
        }, index * 90);
      });
      lastCursorPointRef.current = null;
    };

    const cancelPendingFadeStarts = () => {
      activeNodesRef.current.forEach((trailNode) => {
        if (trailNode.fadeStartTimer !== null) {
          window.clearTimeout(trailNode.fadeStartTimer);
          trailNode.fadeStartTimer = null;
        }
      });
    };

    const scheduleIdleFade = () => {
      if (idleFadeTimerRef.current !== null) {
        window.clearTimeout(idleFadeTimerRef.current);
      }

      idleFadeTimerRef.current = window.setTimeout(() => {
        idleFadeTimerRef.current = null;
        fadeAll();
      }, IDLE_DELAY);
    };

    const createTrailNode = (
      asset: TrailAsset,
      x: number,
      y: number,
      width: number,
      height: number,
    ): TrailNode => {
      const element = document.createElement("div");
      element.setAttribute("aria-hidden", "true");
      element.className = "pointer-events-none absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.opacity = "0";
      element.style.filter = "blur(2px)";
      element.style.transform =
        "translate(-50%, -50%) scale(0.9) rotate(0deg)";
      element.style.transition = APPEAR_TRANSITION;
      element.style.willChange = "transform, opacity, filter";

      const shell = document.createElement("div");
      shell.className =
        "h-full w-full overflow-hidden rounded-[2px] border border-white/15 bg-[#111]/90 shadow-2xl shadow-black/45";

      const media = document.createElement("div");
      media.className =
        "relative h-full w-full overflow-hidden rounded-none";

      const image = document.createElement("img");
      image.src = asset.src;
      image.alt = asset.alt;
      image.decoding = "async";
      image.loading = "eager";
      image.className = "absolute inset-0 h-full w-full object-cover";
      image.draggable = false;

      media.append(image);
      shell.append(media);
      element.append(shell);
      trailRoot.append(element);

      return {
        element,
        fading: false,
        fadeStartTimer: null,
        holdTimer: null,
        removeTimer: null,
      };
    };

    const spawnAtPoint = (point: { x: number; y: number }) => {
      const previous = lastCursorPointRef.current;

      if (previous) {
        const distance = Math.hypot(
          point.x - previous.x,
          point.y - previous.y,
        );

        if (distance < MIN_DISTANCE) {
          return;
        }
      }

      const bounds = container.getBoundingClientRect();
      const sequence = sequenceRef.current++;
      const asset = TRAIL_ASSETS[sequence % TRAIL_ASSETS.length];
      const offset = PATH_OFFSETS[sequence % PATH_OFFSETS.length];
      const size = CARD_SIZES[sequence % CARD_SIZES.length];
      const halfWidth = size.width / 2;
      const halfHeight = size.height / 2;
      const clampedX = Math.min(
        Math.max(point.x + offset.x, halfWidth),
        Math.max(halfWidth, bounds.width - halfWidth),
      );
      const clampedY = Math.min(
        Math.max(point.y + offset.y, halfHeight),
        Math.max(halfHeight, bounds.height - halfHeight),
      );
      const trailNode = createTrailNode(
        asset,
        clampedX,
        clampedY,
        size.width,
        size.height,
      );

      lastCursorPointRef.current = point;
      activeNodesRef.current.push(trailNode);
      visibleNodesRef.current.push(trailNode);

      if (visibleNodesRef.current.length > MAX_VISIBLE_NODES) {
        beginFade(visibleNodesRef.current[0]);
      }

      while (activeNodesRef.current.length > MAX_TOTAL_NODES) {
        const oldestNode = activeNodesRef.current[0];

        if (oldestNode.fading) {
          removeNode(oldestNode);
        } else {
          beginFade(oldestNode);
        }
      }

      window.requestAnimationFrame(() => {
        if (!trailNode.fading) {
          trailNode.element.style.opacity = "0.96";
          trailNode.element.style.filter = "blur(0px)";
          trailNode.element.style.transform =
            "translate(-50%, -50%) scale(1) rotate(0deg)";
        }
      });

      trailNode.holdTimer = window.setTimeout(() => {
        beginFade(trailNode);
      }, HOLD_DURATION);
    };

    const spawnAlongPath = (point: { x: number; y: number }) => {
      const previous = lastCursorPointRef.current;

      if (!previous) {
        spawnAtPoint(point);
        return;
      }

      const deltaX = point.x - previous.x;
      const deltaY = point.y - previous.y;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance < MIN_DISTANCE) {
        return;
      }

      // Fill large pointer jumps with stamps along the real cursor path so
      // fast movement still produces a continuous collage instead of one
      // image teleported to the latest pointer position.
      const stampCount = Math.min(
        Math.floor(distance / MIN_DISTANCE),
        MAX_VISIBLE_NODES,
      );

      for (let index = 1; index <= stampCount; index += 1) {
        const ratio = (index * MIN_DISTANCE) / distance;
        spawnAtPoint({
          x: previous.x + deltaX * ratio,
          y: previous.y + deltaY * ratio,
        });
      }
    };

    const processPointerFrame = () => {
      frameRef.current = null;

      if (latestPointRef.current) {
        spawnAlongPath(latestPointRef.current);
      }
    };

    const schedulePointerFrame = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(
          processPointerFrame,
        );
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      const bounds = container.getBoundingClientRect();
      latestPointRef.current = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
      cancelPendingFadeStarts();
      schedulePointerFrame();
      scheduleIdleFade();
    };

    const handlePointerLeave = () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      if (idleFadeTimerRef.current !== null) {
        window.clearTimeout(idleFadeTimerRef.current);
        idleFadeTimerRef.current = null;
      }

      latestPointRef.current = null;
      lastCursorPointRef.current = null;
      fadeAll();
    };

    container.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    container.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      handlePointerLeave();

      activeNodesRef.current.slice().forEach(removeNode);
    };
  }, [containerRef, shouldReduceMotion]);

  return shouldReduceMotion ? null : (
    <div
      ref={trailRootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    />
  );
}
