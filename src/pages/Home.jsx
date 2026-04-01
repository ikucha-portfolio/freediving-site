import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import TwoColumn from "../components/layout/TwoColumn";
import TitleBlock from "../components/ui/TitleBlock";
import BodyText from "../components/ui/BodyText";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1663876065260-1f06695da535?w=1600&q=80"
            alt="Freediving"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.85) brightness(1.05)" }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 max-w-4xl mx-auto space-y-6">

          <h1 className="text-4xl md:text-6xl font-light tracking-[0.05em] leading-[1.4] drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]">
            Freediving in Amami
          </h1>

          <p className="text-base md:text-lg text-white/90 font-light tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
            Explore the ocean on a single breath
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
      {/* Freediving セクション */}
<Section>

  {/* 👇 これを追加（超重要） */}
  <div className="max-w-4xl mx-auto">

    <TwoColumn className="gap-8 md:gap-12">

      {/* 左 */}
      <div className="space-y-7">

        <TitleBlock>
          Free divingとは
        </TitleBlock>

        <BodyText>
          奄美大島は、豊かな自然が残る世界遺産の島です。
        </BodyText>

        <BodyText>
          穏やかな海と安定した環境は、
          フリーダイビングを始めるのに適しています。
        </BodyText>

        <BodyText>
          この海で、フリーダイビングを体験してみませんか。
        </BodyText>

        <Link to="/freediving">
          <div className="pt-4 text-sm text-[#5a6b74] tracking-wide hover:opacity-70 transition cursor-pointer">
            More →
          </div>
        </Link>

      </div>

      {/* 右 */}
      <div className="flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1759676233508-55c55aa1ff3f?q=80&w=800"
          alt="Freediver"
          className="w-[360px] md:w-[420px] aspect-[3/4] object-cover rounded-sm"
        />
      </div>

    </TwoColumn>

  </div>
      </Section>

      {/* Courses セクション */}
      <Section>

  {/* 👇これ追加 */}
  <div className="max-w-4xl mx-auto">

    <div className="text-center mb-20">
      <TitleBlock>Courses</TitleBlock>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

      <Card
        variant="home"
        title="Skin Diving Course"
        description="スキンダイビングの基礎を学ぶコース。無理なく安全に潜るためのスキルを習得します。"
      />

      <Card
        variant="home"
        title="AIDA Level 1"
        description="初心者向けコース。安全にフリーダイビングを始めるための基礎を学びます。"
      />

      <Card
        variant="home"
        title="AIDA Level 2"
        description="中級者向けコース。より深く、より長く潜るためのテクニックを習得します。"
      />

      <Card
        variant="home"
        title="AIDA Level 3"
        description="上級者向けコース。より高度な技術と安全管理を学び、限界に挑戦します。"
      />

    </div>

  </div>

</Section>

    </main>
  );
}