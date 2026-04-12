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
  className="md:hidden flex items-center justify-center w-6 h-6 relative"
  onClick={() => setIsOpen(!isOpen)}
>

  {/* 上 */}
  <span
    className={`
      absolute w-5 h-[1px] transition-all duration-500 ease-out
      ${isActiveHeader ? "bg-[#5a6b74]" : "bg-white"}
      ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}
    `}
  />

  {/* 中 */}
  <span
    className={`
      absolute w-5 h-[1px] transition-all duration-500 ease-out
      ${isActiveHeader ? "bg-[#5a6b74]" : "bg-white"}
      ${isOpen ? "opacity-0" : "opacity-100"}
    `}
  />

  {/* 下 */}
  <span
    className={`
      absolute w-5 h-[1px] transition-all duration-500 ease-out
      ${isActiveHeader ? "bg-[#5a6b74]" : "bg-white"}
      ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5 w-3"}
    `}
  />

</button>
        </div>
      </header>

     {/* ================= MOBILE MENU ================= */}
<div
  className={`md:hidden fixed inset-0 z-[100] transition-all duration-300 ${
    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>

  {/* 背景 */}
  <div
    className="absolute inset-0 bg-[#f5f3ef]"
    onClick={() => setIsOpen(false)}
  />

  {/* メニュー本体 */}
  <div className="
    absolute top-0 right-0
    w-[75%] h-full
    bg-[#f5f3ef]
    px-8 py-24
    flex flex-col
  ">

    {/* ===== CLOSE BUTTON（美化版） ===== */}
    <button
      onClick={() => setIsOpen(false)}
      className="
        absolute top-6 right-6
        w-10 h-10
        flex items-center justify-center
        z-[200]

        rounded-full
        bg-white/30 backdrop-blur-md
        border border-white/40

        opacity-80 hover:opacity-100
        transition-all duration-500 ease-out

        hover:scale-105
        active:scale-95
      "
    >
      <span className="absolute w-5 h-[1px] bg-[#5a6b74] rotate-45" />
      <span className="absolute w-5 h-[1px] bg-[#5a6b74] -rotate-45" />
    </button>

    {/* ナビ */}
    <nav className="flex flex-col space-y-4 text-[#5a6b74]">
      <NavLink to="/" className={navItemClass} onClick={() => setIsOpen(false)}>Home</NavLink>
      <NavLink to="/courses" className={navItemClass} onClick={() => setIsOpen(false)}>Courses</NavLink>
      <NavLink to="/price" className={navItemClass} onClick={() => setIsOpen(false)}>Price</NavLink>
      <NavLink to="/about" className={navItemClass} onClick={() => setIsOpen(false)}>About</NavLink>
      <NavLink to="/faq" className={navItemClass} onClick={() => setIsOpen(false)}>FAQ</NavLink>
      <NavLink to="/contact" className={navItemClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
    </nav>

    {/* SNS */}
    <div className="mt-8">
      <a
        href="https://www.instagram.com/hico0624/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-3
          text-[#7a8a94] hover:text-[#5a6b74]
          transition
        "
      >
        <span className="text-[13px] tracking-[0.15em]">
          hico
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 hover:scale-105 transition"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1.2" />
        </svg>
      </a>
    </div>

  </div>
</div>
        
      
    </>
  );
}

export default Header;