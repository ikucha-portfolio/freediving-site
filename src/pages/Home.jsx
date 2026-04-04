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
    
      <section className="relative w-full h-[80vh] md:h-[90vh] pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1663876065260-1f06695da535?w=1600&q=80"
            alt="Freediving"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.85) brightness(1.05)" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#faf8f5]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 max-w-4xl mx-auto space-y-6">

         <h1
  translate="no"
  className="text-4xl md:text-6xl font-light tracking-[0.05em] leading-[1.4] drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]"
>
  hico freediving
</h1>

<p className="text-base md:text-lg text-white/90 font-light tracking-wide leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
  海の中でしか味わえない静けさ、<br className="hidden md:block" />
  心も体もゆるむひとときを。
</p>

<Link
  to="/course"
  className="inline-block px-8 py-3 bg-white/90 text-[#5a6b74] border border-white/60 hover:bg-white transition-all text-sm tracking-widest backdrop-blur-sm"
>
  View Courses
</Link>

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
        <div className="flex gap-6 pt-2 text-sm text-[#5a6b74] tracking-wide">
          <Link to="/freediving" className="hover:opacity-70 transition">
            フリーダイビングについて →
          </Link>

          <Link to="/about" className="hover:opacity-70 transition">
            インストラクターについて →
          </Link>
        </div>

      </div>

      {/* 右 */}
      <div className="flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1759676233508-55c55aa1ff3f?q=80&w=800"
          alt="Freediver"
          className="w-[260px] md:w-[300px] aspect-square object-cover rounded-none"
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