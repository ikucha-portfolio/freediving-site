// components/layout/Footer.jsx

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f2]">
      <Container size="narrow">

        <div className="py-8 md:py-10 text-center space-y-4">

          {/* 区切り（極薄） */}
          <div className="w-4 h-px bg-[#d6dee2] mx-auto opacity-40" />

          {/* コピーライト */}
          <div className="text-[10px] tracking-[0.12em] text-[#c0ccd2]">
            © 2026 Hico Freediving
          </div>

        </div>

      </Container>
    </footer>
  );
}