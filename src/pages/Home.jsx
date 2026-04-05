import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import TwoColumn from "../components/layout/TwoColumn";
import TitleBlock from "../components/ui/TitleBlock";
import BodyText from "../components/ui/BodyText";
import Container from "../components/layout/Container";


export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative w-full h-screen pt-20 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/images/hero2.jpeg"
            alt="Freediving"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.9) brightness(1.05)" }}
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-5xl mx-auto w-full px-8 flex justify-end">

            <div className="max-w-xl text-white space-y-8 text-center">

              <h1
                translate="no"
                className="notranslate text-4xl md:text-6xl font-extralight tracking-[0.08em] leading-[1.5]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                hico freediving
              </h1>

              <p className="text-sm md:text-base text-white/85 leading-loose tracking-wide">
                一呼吸で海の世界に飛び込める楽しさを。<br />
                心も体もゆるむひとときを。
              </p>

              <Link
                to="/course"
                className="inline-block px-8 py-3 text-sm tracking-widest
                bg-white/10 border border-white/30 text-white
                backdrop-blur-md
                hover:bg-white/20 transition-all duration-300"
              >
                コースを見る
              </Link>

            </div>

          </div>
        </div>

      </section>

      {/* Freediving */}
      <Section variant="compact">
        <Container>

          <TwoColumn variant="compact">

            <div className="space-y-5">

              <TitleBlock>
                <span translate="no" className="notranslate">
                  WHAT IS FREEDIVING
                </span>
              </TitleBlock>

              <BodyText>
                <p>
                  フリーダイビングは、酸素ボンベを使わずに
                  自分の息だけで海や水中に潜るスポーツです。
                </p>

                <p>
                  一呼吸で海の世界に飛び込む。
                  その静けさと、心も体もゆるむ感覚を、
                  ぜひ体験してみてください。
                </p>
              </BodyText>

              <div className="pt-10 space-y-6 flex flex-col items-end">

                <Link
                  to="/freediving"
                  className="group text-xs tracking-[0.2em] text-[#5a6b74]"
                >
                  <span className="inline-flex items-center gap-3">
                    FREEDIVING
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="group text-xs tracking-[0.2em] text-[#5a6b74]"
                >
                  <span className="inline-flex items-center gap-3">
                    ABOUT ME
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>

              </div>
            </div>

            <div className="flex justify-end">
              <img
                src="/images/freediving.jpeg"
                alt="Freediver"
                className="w-[260px] md:w-[320px] aspect-[3/4] object-cover"
              />
            </div>

          </TwoColumn>

        </Container>
      </Section>

      {/* Courses */}
      <Section variant="compact">
        <Container>

          <div className="mb-12">
            <TitleBlock>Courses</TitleBlock>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

            {[
              { title: "Skin Diving", label: "SKIN DIVING", text: "シュノーケルを使っての海遊びが初心者の方、もっと上達したい方におすすめ" },
              { title: "AIDA 1", label: "LICENSE", text: "フリーダイビング体験コース" },
              { title: "AIDA 2", label: "LICENSE", text: "フリーダイビング初級コース" },
              { title: "AIDA 3", label: "LICENSE", text: "フリーダイビング中級コース" }
            ].map((course, i) => (
              <div key={i} className="bg-white border border-[#e5e0d8] p-8 h-[320px] flex flex-col hover:shadow-sm transition">

                <div className="space-y-4">
                  <div className="text-[10px] tracking-[0.2em] text-[#aab6bd]">
                    {course.label}
                  </div>

                  <h3 className="text-[18px] font-light text-[#5a6b74]">
                    {course.title}
                  </h3>

                  <p className="text-[14px] text-[#7a8a94] leading-[1.8] min-h-[125px]">
                    {course.text}
                  </p>
                </div>

                <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] mt-6">
                  LEARN MORE →
                </div>

              </div>
            ))}

          </div>

        </Container>
      </Section>
{/* Amami */}
<Section>
  <Container>

    {/* タイトル */}
    <div className="mb-10">
      <TitleBlock>Amami Sea</TitleBlock>
    </div>

    {/* コンテンツ */}
    <div className="grid md:grid-cols-[1.3fr_1fr] items-start gap-8 md:gap-12">

  {/* 左：画像 */}
  <div>
    <img
      src="/images/Amami sea.jpeg"
      alt="Amami Sea"
      className="w-full h-[360px] object-cover"
    />
  </div>

  {/* 右：テキスト */}
  <div className="max-w-[420px]">

    <p className="text-[15px] text-[#7a8a94] leading-[1.9]">
  透き通るような青い海。<br />
  静かに潜る時間の中で、<br />
  自分と向き合う特別な体験ができます。<br />
  <br />
  自然豊かな世界遺産の島、奄美大島。<br />
  手つかずの自然に囲まれたこの場所で、<br />
  ゆっくりとした時間の流れを感じてみてください。
