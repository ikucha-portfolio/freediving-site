import { Link, useNavigate } from "react-router-dom";
import Section from "../components/layout/Section";
import TwoColumn from "../components/layout/TwoColumn";
import TitleBlock from "../components/ui/TitleBlock";
import BodyText from "../components/ui/BodyText";
import Container from "../components/layout/Container";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();  // ←これ追加
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
<section
  onClick={() => {
    if (window.innerWidth < 768) {
      navigate("/courses");
    }
  }}
  className="
    relative z-0 w-full h-screen pt-20 overflow-hidden
    cursor-pointer md:cursor-default
  "
>

  {/* ===================== */}
  {/* 背景 */}
  {/* ===================== */}
  <div className="absolute inset-0">
    <picture>
      {/* 📱 モバイル */}
      <source
        media="(max-width: 768px)"
        srcSet="/images/hero-mobile.jpeg"
      />

      {/* 📲 iPad */}
      <source
        media="(max-width: 1024px)"
        srcSet="/images/hero-tablet.jpeg"
      />

      {/* 💻 PC */}
      <img
        src="/images/hero2.jpeg"
        alt="Freediving"
        className="w-full h-full object-cover"
        style={{
          filter: "saturate(0.9) brightness(1.05)"
        }}
      />
    </picture>

    {/* iPad 可読性補助 */}
    <div className="hidden md:block lg:hidden absolute inset-0 bg-black/20" />
  </div>

  {/* ===================== */}
  {/* コンテンツ */}
  {/* ===================== */}
  <div className="relative h-full">
<div
  className="
    absolute md:relative
    md:hidden

    left-[8%]

    top-[45%]
    -translate-y-1/2

    w-[min(85%,340px)]

    text-white
    text-left

    space-y-6   /* ← ★全体の余白アップ */
  "
>

  {/* タイトル */}
  <h1
    translate="no"
    className="
      notranslate
      text-[30px]
      font-extralight
      tracking-[0.07em]
      leading-[1.25]
      text-white/95
    "
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    hico freediving
  </h1>

  {/* コピー */}
  <p
    className="
      text-[13px]
      text-white/80
      leading-[1.9]   /* ← ★ここ効いてる */
      tracking-[0.12em]
      font-light
    "
    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
  >
    奄美ブルーへ。深く、自由に。
  </p>

  {/* CTA */}
  <Link
    to="/courses"
    onClick={(e) => e.stopPropagation()}
    className="
      inline-block
      mt-4   /* ← ★CTA距離 */

      px-6 py-2.5
      text-[11px]
      tracking-[0.25em]

      bg-white/5
      border border-white/20
      text-white

      backdrop-blur-md

      transition-all duration-500 ease-out
      hover:bg-white/10
      hover:translate-y-1
      hover:scale-[0.98]
      active:translate-y-[2px]
    "
  >
    コースを見る
  </Link>

</div>
    {/* 📲 iPad / 💻 PC（既存維持） */}
    <div className="hidden md:flex h-full items-center">
      <div
        className="
          max-w-6xl mx-auto w-full
          px-6 md:px-8
          flex

          justify-center
          lg:justify-end
        "
      >
        <div
          className="
            max-w-xl
            lg:mr-[10%]

            text-white
            text-center

            space-y-6 md:space-y-8

            -mt-[2vh]
          "
        >
          <h1
            translate="no"
            className="
              notranslate
              text-5xl lg:text-6xl
              font-extralight
              tracking-[0.08em]
              leading-[1.3]
            "
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            hico freediving
          </h1>

          <p
            className="
              text-[15px]
              text-white/80
              leading-[2]
              tracking-[0.12em]
              font-light
            "
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            奄美ブルーへ。深く、自由に。
          </p>

          <Link
            to="/courses"
            onClick={(e) => e.stopPropagation()}
            className="
              inline-block
              mt-5

              px-6 py-2.5
              text-[12px]
              tracking-[0.25em]

              bg-white/5
              border border-white/20
              text-white

              backdrop-blur-md

              transition-all duration-500 ease-out
              hover:bg-white/10
              hover:translate-y-1
              hover:scale-[0.98]
              active:translate-y-[2px]
            "
          >
            コースを見る
          </Link>
        </div>
      </div>
    </div>

  </div>
</section>
      
{/* Freediving */}
<Section variant="large" className="pt-32 md:pt-40 bg-[#f4f4f2]">
  <Container>

    <TwoColumn variant="compact">

      {/* テキスト */}
      <div className="space-y-5">

        <TitleBlock>
         WHAT IS FREEDIVING
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

        {/* PCのみCTA */}
        <div className="hidden md:flex pt-6 justify-end">
          <Link
            to="/about"
            className="group text-xs tracking-[0.2em] text-[#5a6b74]"
          >
            <span translate="no" className="inline-flex items-center gap-3">
              ABOUT ME
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ••• →
              </span>
            </span>
          </Link>
        </div>

      </div>

      {/* 画像＋CTA（スマホ用） */}
      <div className="flex flex-col items-end space-y-6">

        <img
          src="/images/freediving.jpeg"
          alt="Freediver"
          className="w-full md:w-[320px] aspect-[3/4] object-cover"
        />

        {/* スマホのみCTA */}
        <div className="flex md:hidden w-full justify-end">
          <Link
            to="/about"
            className="group text-xs tracking-[0.2em] text-[#5a6b74]"
          >
            <span translate="no" className="inline-flex items-center gap-3">
              ABOUT ME
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ••• →
              </span>
            </span>
          </Link>
        </div>

      </div>

    </TwoColumn>

  </Container>
