"use client";

import { useLang } from "./LangProvider";

export default function Footer() {
  const { ui } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-kicker">{ui.kicker}</p>
        <p className="footer-text">{ui.footer}</p>
        <p className="footer-credit">
          地図：rakhine_state_map_mm.svg ／ 写真：images/ に追加
        </p>
      </div>
    </footer>
  );
}
