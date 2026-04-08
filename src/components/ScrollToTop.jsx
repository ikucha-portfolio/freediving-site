import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 👇 まず強制的に止める（これが超重要）
    window.scrollTo(0, 0);

    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const yOffset = -100;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // 👇 少し遅らせる（DOM安定後）
        setTimeout(() => {
          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }, 50);
      }
    }
  }, [pathname, hash]);

  return null;
}