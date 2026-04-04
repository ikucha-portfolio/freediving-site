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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

  {/* Skin */}
  <div className="bg-white border border-[#e5e0d8] p-8 space-y-4 hover:shadow-sm transition">

    <div className="text-[10px] tracking-[0.2em] text-[#aab6bd]">
      SKIN DIVING
    </div>

    <h3 className="text-[18px] font-light text-[#6b7c85]">
      Skin Diving
    </h3>

    <p className="text-[14px] text-[#8fa0a8] leading-[1.8]">
      シュノーケルを使っての海遊びが初心者の方、
      <br />
      もっと上達したい方におすすめ
    </p>

    <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] pt-2">
      LEARN MORE →
    </div>

  </div>

  {/* AIDA1 */}
  <div className="bg-white border border-[#e5e0d8] p-8 h-[320px] flex flex-col hover:shadow-sm transition">

  <div className="space-y-4">

    <div className="text-[10px] tracking-[0.2em] text-[#aab6bd]">
      LICENSE
    </div>

    <h3 className="text-[18px] font-light text-[#6b7c85]">
      AIDA 1
    </h3>

    {/* 👇ここが超重要 */}
    <p className="text-[14px] text-[#8fa0a8] leading-[1.8] min-h-[125px]">
      フリーダイビング体験コース
    </p>

  </div>

  {/* 👇普通に余白で調整 */}
  <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] mt-6">
    LEARN MORE →
  </div>

</div>

  {/* AIDA2 */}
<div className="bg-white border border-[#e5e0d8] p-8 h-[320px] flex flex-col hover:shadow-sm transition">

  <div className="space-y-4">

    <div className="text-[10px] tracking-[0.2em] text-[#aab6bd]">
      LICENSE
    </div>

    <h3 className="text-[18px] font-light text-[#6b7c85]">
      AIDA 2
    </h3>

    <p className="text-[14px] text-[#8fa0a8] leading-[1.8] min-h-[125px]">
      フリーダイビング初級コース
    </p>

  </div>

  <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] mt-6">
    LEARN MORE →
  </div>

</div>

  {/* AIDA3 */}
<div className="bg-white border border-[#e5e0d8] p-8 h-[320px] flex flex-col hover:shadow-sm transition">

  <div className="space-y-4">

    <div className="text-[10px] tracking-[0.2em] text-[#aab6bd]">
      LICENSE
    </div>

    <h3 className="text-[18px] font-light text-[#6b7c85]">
      AIDA 3
    </h3>

    <p className="text-[14px] text-[#8fa0a8] leading-[1.8] min-h-[125px]">
      フリーダイビング中級コース
    </p>

  </div>

  <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] mt-6">
    LEARN MORE →
  </div>

</div>
</div>

  </Container>
</Section>

{/* Amami Sea */}
<Section>
  <Container>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* テキスト */}
      <div className="space-y-6">

        <h2 className="text-2xl md:text-3xl font-light text-[#5a6b74]">
          Amami Sea
        </h2>

        <p className="text-[15px] text-[#7a8a94] leading-[1.9]">
          透き通るような青い海。<br />
          静かに潜る時間の中で、<br />
          自分と向き合う特別な体験ができます。
        </p>

        <div className="text-[12px] text-[#aab6bd] tracking-[0.15em]">
          VIEW MORE →
        </div>

      </div>

      {/* 画像 */}
      <div className="w-full h-[300px] bg-gray-200">
        {/* 後で画像入れる */}
      </div>

    </div>

  </Container>
</Section>

{/* FAQ */}
<Section variant="compact">
  <Container size="narrow">

    <div className="text-center mb-10">
      <TitleBlock center>FAQ</TitleBlock>
    </div>

    <div className="space-y-6">

      <div>
        <p className="font-light text-[#5a6b74]">
          Q.初めてでもできますか？
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
          18歳以上で健康に問題のない方なら体力に自信がなくても大丈夫です。
        </p>
      </div>

      <div>
        <p className="font-light text-[#5a6b74]">
          Q.機材のレンタルはできますか？
        </p>
        <p className="text-[#7a8a94] text-sm mt-2">
          はい、どのコースでも必要な機材は全てレンタル可能です。
        </p>
      </div>

    </div>

  </Container>
</Section>

{/* Contact */}
<Section>
  <Container size="narrow">

    <div className="text-center space-y-6">

      <TitleBlock center>Contact</TitleBlock>

      <p className="text-[#7a8a94] text-sm">
        ご予約・お問い合わせはこちらから
      </p>

      <button className="px-6 py-3 border border-[#5a6b74] text-[#5a6b74] text-sm tracking-widest hover:bg-[#5a6b74] hover:text-white transition">
        CONTACT
      </button>

    </div>

  </Container>
</Section>

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