import CourseSection from "./components/CourseSection";

function App() {
  return (
    <section className="w-full bg-[#f8f7f5] py-28">

      <div className="max-w-4xl mx-auto px-8">

        {/* タイトル */}
        <div className="text-center mb-28">
          <h1 className="text-3xl md:text-4xl font-light text-[#5a6b74]">
            Courses
          </h1>
        </div>

        {/* 👇 AIDA1（コンポーネント化） */}
        <CourseSection />


{/* ===== AIDA2 ===== */}
<div className="flex flex-col md:flex-row-reverse items-center gap-16 mt-32">

  {/* 左（AIDA2では右に見える）：テキスト */}
  <div className="w-full md:w-1/2 max-w-[420px] mx-auto md:mx-0 space-y-8">

    <h3 className="text-xl font-light text-[#5a6b74]">
      AIDA Level 2
    </h3>

    <p className="text-sm text-[#7a8a94] leading-[2]">
      より深く長く潜るためのステップアップコース。
      呼吸法の強化とリラクゼーション技術を高め、
      安全に深度を伸ばしていきます。
    </p>

    <p className="text-sm text-[#7a8a94] leading-[2]">
      フリーダイビングの技術をさらに高め、
      水中での自由度と快適さを向上させます。
    </p>

    {/* カード */}
    <div className="bg-white border border-gray-100 p-6 space-y-4 w-full max-w-[380px]">

      <div>
        <p className="text-xs text-gray-400 mb-1">期間</p>
        <p className="text-sm text-[#5a6b74]">
          3日間（学科＋プール＋海洋講習）
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-1">受講条件</p>
        <p className="text-sm text-[#5a6b74]">
          AIDA1修了 または同等経験
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-1">料金</p>
        <p className="text-lg font-light text-[#5a6b74]">
          ¥55,000
        </p>
      </div>

    </div>

    <button className="text-xs border border-gray-400 px-5 py-2.5 text-[#5a6b74] hover:bg-black hover:text-white transition">
      お問い合わせ
    </button>

  </div>

  {/* 右（AIDA2では左に見える）：画像 */}
  <div className="w-full md:w-1/2 flex justify-center">

    <img
      src="https://picsum.photos/600/800?random=2"
      alt="AIDA2"
      className="w-full max-w-[400px] aspect-[3/4] object-cover rounded-sm"
    />

  </div>

</div>
      </div>

    </section>
  );
}

export default App;