</Section>
      
{/* Courses */}
<Section variant="compact" className="bg-[#f4f4f2]">
  <Container>

    {/* タイトル */}
    <div className="mb-14 text-center">
      <TitleBlock>
      Course
      </TitleBlock>
    </div>

    {/* カード一覧 */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">

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
          onClick={() => navigate(`/courses#${course.id}`)}
          className="
            bg-[#f4f4f2]
            border border-[#e5e0d8]

            p-3 md:p-4

            flex flex-col justify-between

            cursor-pointer
            transition-all duration-300

            hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]
            hover:-translate-y-[2px]
            active:scale-[0.98]
          "
        >

          {/* 上部 */}
          <div className="space-y-1.5">

            {/* ラベル */}
            <div
              className="
                inline-block
                text-[10px]
                tracking-[0.25em]
                text-[#7a8a94]
                bg-[#eef3f5]
                px-2 py-0.5
                -ml-1
              "
            >
              {course.label}
            </div>

            {/* タイトル */}
            <h3 translate="no" className="text-[18px] font-light text-[#5a6b74] leading-[1.25]">
              {course.title}
            </h3>

            {/* 説明 */}
            <p className="text-[14px] text-[#7a8a94] leading-[1.45]">
              {course.text}
            </p>

          </div>

          {/* CTA */}
          <Link
            to={`/courses#${course.id}`}
            onClick={(e) => e.stopPropagation()}
            className="
              mt-2.5
              self-end

              text-[12px]
              text-[#aab6bd]
              tracking-[0.2em]

              transition-all duration-300
              hover:opacity-60
              hover:translate-x-[2px]
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
<Section variant="default" className="bg-[#f4f4f2]">
  <Container>

    <div className="mb-12">
      <TitleBlock>Amami Sea</TitleBlock>
    </div>

    <div className="grid md:grid-cols-[1.3fr_1fr] items-start gap-8 md:gap-12">

      <div>
        <img
          src="/images/amami-sea.jpeg"
          alt="Amami Sea"
          className="w-full h-[360px] object-cover"
        />
      </div>

      <div className="max-w-[420px] space-y-6">
        <p className="text-[15px] text-[#7a8a94] leading-[1.9]">
          奄美の海は、透明度の高い「奄美ブルー」と温暖な水温、そして穏やかな海況が揃った環境です。
        </p>

        <p className="text-[15px] text-[#7a8a94] leading-[1.9]">
          湾や入り江が多く、コンディションに合わせたポイント選びができるため、初心者から上級者まで安全に練習できます。
        </p>

        <p className="text-[15px] text-[#7a8a94] leading-[1.9]">
          さらに、珊瑚礁やウミガメなど豊かな自然環境も魅力です。
        </p>
      </div>

    </div>

  </Container>
</Section>
     
{/* FAQ */}
<Section variant="compact" className="bg-[linear-gradient(180deg,#f4f4f2_0%,#eef6f8_100%)]">
  <Container size="narrow">

    <div className="mb-14">
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
    <span translate="no">VIEW MORE</span>

    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-60">
      ••• →
    </span>
  </Link>
</div>

  

  </Container>
</Section>

    {/* Contact */}
<Section variant="large" className="relative overflow-hidden bg-[#f4f4f2]">

  {/* 水のレイヤー */}
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(220,235,240,0.4)_0%,rgba(220,235,240,0)_60%)]" />
  <div className="absolute top-1/3 left-[60%] -translate-x-1/2 w-[800px] h-[300px] bg-[#dbeff5] opacity-20 blur-[160px]" />

  <Container size="narrow">

    {/* 👇 中身だけ完成形に置き換え */}
    <div className="relative text-center space-y-10">

      <TitleBlock align="center">
        Contact
        
      </TitleBlock>

      {/* 説明文（濃さ調整済み） */}
      <p className="text-[#7a8a94] text-[13px] leading-[1.8]">
        ご相談からでも大丈夫です。<br />
        はじめての方もお気軽にご連絡ください。
      </p>

      {/* 補助テキスト */}
      <p className="text-[12px] text-[#8fa0a8] tracking-[0.2em]">
        お問い合わせはこちら
      </p>

      {/* CTAエリア */}
      <div className="relative flex justify-center items-center">

        {/* ボタン（完全中央） */}
        <Link
          to="/contact"
          className="
            px-10 py-3
            text-[12px]
            tracking-[0.3em]

            text-white
            bg-[#7a8a94]

            rounded-none

            transition-all duration-300

            hover:bg-[#5a6b74]
            hover:translate-y-1
            active:scale-[0.97]
          "
        >
          CONTACT
        </Link>

        {/* Instagram（補助・安定版） */}
        <a
          href="https://www.instagram.com/hico0624/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute
            left-[calc(50%+130px)]

            text-[#7a8a94]

            transition-all duration-300
            hover:opacity-60
            hover:scale-110
          "
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17" cy="7" r="1.2" />
          </svg>
        </a>

      </div>

    </div>

  </Container>
</Section>  
      

    </main>
  );
}




