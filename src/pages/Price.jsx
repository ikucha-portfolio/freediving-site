import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom";

export default function Price() {
  return (
    <Section>
      <Container size="narrow">

        {/* タイトル */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl text-[#5a6b74]">
            Price
          </h1>
        </div>

        {/* --- COURSE --- */}
        <div className="space-y-6 mb-10">

          {[
            {
              title: "Skin Diving",
              label: "SKIN DIVING",
              price: "¥12,000",
              desc: "海洋講習",
              duration: "2時間",
              id: "skin-diving"
            },
            {
              title: "AIDA1",
              label: "LICENSE",
              price: "¥25,000",
              desc: "座学＋海洋講習",
              duration: "1日（5〜6時間）",
              note: "※別途AIDA申請料あり",
              id: "aida1"
            },
            {
              title: "AIDA2",
              label: "LICENSE",
              price: "¥55,000",
              desc: "座学＋海洋・プール講習",
              duration: "2.5〜3日（日程を分けての受講可能）",
              note: "※別途認定料・プール使用料あり",
              id: "aida2"
            },
            {
              title: "AIDA3",
              label: "LICENSE",
              price: "¥65,000",
              desc: "座学＋海洋・プール講習",
              duration: "3〜3.5日（日程を分けての受講可能）",
              note: "※別途認定料・プール使用料あり",
              id: "aida3"
            }
          ].map((course, i) => (
            <div
              key={i}
              className="bg-[#f4f4f2] border border-[#e5e0d8] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-sm transition"
            >
              {/* 左 */}
              <div>
                <div className="text-[10px] tracking-[0.2em] text-[#aab6bd] mb-2">
                  {course.label}
                </div>

                <h2 className="text-[18px] font-light text-[#5a6b74] mb-2">
                  {course.title}
                </h2>

                <p className="text-[14px] text-[#7a8a94]">
                  {course.desc}
                </p>

                <p className="text-[13px] text-[#7a8a94] mt-2">
                  所要日程：{course.duration}
                </p>

                {course.note && (
                  <p className="text-[12px] text-[#aab6bd] mt-2 leading-relaxed">
                    {course.note}
                  </p>
                )}
              </div>

              {/* 右 */}
              <div className="flex items-center gap-6">
                <span className="text-lg md:text-xl font-light text-[#5a6b74]">
                  {course.price}
                </span>

                {/* 👇ここが重要 */}
                <Link
                  to={`/courses#${course.id}`}
                  className="inline-block"
                >
                  <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] hover:opacity-60 transition">
                    コース内容へ →
                  </div>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* --- 注意書き --- */}
        <div className="text-xs text-[#5a6b74] mb-16 space-y-2">
          <p>※レンタル料金は含まれておりません</p>
        </div>

        {/* --- RENTAL --- */}
        <div className="pt-12 border-t border-[#eef4f7]">

          <h2 className="text-sm text-[#5a6b74] mb-6">
            器材レンタル料金
          </h2>

          <div className="space-y-3 text-sm text-[#6b7c85]">
            {[
              { name: "フィン（ショート）", price: "¥500" },
              { name: "マスク", price: "¥500" },
              { name: "シュノーケル", price: "¥500" },
              { name: "ウェットスーツ", price: "¥1,000" },
              { name: "ウェイトベルト", price: "¥500" },
              { name: "ウェイト", price: "無料" },
              { name: "ラニヤード", price: "無料" }
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-[#e5e0d8] pb-2"
              >
                <span>{item.name}</span>
                <span className={item.price === "無料" ? "text-[#5a6b74]" : ""}>
                  {item.price}
                </span>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </Section>
  );
}