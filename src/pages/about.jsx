import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import TwoColumn from "../components/layout/TwoColumn";

export default function About() {
  return (
    <main className="bg-[#f4f4f2]">

      {/* ===== HERO ===== */}
      <section className="relative h-[45vh] md:h-[50vh] w-full overflow-hidden">

        <img
          src="/images/about-hero.jpeg"
          className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
        />

        {/* くすみ（弱め） */}
        <div className="absolute inset-0 bg-[#1c2b2e]/25" />

        {/* 下グラデ */}
      

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">

          <p className="text-white/70 text-[11px] tracking-[0.3em] mb-4">
            INSTRUCTOR
          </p>

          <h1 className="text-white text-5xl md:text-6xl tracking-[0.3em] font-extralight">
            hico
          </h1>

        </div>
      </section>


      {/* ===== STORY ===== */}
      <Section className="pt-24 md:pt-32">
        <Container>

          <TwoColumn>

            {/* テキスト */}
            <div className="flex items-start">

              <div className="max-w-[420px]">

                {/* メッセージ */}
                <div className="mb-8 pl-6 border-l border-[#d8e2e6]">
                  <p className="text-[14px] leading-[2] text-[#6b7c85] font-light tracking-[0.03em]">
                    これから海遊びを始めたい方、<br />
                    フリーダイビングに興味がある方、<br />
                    もっと深く潜れるようになりたい方、<br />
                    初心者から上級者まで、男女問わず大歓迎です。
                  </p>
                </div>

                {/* タイトル */}
                <p className="text-[11px] tracking-[0.25em] text-[#9fb2bb] mb-6">
                  経歴
                </p>

                {/* 本文 */}
                <div className="space-y-4 text-[#6b7c85] text-[13px] leading-[1.7] font-light">

                  <p>
                    愛知県出身。地元愛知の総合病院で4年勤務後、沖縄へ移住。
                    それまで海で泳いだ経験はなく、足のつかない場所が怖くて浮き輪を使っていた。
                  </p>

                  <p>
                    スキンダイビングを始め、少しずつ水中に慣れていく。
                  </p>

                  <p>
                    水中でもっと自由に動きたい、もっと深く潜りたい。
                    2018年にフリーダイビングと出会い、その魅力に惹かれる。
                  </p>

                  <p>
                    より良い環境を求めて奄美大島へ移住。
                    現在は看護師として働きながら、競技にも挑戦している。
                  </p>

                </div>

                {/* Instagram */}
                <div className="mt-8">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#7a8a94] hover:text-[#5a6b74] transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17" cy="7" r="1.2" />
                    </svg>

                    <span className="text-[12px] tracking-[0.1em]">
                      Instagram
                    </span>
                  </a>
                </div>

              </div>

            </div>

            {/* 画像 */}
            <div className="flex justify-center">
              <img
                src="/images/instructor.jpeg"
                className="w-full max-w-[460px] h-[400px] object-cover object-[center_35%]"
              />
            </div>

          </TwoColumn>

        </Container>
      </Section>


      {/* ===== LICENSE & RESULTS ===== */}
      <Section>
        <Container>

          <div className="grid md:grid-cols-3 gap-16">

            {/* LICENSE */}
            <div>
              <p className="text-[11px] tracking-[0.25em] text-[#9fb2bb] mb-6">
                資格
              </p>

              <div className="space-y-4 text-[#5a6b74] text-[13px] leading-[1.9] font-light">
                <p>AIDA フリーダイビングインストラクター</p>
                <p>YOGA インストラクター RYT200</p>
                <p>看護師免許</p>
              </div>
            </div>

            {/* OCEAN */}
            <div>
              <p className="text-[11px] tracking-[0.25em] text-[#9fb2bb] mb-6">
                大会出場歴 — 海洋
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
              <p className="text-[11px] tracking-[0.25em] text-[#9fb2bb] mb-6">
                大会出場歴 — プール
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