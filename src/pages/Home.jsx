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
      <Section>
        <Container size="narrow">

          <div className="space-y-6">

            <TitleBlock>Contact</TitleBlock>

            <p className="text-[#7a8a94] text-sm">
              ご予約・お問い合わせはこちらから
            </p>

            <button className="px-6 py-3 border border-[#5a6b74] text-[#5a6b74] text-sm tracking-widest hover:bg-[#5a6b74] hover:text-white transition">
              CONTACT
            </button>

          </div>

        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#eee] py-10 mt-20">
        <Container>
          <div className="text-center text-sm text-[#aab6bd]">
            © 2026 Hico Freediving
          </div>
        </Container>
      </footer>

    </main>
  );
}