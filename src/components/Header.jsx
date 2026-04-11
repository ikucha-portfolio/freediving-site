import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHeroPage =
    location.pathname === "/" ||
    location.pathname === "/about";

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    if (isHeroPage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHeroPage]);

  // ヘッダー状態
  const isActiveHeader =
    isOpen ? true : isHeroPage ? isScrolled : true;

  // スクロールロック
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItemClass = ({ isActive }) =>
    `block py-3 text-sm tracking-[0.1em] ${
      isActive ? "opacity-100" : "opacity-60"
    }`;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isActiveHeader
            ? "bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#e8e4dd] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between">

          {/* ロゴ */}
          <NavLink
            to="/"
            className={`text-sm tracking-[0.25em] font-extralight ${
              isActiveHeader ? "text-[#5a6b74]" : "text-white"
            }`}
          >
            hico freediving
          </NavLink>

          {/* PCナビ */}
          <nav
            className={`hidden md:flex gap-10 text-xs ${
              isActiveHeader ? "text-[#7a8a94]" : "text-white/80"
            }`}
          >
            <NavLink to="/" className={navItemClass}>Home</NavLink>
            <NavLink to="/courses" className={navItemClass}>Courses</NavLink>
            <NavLink to="/price" className={navItemClass}>Price</NavLink>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
            <NavLink to="/faq" className={navItemClass}>FAQ</NavLink>
            <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          </nav>

          {/* ハンバーガー */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-5 h-[1px] ${isActiveHeader ? "bg-[#5a6b74]" : "bg-white"}`} />
            <span className={`w-5 h-[1px] ${isActiveHeader ? "bg-[#5a6b74]" : "bg-white"}`} />
            <span className={`w-3 h-[1px] ${isActiveHeader ? "bg-[#5a6b74]" : "bg-white"}`} />
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >

        {/* 背景（完全に覆う） */}
        <div
          className="absolute inset-0 bg-[#f5f3ef]"
          onClick={() => setIsOpen(false)}
        />

        {/* 右スライドメニュー */}
        <div className="
          absolute top-0 right-0
          w-[75%] h-full
          bg-[#f5f3ef]
          px-8 py-24
          flex flex-col justify-between
        ">

          {/* ナビ */}
          <nav className="flex flex-col space-y-4 text-[#5a6b74]">
            <NavLink to="/" className={navItemClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/courses" className={navItemClass} onClick={() => setIsOpen(false)}>Courses</NavLink>
            <NavLink to="/price" className={navItemClass} onClick={() => setIsOpen(false)}>Price</NavLink>
            <NavLink to="/about" className={navItemClass} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/faq" className={navItemClass} onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <NavLink to="/contact" className={navItemClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </nav>

          {/* CTA & SNS */}
          <div className="space-y-6">

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center border border-[#cfd8dc] py-3 text-xs tracking-[0.2em]"
            >
              CONTACT
            </NavLink>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center text-[#7a8a94]"
            >
              <span className="text-sm tracking-[0.2em]">
                INSTAGRAM →
              </span>
            </a>

          </div>

        </div>
      </div>
    </>
  );
}

export default Header;