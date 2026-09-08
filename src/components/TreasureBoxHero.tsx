"use client";

import { useState } from "react";
import {
  CURSOR_STORAGE_KEY,
  ICONS,
  ORDER,
  cursorDataURI,
  playTone,
  type IconKey,
} from "@/lib/treasureBox";

function Icon({ iconKey, size = 34 }: { iconKey: IconKey; size?: number }) {
  const icon = ICONS[iconKey];
  return (
    <svg
      viewBox={icon.viewBox}
      width={size}
      height={size}
      style={{ color: `var(${icon.colorVar})` }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}

export default function TreasureBoxHero() {
  const [selected, setSelected] = useState<IconKey | null>(null);

  function choose(key: IconKey) {
    setSelected(key);
    playTone(key);
    document.body.style.cursor = cursorDataURI(key);
    try {
      window.localStorage.setItem(CURSOR_STORAGE_KEY, key);
    } catch {
      // ignore
    }
  }

  return (
    <section className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-x-16 gap-y-6 px-6 pt-6 sm:px-8 sm:pt-10 md:grid-cols-2">
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--text-faint)]">
          Product Designer · UX Designer
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
          Jianan Meng
        </h1>
        <p className="mt-4 max-w-[46ch] text-lg leading-[1.85] text-[var(--text-muted)]">
          Turning complex journeys into clear, simple, measurable and
          ultimately <strong>HUMAN</strong> experiences.
        </p>
      </div>

      <div className="box mx-auto">
        <p className="box-label">Pick a cursor from my treasure box</p>
        <div className="items-grid">
          {ORDER.map((key) => (
            <button
              key={key}
              type="button"
              className={`item${selected === key ? " selected" : ""}`}
              aria-label={`Choose ${ICONS[key].name} as cursor`}
              onClick={() => choose(key)}
            >
              <Icon iconKey={key} />
              <span className="name">{ICONS[key].name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="box-wrap md:col-start-2">
        <div className="cursor-readout">
          {selected ? (
            <>
              <Icon iconKey={selected} size={18} />
              <span>Cursor: {ICONS[selected].name}</span>
            </>
          ) : (
            <>
              <span className="dot" />
              <span>Cursor: default</span>
            </>
          )}
        </div>

        <p className="sound-note">
          Each item has its own small sound — click to try one.
        </p>
      </div>
    </section>
  );
}
