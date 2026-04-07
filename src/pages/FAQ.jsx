import { useState } from "react";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    q: "初めてでも参加できますか？",
    a: "はい、可能です。ほとんどの方が未経験からのスタートです。インストラクターが一人ひとりに合わせて丁寧にサポートします。どのコースを受講したら良いかわからない場合も、お気軽にご相談ください。"
  },
  {
    q: "泳ぎが得意でなくても大丈夫ですか？",
    a: "はい、大丈夫です。足のつかない場所でも、浮き方や呼吸の方法からゆっくり練習していくのでご安心ください。"
  },
  {
    q: "フリーダイビングは危険ではないですか？",
    a: "正しい知識とルールを守れば、安全に楽しむことができます。安全に海遊びをするためにも、講習の受講をおすすめしています。"
  },
  {
    q: "年齢や体力に制限はありますか？",
    a: "参加条件は18歳以上で健康に問題のない方です。持病がある方は事前にご相談ください。"
  },
  {
    q: "器材のレンタルはできますか？",
    a: "はい、可能です。水着とタオルがあればご参加いただけます。必要な器材はすべてレンタル可能です。料金はPRICEページをご確認ください。"
  },
  {
    q: "講習にはどれくらいの日数が必要ですか？",
    a: "スキンダイビングは半日、AIDA1は1日（5〜6時間）、AIDA2は2.5〜3日、AIDA3は3〜3.5日が目安です。日程を分けての受講も可能ですのでご相談ください。"
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