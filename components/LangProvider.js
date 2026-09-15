"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { UI, pick as pickText } from "@/lib/data";

const LangContext = createContext({
  lang: "my",
  setLang: () => {},
  ui: UI.my,
  t: (obj) => pickText(obj, "my"),
});

const STORAGE_KEY = "rakhine-lang";

export function LangProvider({ children }) {
  const [lang, setLangState] = useState("my");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "my" || saved === "en" || saved === "ja") {
        setLangState(saved);
      }
    } catch (e) {
      // localStorageが使えない環境ではデフォルト(my)のまま
    }
  }, []);

  const setLang = (l) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch (e) {
      // 保存できなくても表示は切り替える
    }
  };

  const value = {
    lang,
    setLang,
    ui: UI[lang] || UI.my,
    t: (obj) => pickText(obj, lang),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
