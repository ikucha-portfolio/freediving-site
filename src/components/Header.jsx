import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
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
            isScrolled ? "text-[#5a6b74]" : "text-white"
          }`}
        >
          hico freediving
        </NavLink>

        {/* ナビ */}
        <nav
          translate="no"
          className={`flex gap-10 text-xs transition-colors duration-500 ${
            isScrolled ? "text-[#7a8a94]" : "text-white/80"
          }`}
        >
          <NavLink to="/courses" className="hover:opacity-70">
            Courses
          </NavLink>
          <NavLink to="/price" className="hover:opacity-70">
            Price
          </NavLink>
          <NavLink to="/about" className="hover:opacity-70">
            About
          </NavLink>
          <NavLink to="/faq" className="hover:opacity-70">
            FAQ
          </NavLink>
          <NavLink to="/contact" className="hover:opacity-70">
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;