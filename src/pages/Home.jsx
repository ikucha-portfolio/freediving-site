import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import TwoColumn from "../components/layout/TwoColumn";
import TitleBlock from "../components/ui/TitleBlock";
import BodyText from "../components/ui/BodyText";
import Container from "../components/layout/Container";
import { useState } from "react";

export default function Home() {
  const faqs = [
  {
    q: "初めてでも参加できますか？",
    a: "はい、ほとんどの方が未経験からのスタートです。インストラクターが丁寧にサポートします。"
  },
  {
    q: "泳ぎが得意でなくても大丈夫ですか？",
    a: "はい、大丈夫です。浮き方や呼吸の方法からゆっくり練習していきます。"
  },
  {
    q: "フリーダイビングは危険ではないですか？",
    a: "正しい知識とルールを守れば安全に楽しめます。講習でしっかり学べますのでご安心ください。"
  }
];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-[#f4f4f2]">

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

              <p
  className="
    text-sm md:text-base
    bg-gradient-to-b from-white to-white/70
    bg-clip-text text-transparent
    leading-[2.4]
    tracking-[0.12em]
    font-light
    drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]
  "
 style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
 >
  心も体もゆるむひとときを<br />
  一息で奄美ブルーに溶けましょう
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
      <Section variant="compact" className="bg-[#f4f4f2]">
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

                <Link to="/about" className="group text-xs tracking-[0.2em] text-[#5a6b74]">
                  <span className="inline-flex items-center gap-3">
                    ABOUT ME
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ••• →
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
<Section variant="compact" className="bg-[#f4f4f2]">
  <Container>

    <div className="mb-16 text-center">
      <TitleBlock>Courses</TitleBlock>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

      {[
        {
          title: "AIDA 1",
          label: "LICENSE",
          text: "フリーダイビング体験コース",
          id: "aida1"
        },
        {
          title: "AIDA 2",
          label: "LICENSE",
          text: "フリーダイビング初級コース",
          id: "aida2"
        },
        {
          title: "AIDA 3",
          label: "LICENSE",
          text: "フリーダイビング中級コース",
          id: "aida3"
        },
        {
          title: "Skin Diving",
          label: "SKIN DIVING",
          text: "シュノーケルから一歩先へ、海の中を楽しみたい方へ",
          id: "skin-diving"
        },
        {
          title: "Training",
          label: "TRAINING",
          text: "スキルアップ・継続のためのトレーニング",
          id: "training"
        }
      ].map((course, i) => (
        <div
          key={i}
          className="
            relative
            bg-[#f4f4f2]
            border border-[#e5e0d8]
            p-6
            pb-12
            flex flex-col
            transition
            hover:shadow-[0_2px_8px_rgba(0,0,0,0.03)]
          "
        >

          <div className="space-y-3">

            <div
              className="
                inline-block
                text-[10px]
                tracking-[0.25em]
                text-[#7a8a94]
                bg-[#eef3f5]
                px-2.5 py-1
                -ml-2
              "
            >
              {course.label}
            </div>

            <h3 className="text-[18px] font-light text-[#5a6b74] leading-[1.4]">
              {course.title}
            </h3>

            <p className="text-[14px] text-[#7a8a94] leading-[1.7]">
              {course.text}
            </p>

          </div>

          <Link
            to={`/courses#${course.id}`}
            className="
              absolute
              bottom-4
              right-5
              text-[12px]
              text-[#aab6bd]
              tracking-[0.2em]
              hover:opacity-60
              hover:translate-x-[2px]
              transition
            "
          >
            ••• →
          </Link>

        </div>
      ))}

    </div>

  </Container>
</Section>
      {/* Amami */}
      <Section className="bg-[#f4f4f2]">
        <Container>

          <div className="mb-10">
            <TitleBlock>Amami Sea</TitleBlock>
          </div>

          <div className="grid md:grid-cols-[1.3fr_1fr] items-start gap-8 md:gap-12">

            <div>
              <img
                src="/images/Amami sea.jpeg"
                alt="Amami Sea"
                className="w-full h-[360px] object-cover"
              />
            </div>

            <div className="max-w-[420px]">
  <p className="text-[15px] text-[#7a8a94] leading-[1.9]">
    奄美の海は、透明度の高い「奄美ブルー」と温暖な水温、そして穏やかな海況が揃った環境です。<br /><br />
    湾や入り江が多く、コンディションに合わせたポイント選びができるため、初心者から上級者まで安全に練習できます。<br /><br />
    さらに、珊瑚礁やウミガメなど豊かな自然環境も魅力です。
  </p>
            </div>

          </div>

        </Container>
      </Section>
     
{/* FAQ */}
<Section className="bg-[linear-gradient(180deg,#f4f4f2_0%,#eef6f8_100%)]">
  <Container size="narrow">

    <div className="mb-12">
      <TitleBlock>FAQ</TitleBlock>
    </div>

    <div className="space-y-3">
      {faqs.map((item, i) => (
        <div
          key={i}
          className="
            bg-white/40
            backdrop-blur-sm
            border border-[#e8eff2]
            rounded-none
            px-5 py-4
            transition
            hover:bg-white/60
          "
        >
          {/* 質問 */}
          <button
            onClick={() =>
              setOpenIndex(openIndex === i ? null : i)
            }
            className="w-full flex justify-between items-center text-left"
          >
            <p className="text-[14px] text-[#5a6b74]">
              Q. {item.q}
            </p>

            <span className="text-[#9fb2bb] text-lg">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          {/* 回答 */}
          {openIndex === i && (
            <p className="text-[#7a8a94] text-sm mt-4 leading-loose">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>

    <div className="mt-10 text-right">
  <Link
    to="/faq"
    className="group inline-flex items-center gap-2 text-[12px] text-[#aab6bd] tracking-[0.15em]"
  >
    <span>VIEW MORE</span>

    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-60">
      ••• →
    </span>
  </Link>
</div>

  

  </Container>
</Section>

      {/* Contact */}
      <Section className="relative py-24 overflow-hidden bg-[#f4f4f2]">

        {/* 水のレイヤー */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(220,235,240,0.4)_0%,rgba(220,235,240,0)_60%)]" />

        <div className="absolute top-1/3 left-[60%] -translate-x-1/2 w-[800px] h-[300px] bg-[#dbeff5] opacity-20 blur-[160px]" />

        <Container size="narrow">

          <div className="relative text-center space-y-8">

            <TitleBlock align="center">Contact</TitleBlock>

            <p className="text-[#9fb0b8] text-[13px] leading-[1.8]">
              ご相談からでも大丈夫です。<br />
              はじめての方もお気軽にご連絡ください。
            </p>

            <button className="px-10 py-3 text-[12px] tracking-[0.3em] text-[#5a6b74] border border-[#cfe0e6] bg-white/40 backdrop-blur-sm hover:bg-white/60 transition">
              CONTACT
            </button>

          </div>

        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-[#f4f4f2]">
        <Container size="narrow">

          <div className="py-8 text-center space-y-3">

            <div className="flex justify-center flex-wrap gap-4 text-[12px] text-[#7a8a94] tracking-[0.12em]">
              <a href="#">Freediving</a>
              <a href="#">Course</a>
              <a href="#">Price</a>
              <a href="#">About</a>
              <a href="#">Amami Sea</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </div>

            <div className="text-[11px] text-[#c0ccd2]">
              © 2026 Hico Freediving
            </div>

          </div>

        </Container>
      </footer>

    </main>
  );
}