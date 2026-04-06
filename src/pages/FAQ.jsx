import { useState } from "react";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "初心者でも参加できますか？",
      a: "はい、初心者の方も大歓迎です。スキンダイビングから無理なく始められます。"
    },
    {
      q: "泳ぎが苦手でも大丈夫ですか？",
      a: "問題ありません。足のつく場所から練習し、徐々に慣れていきます。"
    },
    {
      q: "器材はレンタルできますか？",
      a: "はい、レンタル可能です。一部無料の器材もあります。"
    },
    {
      q: "一人での参加でも大丈夫ですか？",
      a: "お一人で参加される方も多いのでご安心ください。"
    },
    {
      q: "天候が悪い場合はどうなりますか？",
      a: "安全を最優先に判断し、日程変更または中止となる場合があります。"
    }
  ];

  return (
    <Section>
      <Container size="narrow">

        {/* タイトル */}
        <div className="text-center mb-20">
          <h1 className="text-3xl text-[#5a6b74]">FAQ</h1>
        </div>

        {/* FAQ */}
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

      </Container>
    </Section>
  );
}