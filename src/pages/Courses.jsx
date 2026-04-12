import CourseSection from "../components/CourseSection";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import TitleBlock from "../components/ui/TitleBlock";
const Courses = () => {
  return (
    <Section className="bg-[#f4f4f2]">
      <Container>

        {/* タイトル */}
        <div className="mb-14 md:mb-16 text-center">
  <TitleBlock align="center">
    Courses
  </TitleBlock>
</div>

        {/* Skin Diving */}
        <div id="skin-diving">
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
            image={`${import.meta.env.BASE_URL}images/skin-diving.jpeg`}
          />
        </div>

        {/* AIDA Level 1 */}
        <div id="aida1">
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
            image={`${import.meta.env.BASE_URL}images/aida-1.jpeg`}
            reverse
          />
        </div>

        {/* AIDA Level 2 */}
        <div id="aida2">
          <CourseSection
            title="AIDA2"
            description1={
              <>
                フリーダイビング初級コース。<br />
                フリーダイビングの基礎を学ぶコースです。
              </>
            }
            description2={
              <>
                呼吸法、リラクゼーション、耳抜き、フィンワーク、潜り方、バディシステム、レスキューを学びます。<br />
                条件を満たす方はAIDA1をスキップして受講可能です。<br /><br />
                参加条件：18歳以上で健康な方（持病がある方は要相談）／スキンダイビング経験があり5〜8m潜るころができる方／<br />
                フィンなしで200m以上、またはシュノーケル・フィンマスク使用して300m以上泳げる方<br />
                日程：2.5〜3日（日程を分けての受講可能）<br />
                場所：瀬戸内町のビーチ<br />
                料金：¥55,000（別途AIDA認定料・プール使用料あり）<br /><br />
                認定条件：STA2分 / DYN40m / CWT12m（最大20m）<br />
                ※未達項目は1年間有効で再挑戦可能（他のインストラクターでも可）<br />
              </>
            }
            image={`${import.meta.env.BASE_URL}images/aida-2.jpeg`}
          />
        </div>

        {/* AIDA Level 3 */}
        <div id="aida3">
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
                フレンツェル法（耳抜き）、圧外傷、トレーニング設計、フリーフォール、バディトレーニング、レスキューなど実践的な内容を学びます。<br /><br />
                参加条件：AIDA2または他団体同等資格ありの方／18歳以上で健康な方（持病がある方は要相談）<br />
                日程：3〜3.5日（日程を分けての受講可能）<br />
                場所：瀬戸内町のビーチ<br />
                料金：¥65,000（別途AIDA認定料・プール使用料あり）<br /><br />
                認定条件：STA2分45秒 / DYN55m / CWT24m / 筆記テスト<br />
                ※未達項目は1年間有効で再挑戦可能（他のインストラクターでも可）<br />
              </>
            }
            image={`${import.meta.env.BASE_URL}images/aida-3.jpeg`}
            reverse
          />
        </div>

        {/* Training */}
        <div id="training">
          <CourseSection
            title="Freediving Training（ビーチトレーニング）"
            description1={
              <>
                ライセンス取得後のスキルアップや、
                個々のレベル・目標に沿ったトレーニングを行います。
              </>
            }
            description2={
              <>
                参加条件：18歳以上で健康に問題のない方<br />
                （持病がある方は事前にご相談ください）<br />
                AIDA、または他団体のライセンスをお持ちの方がご参加いただけます。<br />
                安全のため最大深度は、受講者様のスキルをお伺いし、相談のうえインストラクターが決定します。<br />
                (最大深度：40mまで)<br /><br />
                場所：瀬戸内町のビーチ<br />
                人数：最大3名まで<br />
                料金：1セッション（2〜2.5時間）¥12,000
              </>
            }
            image={`${import.meta.env.BASE_URL}images/training.jpeg`}
          />
        </div>

      </Container>
    </Section>
  );
};

export default Courses;