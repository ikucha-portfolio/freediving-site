import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-[#f4f4f2]">

      {/* ===== HERO ===== */}
<section className="relative h-[45vh] md:h-[50vh] w-full overflow-hidden">

  <img
    src="/images/about-hero.jpeg"
    className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
  />

  <div className="absolute inset-0 bg-[#1c2b2e]/25" />

  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">

    {/* 名前 */}
    <h1 className="
      text-[#e8f0f2] 
      text-4xl md:text-5xl 
      tracking-[0.25em] 
      font-extralight
    ">
      hico
    </h1>

    {/* サブ（下に配置） */}
    <p className="
      mt-3
      text-[#b7c9cf]
      text-[10px] md:text-[11px]
      tracking-[0.35em]
    ">
      INSTRUCTOR
    </p>

  </div>

</section>

  {/* ===== STORY ===== */}
<Section className="pt-16 md:pt-24">
  <Container>

    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

      {/* ===== 左：ストーリー ===== */}
      <div className="max-w-[560px]">

        <p className="text-[11px] tracking-[0.3em] text-[#9fb2bb] mb-4">
          経歴
        </p>

        <div className="space-y-5 text-[#6b7c85] text-[14px] leading-[2] font-light">

          <p>
            愛知県出身。地元愛知の総合病院で4年勤務後、沖縄へ移住。
            それまで海で泳いだ経験はなく、足のつかない場所が怖くて浮き輪を使っていたが
            スキンダイビングを始め、少しずつ水中に慣れていく。
            「水中でもっと自由に動きたい、もっと深く潜りたい」と思うようになり
            2018年にフリーダイビングと出会い、その魅力に惹かれる。
          </p>

          <p>
            フリーダイビングの練習のためより良い環境を求めて奄美大島へ移住。
            現在は看護師として働きながら、大会出場に向けて日々練習している。
          </p>

          {/* メッセージ */}
          <div className="pt-5 border-t border-[#e5e0d8]">
            <p className="text-[15px] leading-[2.2] tracking-[0.04em] text-[#5a6b74]">
              これから海遊びを始めたい方、フリーダイビングに興味がある方、
              もっと深く潜れるようになりたい方、初心者から上級者まで、
              男女問わず大歓迎です。
            </p>
          </div>

        </div>

        {/* ===== PC用 CTA（文章右下） */}
        <div className="hidden md:flex justify-end mt-6">
          <div className="flex items-center gap-3">

            <span className="text-[13px] tracking-[0.1em] text-[#7a8a94]">
              hico
            </span>

            <Link to="/contact" className="text-[#7a8a94] hover:text-[#5a6b74] transition">
              <svg className="w-6 h-6 hover:scale-105 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </Link>

            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[#7a8a94] hover:text-[#5a6b74] transition">
              <svg className="w-6 h-6 hover:scale-105 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* ===== 右：写真 ===== */}
<div className="flex flex-col items-center">

  {/* 画像（中央） */}
  <img
    src="/images/instructor.jpeg"
    className="
      w-full
      max-w-[320px] md:max-w-[420px]
      h-[320px] md:h-[420px]
      object-cover
      object-[center_35%]
    "
  />

  {/* CTA（右寄せ） */}
  <div className="
    md:hidden
    w-full max-w-[320px]
    flex justify-end
    mt-2
  ">

    <div className="flex items-center gap-3">

      <span className="text-[12px] tracking-[0.1em] text-[#7a8a94]">
        hico
      </span>

      {/* メール */}
      <Link to="/contact" className="text-[#7a8a94]">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      </Link>

      {/* Instagram */}
      <a href="https://www.instagram.com/hico0624/" target="_blank" rel="noopener noreferrer" className="text-[#7a8a94]">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1.2" />
        </svg>
      </a>

    </div>

  </div>

</div>
</div>

  </Container>
</Section>    

      {/* ===== PROFILE ===== */}
      <Section variant="compact">
        <Container>

          <div className="max-w-[900px] mx-auto grid md:grid-cols-3 gap-12 md:gap-16 text-left mt-4 md:mt-8">

{/* LICENSE */}
<div>
  <p className="text-[11px] tracking-[0.25em] text-[#9fb2bb] mb-3">
    免許・資格
  </p>

  <div className="space-y-2 text-[#5a6b74] text-[13px] leading-[1.7] font-light">
    <p>AIDA フリーダイビングインストラクター</p>
    <p>YOGA インストラクター RYT200</p>
    <p>看護師免許</p>
  </div>
</div>
            {/* OCEAN */}
            <div>
              <p className="text-[11px] tracking-[0.25em] text-[#9fb2bb] mb-4">
                大会出場歴 -海洋
              </p>

              <div className="space-y-4 text-[#6b7c85] text-[13px] leading-[1.9] font-light">
                <p>AIDA Panglao Depth games TAIWAN CUP 2023</p>
                <p>15TH AIDA PANGLAO DEPTH GAMES 2023 FINAL</p>
                <p>AIDA Volcano Cup 2024</p>
                <p>21st AIDA Panglao Depth Games Final 2024</p>
                <p>AIDA Panglao Depth Championship 2024 -2</p>
              </div>
            </div>

            {/* POOL */}
            <div>
              <p className="text-[11px] tracking-[0.25em] text-[#9fb2bb] mb-4">
                大会出場歴 -プール
              </p>

              <div className="space-y-4 text-[#6b7c85] text-[13px] leading-[1.9] font-light">
                <p>AIDA Yuinoshima Freediving Cup 2nd🥈</p>
                <p>AIDA Freediving Pool Games Japan Suzuka 1st🥇</p>
                <p>AIDA Freediving Pool Games Japan Kusatsu 2nd🥈</p>
                <p>AIDA Freediving Pool Games Japan Wakayama 3rd🥉</p>
                <p>AIDA JAPAN FREEDIVING POOL CHAMPIONSHIPS 2026 女子1st🥇</p>
              </div>
            </div>

          </div>

        </Container>
      </Section>

    </main>
  );
}