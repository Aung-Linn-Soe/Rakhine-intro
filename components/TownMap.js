"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TOWNS } from "@/lib/data";
import { useLang } from "./LangProvider";

// F-4: 地図（中核機能）。町の位置に透明なクリック領域を重ね、クリックで町ページへ移動する。
export default function TownMap() {
  const router = useRouter();
  const { lang, t } = useLang();
  const [hover, setHover] = useState(null);

  const goTown = (id) => router.push(`/town/${id}`);

  return (
    <div className="map-grid">
      <div className="map-frame">
        <div className="map-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rakhine_state_map_mm.svg"
            alt={t({ my: "ရခိုင်ပြည်နယ် မြေပုံ", en: "Map of Rakhine State", ja: "ラカイン州の地図" })}
            loading="lazy"
            className="map-svg-img"
          />
          <svg viewBox="0 0 1560 1300" className="map-overlay">
            {TOWNS.map((town) => {
              const on = hover === town.id;
              return (
                <g
                  key={town.id}
                  onClick={() => goTown(town.id)}
                  onMouseEnter={() => setHover(town.id)}
                  onMouseLeave={() => setHover(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goTown(town.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={t(town)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={town.x}
                    cy={town.y}
                    r={40}
                    style={{ fill: "#2E6FE8", fillOpacity: on ? 0.22 : 0.001 }}
                  />
                  {on && (
                    <circle cx={town.x} cy={town.y} r={21} fill="none" stroke="#2E6FE8" strokeWidth={7} />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <div>
        <ul className="town-list">
          {TOWNS.map((town, i) => (
            <li key={town.id} className="town-list-item">
              <button
                type="button"
                onClick={() => goTown(town.id)}
                onMouseEnter={() => setHover(town.id)}
                onMouseLeave={() => setHover(null)}
                className={"town-list-row" + (hover === town.id ? " town-list-row-on" : "")}
              >
                <span className="town-list-num">{i < 9 ? "0" + (i + 1) : i + 1}</span>
                <span className="town-list-label">{t(town)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
