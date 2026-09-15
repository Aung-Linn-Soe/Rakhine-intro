"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { useLang } from "@/components/LangProvider";
import { SPOTS, townById, catById } from "@/lib/data";

function useEmptyBody(lang) {
  if (lang === "ja") return "（文章準備中）";
  if (lang === "en") return "(text coming soon)";
  return "（စာ ပြင်ဆင်နေသည်）";
}

export default function SeePage() {
  const { lang, ui, t } = useLang();
  const emptyBody = useEmptyBody(lang);

  const pagodaItems = SPOTS.filter((s) => s.category === "pagoda");
  const seaItems = SPOTS.filter((s) => s.category === "sea");
  const restCats = [
    { id: "waterfall", num: "04" },
    { id: "other", num: "05" },
  ];

  return (
    <div>
      <header className="header-dark">
        <div className="wrap">
          <p className="header-eyebrow-dark">SEE</p>
          <h1 className="header-title-dark">{ui.seeTitle}</h1>
          <p className="header-lead-dark">{ui.seeLead}</p>
        </div>
      </header>

      {/* 02 — PAGODAS */}
      <section style={{ padding: "76px 0 0" }}>
        <div className="wrap">
          <Reveal className="pagoda-intro">
            <p className="eyebrow" style={{ textAlign: "center" }}>
              02 — PAGODAS
            </p>
            <h2 className="pagoda-intro-title">{t(catById("pagoda"))}</h2>
            <p className="pagoda-intro-text">{ui.pagodaIntro}</p>
          </Reveal>

          <div className="spot-rows">
            {pagodaItems.map((s, i) => {
              const town = townById(s.town);
              const why = t(s.why);
              const note = t(s.note);
              return (
                <Reveal
                  as="article"
                  key={s.id}
                  className={"spot-row" + (i % 2 ? " spot-row-reverse" : "")}
                >
                  <div className="spot-media">
                    <PhotoPlaceholder path={s.photo} alt={t(s.name) || s.id} credit={s.credit} className="spot-photo-round" />
                    <div className="spot-num">{i < 9 ? "0" + (i + 1) : i + 1}</div>
                  </div>
                  <div className="spot-body">
                    {town && (
                      <Link href={`/town/${town.id}`} className="chip">
                        {t(town)}
                      </Link>
                    )}
                    <h3 className="spot-name">{t(s.name) || s.id}</h3>
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — SEA */}
      <section className="sea-section">
        <div className="wrap">
          <Reveal className="sea-head">
            <p className="header-eyebrow-dark">03 — SEA</p>
            <h2 className="sea-title">{t(catById("sea"))}</h2>
            <p className="sea-intro">{ui.seaIntro}</p>
          </Reveal>
          {seaItems.length === 0 && <p className="not-ready">{ui.notReady}</p>}
          <div className="sea-grid">
            {seaItems.map((s) => {
              const town = townById(s.town);
              const why = t(s.why);
              return (
                <Reveal as="article" key={s.id} className="sea-card">
                  <div className="sea-photo">
                    <span className="sea-photo-label">{s.photo}</span>
                  </div>
                  <h3 className="sea-name">{t(s.name) || s.id}</h3>
                  {town && (
                    <Link href={`/town/${town.id}`} className="chip-dark">
                      {t(town)}
                    </Link>
                  )}
                  <p className="sea-body">{t(s.body) || emptyBody}</p>
                  {why && <p className="sea-why">{why}</p>}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — WATERFALLS / 05 — OTHER */}
      {restCats.map(({ id, num }) => {
        const cat = catById(id);
        const items = SPOTS.filter((s) => s.category === id);
        return (
          <section className="cat-section" key={id}>
            <div className="wrap">
              <Reveal className="cat-head">
                <p className="eyebrow">
                  {num} — {(cat.en || "").toUpperCase()}
                </p>
                <h2 className="cat-title">{t(cat)}</h2>
                <span className="cat-sub">{lang === "ja" ? cat.ja : cat.en}</span>
              </Reveal>
              {items.length === 0 && <p className="not-ready not-ready-light">{ui.notReady}</p>}
              <div className="cat-grid">
                {items.map((s) => {
                  const town = townById(s.town);
                  return (
                    <Reveal as="article" key={s.id} className="cat-card">
                      <PhotoPlaceholder path={s.photo} alt={t(s.name) || s.id} credit={s.credit} className="cat-thumb" />
                      <h3 className="cat-name">{t(s.name) || s.id}</h3>
                      {town && (
                        <Link href={`/town/${town.id}`} className="chip">
                          {t(town)}
                        </Link>
                      )}
                      <p className="cat-body">{t(s.body) || emptyBody}</p>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
