import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 👇 Heroありページを定義
  const isHeroPage =
    location.pathname === "/" ||
    location.pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    if (isHeroPage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHeroPage]);

  // 👇 状態を統一
  const isActiveHeader = isHeroPage ? isScrolled : true;

  const navItemClass = ({ isActive }) =>
    `hover:opacity-100 transition ${
      isActive ? "opacity-100" : "opacity-60"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isActiveHeader
          ? "bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#e8e4dd] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-between">

        {/* ロゴ */}
        <NavLink
          to="/"
          translate="no"
          className={`notranslate text-sm tracking-[0.25em] font-extralight transition-colors duration-500 ${
            isActiveHeader ? "text-[#5a6b74]" : "text-white"
          }`}
        >
          hico freediving
        </NavLink>

        {/* ナビ */}
        <nav
          translate="no"
          className={`flex gap-10 text-xs transition-colors duration-500 ${
            isActiveHeader ? "text-[#7a8a94]" : "text-white/80"
          }`}
        >
          <NavLink to="/" className={navItemClass}>
            Home
          </NavLink>

          <NavLink to="/courses" className={navItemClass}>
            Courses
          </NavLink>

          <NavLink to="/price" className={navItemClass}>
            Price
          </NavLink>

          <NavLink to="/about" className={navItemClass}>
            About
          </NavLink>

          <NavLink to="/faq" className={navItemClass}>
            FAQ
          </NavLink>

          <NavLink to="/contact" className={navItemClass}>
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;