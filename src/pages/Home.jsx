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
      <Section>
        <TwoColumn className="gap-24">

          {/* 左 */}
          <div className="space-y-8 max-w-[480px]">

            <TitleBlock>
              Free divingとは
            </TitleBlock>

            <BodyText>
              フリーダイビングは、酸素タンクを使わずに一呼吸で潜水するマリンスポーツです。
            </BodyText>

            <BodyText>
              静寂に包まれた海中で、自分自身と向き合い、心身のリラックスと集中力を高めることができます。
            </BodyText>

            <BodyText>
              AIDA（国際フリーダイビング協会）の認定資格を取得し、安全に楽しむための知識と技術を学びましょう。
            </BodyText>

          </div>

          {/* 右 */}
          <div className="flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1759676233508-55c55aa1ff3f?q=80&w=800"
              alt="Freediver"
              className="w-[420px] aspect-[3/4] object-cover rounded-sm"
            />
          </div>

        </TwoColumn>
      </Section>

      {/* Courses セクション */}
      <Section>

        <div className="text-center mb-20">
          <TitleBlock>Courses</TitleBlock>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          <Card
            variant="home"
            title="AIDA Level 1"
            description="初心者向けコースの簡単な説明。安全にフリーダイビングを始めるための基礎を学びます。"
          />

          <Card
            variant="home"
            title="AIDA Level 2"
            description="中級者向けコースの簡単な説明。より深く、より長く潜るためのテクニックを習得します。"
          />

          <Card
            variant="home"
            title="Skin Diving Course"
            description="スキンダイビングコースの簡単な説明。シュノーケリングからステップアップしたい方に。"
          />

        </div>

      </Section>

    </main>
  );
}