</p>

    <div className="mt-6 text-[12px] text-[#aab6bd] tracking-[0.15em]">
      VIEW MORE →
    </div>

      </div>

    </div>

  </Container>
</Section>

      {/* FAQ */}
      <Section variant="compact">
        <Container size="narrow">

          <div className="mb-12">
            <TitleBlock>FAQ</TitleBlock>
          </div>

          <div className="space-y-6">

            <div>
              <p className="font-light text-[#5a6b74]">
                Q. 初めてでもできますか？
              </p>
              <p className="text-[#7a8a94] text-sm mt-2">
                はい、スキンダイビングコースからご参加いただけます。
              </p>
            </div>

            <div>
              <p className="font-light text-[#5a6b74]">
                Q. 年齢や体力に制限はありますか？
              </p>
              <p className="text-[#7a8a94] text-sm mt-2">
                18歳以上で健康に問題のない方なら大丈夫です。
              </p>
            </div>

            <div>
              <p className="font-light text-[#5a6b74]">
                Q. 機材のレンタルはできますか？
              </p>
              <p className="text-[#7a8a94] text-sm mt-2">
                はい、全てレンタル可能です。
              </p>
            </div>

          </div>

        </Container>
      </Section>

     {/* Contact */}
<Section className="relative py-24 overflow-hidden bg-[#f7fafb]">

  {/* 🌊 ベース（超薄いグラデーション） */}
  <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7fafb_0%,#f2f7f9_40%,#f7fafb_100%)]" />

  {/* 🌊 水のゆらぎ①（横に広げる） */}
  <div className="
    absolute top-1/3 left-1/2 -translate-x-1/2
    w-[800px] h-[300px]
    bg-[#dbeff5]
    opacity-30
    blur-[120px]
  " />

  {/* 🌊 水のゆらぎ②（少しズラす） */}
  <div className="
    absolute bottom-0 left-1/3
    w-[600px] h-[250px]
    bg-[#e8f6fa]
    opacity-20
    blur-[100px]
  " />

  <Container size="narrow">

    <div className="relative text-center space-y-8">

      <TitleBlock align="center">Contact</TitleBlock>

      <p className="text-[#6f848e] text-[15px] leading-[1.9]">
        海にふれるきっかけを、<br />
        ここからはじめてみませんか
      </p>

      <p className="text-[#9fb0b8] text-[13px] leading-[1.8]">
        ご相談からでも大丈夫です。<br />
        はじめての方もお気軽にご連絡ください。
      </p>

      <button className="
        px-10 py-3
        text-[12px] tracking-[0.25em]
        text-[#5a6b74]
        border border-[#cfe0e6]
        bg-white/40
        backdrop-blur-sm
        hover:bg-white/60
        transition
      ">
        CONTACT
      </button>

      {/* 🌊 SNS（主役にする） */}
      <div className="flex justify-center gap-10 pt-8 text-[#6f848e]">

        {/* Instagram */}
        <a href="#" className="hover:scale-110 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-7 h-7"
          >
            <rect x="2" y="2" width="20" height="20" rx="6" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </a>

        {/* YouTube */}
        <a href="#" className="hover:scale-110 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M23.5 6.2a2.8 2.8 0 0 0-2-2C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.7a2.8 2.8 0 0 0-2 2C0 8 0 12 0 12s0 4 .5 5.8a2.8 2.8 0 0 0 2 2c1.9.7 9.5.7 9.5.7s7.6 0 9.5-.7a2.8 2.8 0 0 0 2-2C24 16 24 12 24 12s0-4-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
          </svg>
        </a>

      </div>

    </div>

  </Container>
</Section>

{/* Footer */}
<footer className="border-t border-[#e5edf0]">
  <Container size="narrow">

    <div className="py-10 text-center space-y-4">

      {/* ナビ（最小） */}
      <div className="flex justify-center flex-wrap gap-5 text-[12px] text-[#9fb0b8] tracking-[0.08em]">
        <a href="#">Freediving</a>
        <a href="#">Course</a>
        <a href="#">Price</a>
        <a href="#">About</a>
        <a href="#">Amami Sea</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </div>

      {/* コピーライト */}
      <div className="text-[11px] text-[#c0ccd2]">
        © 2026 Hico Freediving
      </div>

    </div>

  </Container>
</footer>
    </main>
  );
}