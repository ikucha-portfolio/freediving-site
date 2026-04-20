import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import TitleBlock from "../components/ui/TitleBlock";
import { Link, useNavigate } from "react-router-dom";

export default function Price() {
  const navigate = useNavigate(); // ←ここ！！
  return (
    <Section>
      <Container size="narrow">

        {/* タイトル */}
   <div className="mb-14 md:mb-16 text-center">
  <TitleBlock align="center">
    Price
  </TitleBlock>
</div>

        {/* --- COURSE --- */}
        <div className="space-y-5 mb-10">

          {[
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
            },
            {
              title: "Skin Diving",
              label: "SKIN DIVING",
              price: "¥12,000",
              desc: "海洋講習",
              duration: "2時間",
              id: "skin-diving"
            },
            {
              title: "Training",
              label: "TRAINING",
              price: "¥12,000",
              desc: "ビーチトレーニング",
              duration: "1セッション（2〜2.5時間）",
              id: "training"
            }
          ].map((course, i) => (
            <div
  key={i}
  onClick={() => {
    navigate(`/courses#${course.id}`);
  }}
  className="
    bg-[#f4f4f2]
    border border-[#e5e0d8]
    px-5 py-4
    flex items-center justify-between

    transition-all duration-300
    cursor-pointer

    hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]
    hover:-translate-y-[2px]

    active:scale-[0.98]
  "
>
            

              {/* 左 */}
              <div>

                {/* カテゴリー */}
                <div
                  className="
                    inline-block
                    text-[10px]
                    tracking-[0.25em]
                    text-[#7a8a94]
                    bg-[#eef3f5]/80
                    px-2.5 py-1
                    mb-1
                    -ml-2.5
                  "
                >
                  {course.label}
                </div>

                {/* タイトル */}
                 <h2 className="text-[18px] font-light text-[#5a6b74]">
                {/* 翻訳防止：コース名のみ守る */}
                 <span translate="no">{course.title}</span>
                </h2>

                <p className="text-[14px] text-[#7a8a94] mt-1">
                  {course.desc}
                </p>

                <p className="text-[13px] text-[#7a8a94] mt-0.5">
                  所要日程：{course.duration}
                </p>

                {course.note && (
                  <p className="text-[12px] text-[#aab6bd] mt-0.5">
                    {course.note}
                  </p>
                )}

              </div>

              {/* 右 */}
              <div className="flex flex-col items-end gap-1 min-w-[110px]">

                <span className="text-xl md:text-2xl font-light text-[#5a6b74]">
                  {course.price}
                </span>

                <Link
  to={`/courses#${course.id}`}
  onClick={(e) => e.stopPropagation()}
  className="
    text-[11px]
    text-[#aab6bd]
    tracking-[0.2em]
    hover:opacity-60
    hover:translate-x-[2px]
    transition
  "
>
  ••• →
</Link>

              </div>

            </div>
          ))}

        </div>

        {/* 注意書き */}
        <div className="text-xs text-[#5a6b74] mb-16 space-y-2">
          <p>※レンタル料金は含まれておりません</p>
        </div>
 {/* 注意書き */}
{/* --- BOOKING POLICY --- */}
<div className="pt-12 border-t border-[#eef4f7] mb-16 text-[#7a8a94] text-sm leading-relaxed">

  <h2 className="text-sm text-[#5a6b74] mb-6">
    キャンセルポリシー
  </h2>

  <div className="space-y-1">
    <p>当日のキャンセル：100％</p>
    <p>前日のキャンセル：50％</p>
    <p>2日前のキャンセル：20％</p>
    <p>3日前まで：無料</p>
  </div>

  <p className="mt-4">
    なお、当日の天候や海のコンディションにより、<br />
    安全を最優先に講習を中止させていただく場合がございます。<br />
    ご了承ください。
  </p>

  <p className="mt-2">
    その際の対応については、状況に応じて個別にご案内させていただきます。
  </p>

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