import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-[#faf8f5] border-b border-[#e8e4dd]">

      <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* ロゴ */}
        <Link
          to="/"
          className="text-sm tracking-[0.25em] font-extralight text-[#5a6b74]"
        >
          hico freediving
        </Link>

        {/* ナビ */}
        <nav className="flex gap-10">
          <Link to="/freediving" className="text-xs text-[#7a8a94] hover:opacity-70">
            Freediving
          </Link>
          <Link to="/course" className="text-xs text-[#7a8a94] hover:opacity-70">
            Courses
          </Link>
          <Link to="/price" className="text-xs text-[#7a8a94] hover:opacity-70">
            Price
          </Link>
          <Link to="/about" className="text-xs text-[#7a8a94] hover:opacity-70">
            About
          </Link>
          <Link to="/amami-sea" className="text-xs text-[#7a8a94] hover:opacity-70">
            Amami Sea
          </Link>
          <Link to="/faq" className="text-xs text-[#7a8a94] hover:opacity-70">
            FAQ
          </Link>
          <Link to="/contact" className="text-xs text-[#7a8a94] hover:opacity-70">
            Contact
          </Link>
        </nav>

      </div>

    </header>
  );
}

export default Header;