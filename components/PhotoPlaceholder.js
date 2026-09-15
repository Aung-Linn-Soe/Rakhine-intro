"use client";

import { useState } from "react";

// F-6/F-7: 写真が public/images/ に存在すればそれを表示し、
// まだ無ければ（読み込みエラー時）ファイル名入りの灰色プレースホルダーにフォールバックする。
export default function PhotoPlaceholder({ path, alt, credit, shape, className, style }) {
  const [failed, setFailed] = useState(false);
  const src = path ? "/" + path.replace(/^\/+/, "") : "";

  if (path && !failed) {
    return (
      <div
        className={"photo-fill" + (className ? " " + className : "")}
        style={{ borderRadius: shape, ...style }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || ""}
          loading="lazy"
          onError={() => setFailed(true)}
          className="photo-fill-img"
        />
        {credit && <span className="photo-credit">{credit}</span>}
      </div>
    );
  }

  return (
    <div
      className={"photo-placeholder" + (className ? " " + className : "")}
      style={{ borderRadius: shape, ...style }}
    >
      <span className="photo-placeholder-label">{path}</span>
    </div>
  );
}
