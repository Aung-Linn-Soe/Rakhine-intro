"use client";

import { useState } from "react";
import Link from "next/link";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { useLang } from "./LangProvider";
import { CATS, SPOTS, townById } from "@/lib/data";

function useEmptyBody(lang) {
  if (lang === "ja") return "（文章準備中）";
  if (lang === "en") return "(text coming soon)";
  return "（စာ ပြင်ဆင်နေသည်）";
}

export default function TownView({ id }) {
  const { lang, ui, t } = useLang();
  const emptyBody = useEmptyBody(lang);
  const [cat, setCat] = useState("all");

  const town = townById(id);
  if (!town) {
    return (
      <div className="wrap" style={{ padding: "80px 0" }}>
        <p>Town not found.</p>
        <Link href="/">{ui.back}</Link>
      </div>
    );
  }

  const townCats = CATS.filter((c) => c.scope === "town");
  const mine = SPOTS.filter((s) => s.town === town.id && townCats.some((c) => c.id === s.category));
  const items = cat === "all" ? mine : mine.filter((s) => s.category === cat);

  // ミニマップの拡大表示（元デザインのズーム計算を移植）
  const z = 3.2;
  const fx = town.x / 1560;
  const fy = town.y / 1300;
  const zw = z * 100 + "%";
  const zl = (0.5 - z * fx) * 100 + "%";
  const zt = (0.5 - (0.8333 * z * fy) / 0.625) * 100 + "%";

  return (
    <div>
      <header className="town-header">
        <div className="town-header-inner">
          <Link href="/" className="back-btn">
            {ui.back}
          </Link>
          <p className="town-eyebrow">TOWNSHIP</p>
          <h1 className="town-title">{t(town)}</h1>
          <p className="town-sub">{lang === "my" ? town.en : town.my}</p>
        </div>
      </header>

      <div className="town-map-wrap">
        <div className="town-map-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rakhine_state_map_mm.svg"
            alt={lang === "ja" ? `${town.ja}の位置` : `${town.en} on the map`}
            className="town-map-img"
            style={{ width: zw, left: zl, top: zt }}
          />
          <div className="town-map-pin" />
        </div>

        <div className="town-cats">
          <button
            type="button"
            onClick={() => setCat("all")}
            className={"town-cat-btn" + (cat === "all" ? " town-cat-btn-on" : "")}
          >
            {ui.all}
            <span className="town-cat-count">{mine.length}</span>
          </button>
          {townCats.map((c) => {
            const n = mine.filter((s) => s.category === c.id).length;
            const on = cat === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCat(c.id)}
                className={
                  "town-cat-btn" + (on ? " town-cat-btn-on" : n === 0 ? " town-cat-btn-empty" : "")
                }
              >
                {t(c)}
                <span className="town-cat-count">{n}</span>
              </button>
            );
          })}
        </div>

        <div className="town-items">
          {items.length === 0 && <p className="not-ready not-ready-light">{ui.notReady}</p>}
          <div className="town-item-rows">
            {items.map((s, i) => {
              const c = CATS.find((x) => x.id === s.category);
              const why = t(s.why);
              const note = t(s.note);
              return (
                <article
                  key={s.id}
                  className={"spot-row" + (i % 2 ? " spot-row-reverse" : "")}
                >
                  <div className="spot-media">
                    <PhotoPlaceholder path={s.photo} alt={t(s.name) || s.id} credit={s.credit} className="town-item-photo" />
                  </div>
                  <div className="spot-body">
                    <div className="town-item-cat">{(c?.en || "").toUpperCase()}</div>
                    <h3 className="town-item-name">{t(s.name) || s.id}</h3>
                    <div className="spot-rule" />
                    <p className="spot-text">{t(s.body) || emptyBody}</p>
                    {why && (
                      <div className="spot-why">
                        <div className="spot-why-label">WHY GO</div>
                        <div className="spot-why-text">{why}</div>
                      </div>
                    )}
                    {note && (
                      <p className="spot-note">
                        <span className="spot-note-label">{ui.note}</span>
                        {note}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
