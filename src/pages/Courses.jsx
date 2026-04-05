import CourseSection from "../components/CourseSection";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

const Courses = () => {
  return (
    <Section className="bg-[#f8f7f5]">

      <Container>

        {/* タイトル */}
        <div className="text-center mb-28">
          <h1 className="text-3xl md:text-4xl font-light text-[#5a6b74]">
            Courses
          </h1>
        </div>

        {/* Skin Diving */}
        <CourseSection
          title="Skin Diving Course"
          description1={
            <>
              シュノーケルを使って海を楽しみたい方、<br />
              スキンダイビングを始めてみたい方、<br />
              もっと上達したい方まで対応しています。
            </>
          }
          description2={
            <>
              初心者〜上級者まで様々なレベルに合わせて、呼吸の整え方、水中でリラックスする方法、綺麗に泳ぐ方法、海に潜る方法を丁寧にアドバイスします。<br /><br />

              場所：瀬戸内町または名瀬周辺のビーチ（リクエスト可）<br />
              人数：最大4名<br />
              料金：¥12,000<br />
              時間：2時間<br />
              集合時間：天候を見て前日までにご連絡
            </>
          }
          duration="2時間"
          condition="初心者〜上級者まで"
          price="¥12,000"
          image="https://picsum.photos/600/800?random=3"
        />

        {/* AIDA Level 1 */}
        <CourseSection
          title="AIDA Level 1"
          description1={
            <>
              体験フリーダイビングコース。<br />
              呼吸法、水中の安全管理、潜り方などフリーダイビングの基礎を学びます。
            </>
          }
          description2={
            <>
              座学と海洋講習を1日で行います。<br />
              フリーダイビングの基礎知識を学んだあと、実際にフリーダイビングを体験して頂きます。<br />
              認定基準は無く、受講するのみのコースです。<br /><br />

              日程：1日（5〜6時間）<br />
              料金：¥25,000<br />
              ※別途AIDA申請料がかかります<br />
              場所：瀬戸内町のビーチ
            </>
          }
          duration="1日（5〜6時間）"
          condition="18歳以上で健康に問題のない方（持病がある方は事前にご相談ください）／スキンダイビング経験者"
          price="¥25,000"
          image="https://picsum.photos/600/800"
          reverse
        />

        {/* AIDA Level 2 */}
        <CourseSection
          title="AIDA Level 2"
          description1={
            <>
              フリーダイビング初級コース。<br />
              より深く長く潜るためのスキルを身につけます。
            </>
          }
          description2={
            <>
              呼吸法、リラクゼーション、耳抜き、フィンワーク、潜り方、バディシステム、レスキューを学びます。<br />
              スキンダイビング経験があり5〜8m程度潜ることのできる方はAIDA1をスキップしAIDA2から受講できます。<br /><br />

              日程：2.5〜3日（分割受講可能）<br />
              料金：¥55,000<br />
              ※別途認定料とプール使用料がかかります<br /><br />

              認定条件：<br />
              ・STA2分<br />
              ・DYN40m<br />
              ・CWT12m（最大20m）<br /><br />

              ※講習期間中にクリア出来ない項目があっても、1年間は有効で他のショップやインストラクターでも再挑戦可能です
            </>
          }
          duration="2.5〜3日（分割受講可能）"
          condition={
            <>
              18歳以上で健康な方（持病がある方は要相談）<br />
              ・フィン無しで200m以上<br />
              または<br />
              ・フィン・マスク・シュノーケル使用で300m以上泳げる方
            </>
          }
          price="¥55,000"
          image="https://picsum.photos/600/800?random=2"
        />

        {/* AIDA Level 3 */}
        <CourseSection
          title="AIDA Level 3"
          description1={
            <>
              フリーダイビング中級コース。<br />
              より高度なスキルと安全管理、レスキュー技術を学びます。
            </>
          }
          description2={
            <>
              フレンツェル法、圧外傷、トレーニングの組み立て、フリーフォール、バディでのトレーニングとレスキューなど、より実践的な内容を学びます。<br /><br />

              日程：3〜3.5日（分割受講可能）<br />
              料金：¥65,000<br />
              ※別途AIDA認定料とプール使用料がかかります<br /><br />

              認定条件：<br />
              ・STA2分45秒<br />
              ・DYN55m<br />
              ・CWT24m<br />
              ・座学テスト<br /><br />

              ※講習期間中にクリア出来ない項目があっても、1年間は有効で他のショップやインストラクターでも再挑戦可能です
            </>
          }
          duration="3〜3.5日（分割受講可能）"
          condition="AIDA2または同等レベルのライセンスをお持ちの方（18歳以上・健康な方）"
          price="¥65,000"
          image="https://picsum.photos/600/800?random=4"
          reverse
        />

      </Container>

    </Section>
  );
};

export default Courses;