function CourseSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16">

      {/* 左：テキスト */}
      <div className="w-full md:w-1/2 max-w-[420px] mx-auto md:mx-0 space-y-8">

        <h3 className="text-xl font-light text-[#5a6b74]">
          AIDA Level 1
        </h3>

        <p className="text-sm text-[#7a8a94] leading-[2]">
          フリーダイビングの基礎を学ぶ初心者向けコース。
          安全な潜水のための知識、呼吸法、リラクゼーション、
          イコライゼーション（耳抜き）の基本を習得します。
        </p>

        <p className="text-sm text-[#7a8a94] leading-[2]">
          プールと海洋実習を通じて、水深10〜15mまでの潜水スキルを身につけます。
          海との一体感を感じながら、自分のペースで学べる環境を提供します。
        </p>

        {/* カード */}
        <div className="bg-white border border-gray-100 p-6 space-y-4 w-full max-w-[380px]">

          <div>
            <p className="text-xs text-gray-400 mb-1">期間</p>
            <p className="text-sm text-[#5a6b74]">
              2日間（学科＋プール実習＋海洋実習）
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">受講条件</p>
            <p className="text-sm text-[#5a6b74]">
              18歳以上、健康で泳げる方
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">料金</p>
            <p className="text-lg font-light text-[#5a6b74]">
              ¥45,000
            </p>
          </div>

        </div>

        <button className="text-xs border border-gray-400 px-5 py-2.5 text-[#5a6b74] hover:bg-black hover:text-white transition">
          お問い合わせ
        </button>

      </div>

      {/* 右：画像 */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://picsum.photos/600/800"
          alt="AIDA1"
          className="w-full max-w-[400px] aspect-[3/4] object-cover rounded-sm"
        />
      </div>

    </div>
  );
}

export default CourseSection;