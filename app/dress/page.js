"use client";

import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { useLang } from "@/components/LangProvider";
import { SPOTS, catById } from "@/lib/data";

function useEmptyBody(lang) {
  if (lang === "ja") return "（文章準備中）";
  if (lang === "en") return "(text coming soon)";
  return "（စာ ပြင်ဆင်နေသည်）";
}

export default function DressPage() {
  const { lang, ui, t } = useLang();
  const emptyBody = useEmptyBody(lang);
  const cat = catById("dress");
  const items = SPOTS.filter((s) => s.category === "dress");

  return (
    <div>
      <header className="header-dark">
        <div className="wrap">
          <p className="header-eyebrow-dark">WEAR</p>
          <h1 className="header-title-dark">{ui.dressTitle}</h1>
          <p className="header-lead-dark">{ui.dressLead}</p>
        </div>
      </header>

      <section className="cat-section">
        <div className="wrap">
          <Reveal className="cat-head">
            <p className="eyebrow">07 — {(cat.en || "").toUpperCase()}</p>
            <h2 className="cat-title">{t(cat)}</h2>
            <span className="cat-sub">{lang === "ja" ? cat.ja : cat.en}</span>
          </Reveal>

          {items.length === 0 && <p className="not-ready not-ready-light">{ui.notReady}</p>}

          <div className="cat-grid">
            {items.map((s) => (
              <Reveal as="article" key={s.id} className="cat-card">
                <PhotoPlaceholder path={s.photo} alt={t(s.name) || s.id} credit={s.credit} className="cat-thumb" />
                <h3 className="cat-name">{t(s.name) || s.id}</h3>
                <p className="cat-body">{t(s.body) || emptyBody}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
