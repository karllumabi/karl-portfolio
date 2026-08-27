"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BrowserFrameProps = {
  image?: string;
  imageAlt: string;
  domain: string;
  liveUrl?: string;
  openUrl?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 900;

export default function BrowserFrame({
  image,
  imageAlt,
  domain,
  liveUrl,
  openUrl,
  className = "",
  imageClassName = "",
  priority = false,
}: BrowserFrameProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const preview = previewRef.current;

    if (!preview) {
      return;
    }

    const updateScale = () => {
      const availableWidth = preview.clientWidth;
      const nextScale = availableWidth / DESKTOP_WIDTH;

      setScale(nextScale);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);

    resizeObserver.observe(preview);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const scaledHeight = DESKTOP_HEIGHT * scale;

  return (
    <div
      className={[
        "overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/20 sm:rounded-[30px]",
        className,
      ].join(" ")}
    >
      {/* Browser toolbar */}
      <div className="relative flex h-11 items-center border-b border-[var(--border)] bg-[var(--surface-soft)] px-4 sm:h-14 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted-light)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted-light)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--muted-light)]" />
        </div>

        <div className="absolute left-1/2 hidden max-w-[420px] -translate-x-1/2 truncate rounded-full border border-[var(--border)] bg-[var(--page)] px-8 py-1.5 font-mono text-[9px] tracking-wide text-[var(--muted)] sm:block">
          {domain}
        </div>

        {liveUrl || openUrl ? (
          <a
            href={liveUrl ?? openUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${domain} in a new tab`}
            className="ml-auto font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
          >
            Open ↗
          </a>
        ) : null}
      </div>

      {/* Framer-style live desktop preview */}
      {liveUrl ? (
        <div
          ref={previewRef}
          className="relative w-full overflow-hidden bg-white"
          style={{
            height: `${scaledHeight}px`,
          }}
        >
          <iframe
            src={liveUrl}
            title={imageAlt}
            loading="lazy"
            allowFullScreen
            className="absolute left-0 top-0 border-0 bg-white"
            style={{
              width: `${DESKTOP_WIDTH}px`,
              height: `${DESKTOP_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
        </div>
      ) : image ? (
        <div className="relative overflow-hidden bg-[var(--surface-soft)]">
          <Image
            src={image}
            alt={imageAlt}
            width={1800}
            height={1125}
            priority={priority}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className={["h-auto w-full", imageClassName].join(" ")}
          />
        </div>
      ) : (
        <div className="flex min-h-[500px] items-center justify-center bg-[var(--surface-soft)]">
          <p className="font-mono text-xs text-[var(--muted)]">
            Website preview unavailable
          </p>
        </div>
      )}
    </div>
  );
}
