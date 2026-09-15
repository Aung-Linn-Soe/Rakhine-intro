"use client";

import { useEffect, useRef, useState } from "react";

// スクロールで画面に入ってきたらふわっと表示する演出。
export default function Reveal({ as: Tag = "div", className, style, children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if (rect.top < vh * 0.96) {
      setShown(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    const safety = setTimeout(() => setShown(true), 1400);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(22px)",
        transition: "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)",
      }}
    >
      {children}
    </Tag>
  );
}
