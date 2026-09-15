"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LangProvider";

const TABS = [
  { id: "home", href: "/", my: "ပင်မ", en: "Home", ja: "ホーム" },
  { id: "see", href: "/see", my: "ကြည့်ရန်", en: "See", ja: "見る" },
  { id: "taste", href: "/taste", my: "စားရန်", en: "Taste", ja: "味わう" },
  { id: "dress", href: "/dress", my: "ဝတ်စုံ", en: "Dress", ja: "装う" },
];

const LANGS = [
  { id: "my", label: "မြန်မာ" },
  { id: "en", label: "EN" },
  { id: "ja", label: "日本語" },
];

function activeTabId(pathname) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/see")) return "see";
  if (pathname.startsWith("/taste")) return "taste";
  if (pathname.startsWith("/dress")) return "dress";
  return "";
}

export default function Nav() {
  const { lang, setLang, ui } = useLang();
  const pathname = usePathname();
  const current = activeTabId(pathname);

  return (
    <nav className="nav">
      <Link href="/" className="brand">
        {ui.brand}
      </Link>
      <div className="tabs">
        {TABS.map((t) => (
          <Link
            key={t.id}
            href={t.href}
            className={"tab" + (current === t.id ? " tab-on" : "")}
          >
            {lang === "ja" ? t.ja : lang === "en" ? t.en : t.my}
          </Link>
        ))}
      </div>
      <div className="langs">
        {LANGS.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setLang(l.id)}
            className={"lang" + (l.id === lang ? " lang-on" : "")}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
