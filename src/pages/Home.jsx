import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1663876065260-1f06695da535?w=1600&q=80"
            alt="Freediving"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.85) brightness(1.05)" }}
          />

          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 max-w-4xl mx-auto space-y-6">

          {/* タイトル */}
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.05em] leading-[1.4] drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]">
            Freediving in Amami
          </h1>

          {/* サブ */}
          <p className="text-base md:text-lg text-white/90 font-light tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            Explore the ocean on a single breath
          </p>

          {/* ボタン */}
          <Link
            to="/course"
            className="inline-block px-8 py-3 bg-white/90 text-[#5a6b74] border border-white/60 hover:bg-white transition-all text-sm tracking-widest backdrop-blur-sm"
          >
            View Courses
          </Link>

        </div>

      </section>

    </main>
  );
}