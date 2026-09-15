"use client";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { SPOTS, catById } from "@/lib/data";

function useEmptyBody(lang) {
  if (lang === "ja") return "（文章準備中）";
  if (lang === "en") return "(text coming soon)";
  return "（စာ ပြင်ဆင်နေသည်）";
}

const SHAPES = ["18px", "50%", "150px 150px 18px 18px"];
const ASPECTS = ["4/3", "1/1", "4/5"];

export default function TastePage() {
  const { lang, ui, t } = useLang();
  const emptyBody = useEmptyBody(lang);
  const cat = catById("food");
  const items = SPOTS.filter((s) => s.category === "food");

  return (
    <div>
      <header className="header-dark">
        <div className="wrap">
          <p className="header-eyebrow-dark">TASTE</p>
          <h1 className="header-title-dark">{ui.tasteTitle}</h1>
          <p className="header-lead-dark">{ui.tasteLead}</p>
        </div>
      </header>

      <section className="food-section">
        <div className="food-blob-a" />
        <div className="food-blob-b" />
        <div className="wrap" style={{ position: "relative" }}>
          <Reveal className="cat-head">
            <p className="eyebrow">06 — FOOD</p>
            <h2 className="cat-title">{t(cat)}</h2>
            <span className="food-script">food</span>
          </Reveal>

          {items.length === 0 && <p className="not-ready not-ready-light">{ui.notReady}</p>}

          <div className="food-rows">
            {items.map((s, i) => {
              const why = t(s.why);
              return (
                <Reveal
                  as="article"
                  key={s.id}
                  className="food-cell"
                  style={{
                    marginTop: i === 0 ? 0 : -14,
                    alignSelf: i % 2 ? "flex-end" : "flex-start",
                    flexDirection: i % 2 ? "row-reverse" : "row",
                  }}
                >
                  <div className="food-photo-box">
                    <div
                      className="food-photo"
                      style={{
                        aspectRatio: ASPECTS[i % 3],
                        borderRadius: SHAPES[i % 3],
                        background: "repeating-linear-gradient(118deg,#C7DCEE 0 13px,#B9D2E8 13px 26px)",
                        padding: `0 12px ${i === 1 ? "34px" : "12px"}`,
                      }}
                    >
                      <span className="photo-placeholder-label">{s.photo}</span>
                    </div>
                  </div>
                  <div className="food-card">
                    <h3 className="food-card-title">{t(s.name) || s.id}</h3>
                    <p className="food-card-body">{t(s.body) || emptyBody}</p>
                    {why && <p className="food-card-why">{why}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
