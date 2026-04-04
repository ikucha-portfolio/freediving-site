import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import TwoColumn from "../components/layout/TwoColumn";
import TitleBlock from "../components/ui/TitleBlock";
import BodyText from "../components/ui/BodyText";
import Card from "../components/ui/Card";
import Container from "../components/layout/Container";

export default function Home() {
  return (
    <main>
{/* HERO */}
<section className="relative w-full h-screen pt-20 overflow-hidden">

  {/* 画像 */}
  <div className="absolute inset-0">
    <img
      src="/images/hero2.jpeg"
      alt="Freediving"
      className="w-full h-full object-cover"
      style={{ filter: "saturate(0.9) brightness(1.05)" }}
    />
  </div>

  {/* コンテンツ */}
  <div className="relative z-10 h-full flex items-center">

    {/* ← ここ追加（超重要） */}
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
      

      {/* Freediving セクション */}
      <Section variant="compact">
  <Container>

    <TwoColumn variant="compact">

      {/* 左 */}
      <div className="space-y-5">

        <TitleBlock>
          <span translate="no" className="notranslate">
            WATS FREEDIVING
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
    className="group text-xs tracking-[0.2em] text-[#5a6b74] hover:text-[#2f3e46]"
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
    className="group text-xs tracking-[0.2em] text-[#5a6b74] hover:text-[#2f3e46]"
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
      

      {/* 右 */}
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

{/* Courses セクション */}
<Section variant="compact">
  <Container>

    {/* タイトル */}
    <div className="text-center mb-12">
      <TitleBlock center>Courses</TitleBlock>
    </div>

    {/* --- Skin Diving --- */}
    <div className="mb-16">

      <h3 className="text-xs tracking-[0.2em] text-gray-400 mb-6">
        SKIN DIVING COURSE
      </h3>

      <div>
        <Card
          variant="home"
          title="Skin Diving Course"
          description="シュノーケルを使っての海遊びが初心者の方、もっと上達したい方におすすめのコース"
        />
      </div>

    </div>

    {/* --- License --- */}
    <div>

      <h3 className="text-xs tracking-[0.2em] text-gray-400 mb-6">
        LICENSE COURSE
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        <Card
          variant="home"
          title="AIDA Level 1"
          description="フリーダイビング体験コース"
        />

        <Card
          variant="home"
          title="AIDA Level 2"
          description="フリーダイビング初級コース"
        />

        <Card
          variant="home"
          title="AIDA Level 3"
          description="フリーダイビング中級コース"
        />

      </div>

    </div>

  </Container>
</Section>
    </main>
  );
}