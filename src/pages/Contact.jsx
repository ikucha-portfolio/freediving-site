import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import TitleBlock from "../components/ui/TitleBlock";
import TwoColumn from "../components/layout/TwoColumn";

export default function Contact() {
  return (
    <main className="bg-[#f4f4f2] min-h-screen flex items-center">

      <Section className="w-full py-10 md:py-16">
        <Container>

          <TwoColumn>

            {/* 左：タイトル＋説明 */}
            <div className="space-y-8">

              {/* タイトル */}
              <TitleBlock>Contact</TitleBlock>

              {/* テキスト */}
              <div className="space-y-6">

                <p className="text-[14px] text-[#5a6b74] leading-[2]">
                  はじめての方もご安心ください。<br />
                  ご予約だけでなく、ご相談からでも大丈夫です。
                </p>

                <p className="text-[13px] text-[#7a8a94] leading-[1.8]">
                  まだ具体的に決まっていなくても問題ありません。<br />
                  わかる範囲でご記入いただければ大丈夫です◎
                </p>
{/* Instagram */}
<a
  href="https://instagram.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center gap-4
    text-[#7a8a94] hover:text-[#5a6b74]
    transition group
  "
>
  {/* テキスト */}
  <span className="text-[14px] tracking-[0.05em]">
    DMからのお問い合わせはこちら
  </span>

  {/* アイコン */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7 transition-all duration-300 group-hover:scale-105"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.2" />
  </svg>
</a>
    

              </div>
            </div>

            {/* 右：フォーム */}
            <form
              action="https://formspree.io/f/xreonlzl"
              method="POST"
              className="space-y-3"
            >
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/thanks"
              />

              <input
                name="name"
                type="text"
                placeholder="お名前・年齢"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <input
                name="email"
                type="email"
                placeholder="メールアドレス（例：example@gmail.com）"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <input
                name="phone"
                type="tel"
                placeholder="電話番号"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <input
                name="date"
                type="text"
                placeholder="希望日程（例：◯月◯日 午前）"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <input
                name="course"
                type="text"
                placeholder="希望コース（例：AIDA2）"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <textarea
                name="experience"
                placeholder="海での経験（例：シュノーケリング経験あり／スキンダイビング初心者です）"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm h-14 placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <textarea
                name="goals"
                placeholder="課題・目標（例：リラックスして潜れるようになりたい）"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm h-14 placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <input
                name="rental"
                type="text"
                placeholder="レンタル希望（例：フィン・マスク）"
                className="w-full p-2.5 border border-[#e5e0d8] bg-white/40 text-sm placeholder:text-[#aab6bd] focus:outline-none focus:border-[#5a6b74]"
              />

              <div className="pt-6 text-center">
                <button
                  type="submit"
                  className="px-10 py-2.5 text-[12px] tracking-[0.3em] text-[#5a6b74] border border-[#cfe0e6] bg-white/40 hover:bg-white/60 transition"
                >
                  SEND
                </button>
              </div>

            </form>

          </TwoColumn>

        </Container>
      </Section>

    </main>
  );
}