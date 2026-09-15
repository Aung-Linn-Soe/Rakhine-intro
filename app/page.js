"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import TownMap from "@/components/TownMap";
import { useLang } from "@/components/LangProvider";
import { STATE_INFO } from "@/lib/data";

export default function HomePage() {
  const { ui, t } = useLang();

  const entries = [
    { key: "see", href: "/see", en: "SEE", title: ui.seeTitle, desc: ui.seeDesc, radius: "120px 120px 18px 18px" },
    { key: "taste", href: "/taste", en: "TASTE", title: ui.tasteTitle, desc: ui.tasteDesc, radius: "18px" },
    { key: "dress", href: "/dress", en: "WEAR", title: ui.dressTitle, desc: ui.dressDesc, radius: "50% 50% 18px 18px" },
  ];

  return (
    <div>
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-tint" />
        <span className="hero-filename">
          images/hero-mrauku-01.jpg — 表紙（夕方のミャウー仏塔群 / 横1600px）
        </span>
        <div className="hero-content">
          <p className="hero-eyebrow">RAKHINE STATE — MYANMAR</p>
          <h1 className="hero-title">{ui.catch}</h1>
          <div className="hero-scroll">
            <div className="hero-scroll-line" />
            <span className="hero-scroll-label">SCROLL</span>
          </div>
        </div>
        <div className="hero-curve" />
      </header>

      <Reveal as="section" className="statement-section">
        <p className="statement-kicker">{ui.kicker}</p>
        <p className="statement-text">{ui.statement}</p>
        <div className="statement-rule" />
      </Reveal>

      <section className="overview-section">
        <div className="wrap">
          <div className="overview-grid">
            <div className="overview-cell">
              <p className="overview-label">{ui.capital}</p>
              <p className="overview-value">{t(STATE_INFO.capital)}</p>
            </div>
            <div className="overview-cell">
              <p className="overview-label">{ui.area}</p>
              <p className="overview-value">{STATE_INFO.area}</p>
            </div>
            <div className="overview-cell">
              <p className="overview-label">{ui.districts}</p>
              <p className="overview-value">{STATE_INFO.districts}</p>
            </div>
            <div className="overview-cell">
              <p className="overview-label">{ui.townships}</p>
              <p className="overview-value">{STATE_INFO.townships}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="wrap">
          <Reveal className="map-section-head">
            <div>
              <p className="eyebrow">01 — MAP</p>
              <h2 className="section-title">{ui.mapTitle}</h2>
            </div>
            <p className="map-hint">{ui.mapHint}</p>
          </Reveal>
          <TownMap />
        </div>
      </section>

      <section className="entries">
        <div className="wrap">
          <div className="entries-grid">
            {entries.map((e) => (
              <Reveal key={e.key} as="div">
                <Link href={e.href} className="entry-card">
                  <div className="entry-thumb" style={{ borderRadius: e.radius }} />
                  <p className="entry-en">{e.en}</p>
                  <h3 className="entry-title">{e.title}</h3>
                  <p className="entry-desc">{e.desc}</p>
                  <span className="entry-more">{ui.more}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
