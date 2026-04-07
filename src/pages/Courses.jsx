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
              はじめて海に潜ってみたい方から、<br />
              もっと自由に泳げるようになりたい方に<br />
              おすすめのコースです。
            </>
          }
          description2={
            <>
              初心者〜上級者まで様々なレベルに合わせて、呼吸の整え方、水中でリラックスする方法、綺麗に泳ぐ方法、海に潜る方法を丁寧にアドバイスします。<br /><br />

              
              人数：最大4名<br />
              時間：2時間<br />
              場所：瀬戸内町または名瀬周辺のビーチ<br />
              料金：¥12,000<br />
              集合時間：天候を見て前日までにご連絡
            </>
          }
          image="/images/Skin-diving.jpeg"
        />

        {/* AIDA Level 1 */}
        <CourseSection
          title="AIDA1"
          description1={
            <>
              体験フリーダイビングコース。<br />
              呼吸法、水中の安全管理、潜り方などフリーダイビングの基礎を学びます。
            </>
          }
          description2={
            <>
              座学と海洋講習を1日で行い、基礎知識を学んだあと実際にフリーダイビングを体験します。<br />
              認定基準はなく、受講のみのコースです。<br /><br />

              参加条件：18歳以上で健康な方（持病がある方は要相談）／スキンダイビング経験者<br />
              日程：1日（5〜6時間）<br />
              場所：瀬戸内町のビーチ<br />
              料金：¥25,000（別途AIDA申請料あり）
            </>
          }
          image="/images/aida-1.jpeg"
          reverse
        />

        {/* AIDA Level 2 */}
        <CourseSection
          title="AIDA2"
          description1={
            <>
              フリーダイビング初級コース。<br />
              より深く長く潜るためのスキルを身につけます。
            </>
          }
          description2={
            <>
              呼吸法、リラクゼーション、耳抜き、フィンワーク、潜り方、バディシステム、レスキューを学びます。<br />
              条件を満たす方はAIDA1をスキップして受講可能です。<br /><br />

              参加条件：18歳以上で健康な方／200m以上（ノーフィン）または300m以上（フィン使用）泳げる方<br />
              日程：2.5〜3日（日程を分けての受講可能）<br />
              料金：¥55,000（別途認定料・プール使用料あり）<br /><br />

              認定条件：STA2分 / DYN40m / CWT12m（最大20m）<br />
              ※未達項目は1年間有効で再挑戦可能
            </>
          }
          image="/images/aida-2.jpeg"
        />

        {/* AIDA Level 3 */}
        <CourseSection
          title="AIDA3"
          description1={
            <>
              フリーダイビング中級コース。<br />
              より高度なスキルと安全管理、レスキュー技術を学びます。
            </>
          }
          description2={
            <>
              フレンツェル法、圧外傷、トレーニング設計、フリーフォール、バディトレーニングなど実践的な内容を学びます。<br /><br />

              参加条件：AIDA2または同等資格／18歳以上で健康な方<br />
              日程：3〜3.5日（日程を分けての受講可能）<br />
              料金：¥65,000（別途認定料・プール使用料あり）<br /><br />

              認定条件：STA2分45秒 / DYN55m / CWT24m / 筆記テスト<br />
              ※未達項目は1年間有効で再挑戦可能
            </>
          }
          image="/images/aida-3.jpeg"
          reverse
        />

      </Container>

    </Section>
  );
};

export default Courses;