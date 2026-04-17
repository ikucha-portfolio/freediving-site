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
            {/* 翻訳防止：ページタイトル */}
            <span translate="no">Courses</span>
          </TitleBlock>
        </div>

        {/* AIDA Level 1 */}
<div id="aida1">
  <CourseSection
    title={<span translate="no">AIDA1</span>}
    description1={
      <>
        フリーダイビング体験コース。<br />
        特別なスキルや体力がなくても安心してご参加いただけます。
      </>
    }
    description2={
      <>
        座学でフリーダイビングの基本を学んだ後、陸上でリラックスした呼吸法を練習します。
        その後は海に入り、浅い場所での息止めからスタートし、少しずつ水中での潜り方を体験していきます。<br />

        認定基準はなく、受講のみのコースのため、「少し興味がある」「一度やってみたい」という方におすすめです。<br /><br />

        参加条件：18歳以上で健康な方（持病がある方は要相談）<br />
        ／スキンダイビング経験者<br />
        日程：1日（5〜6時間）<br />
        場所：瀬戸内町のビーチ<br />

        料金：¥25,000（別途AIDA申請料あり）
      </>
    }
    image="/images/aida-1.jpeg"
  />
</div>

{/* AIDA Level 2 */}
<div id="aida2">
  <CourseSection
    title={<span translate="no">AIDA2</span>}
    description1={
      <>
        フリーダイビングをしっかり学びたい方向けの初級コース。<br />
        基礎から丁寧に学べるので、安心してステップアップしていけます。
      </>
    }
    description2={
      <>
        座学とプール・海洋講習を通して、呼吸法やリラクゼーション、耳抜き、フィンワーク、潜り方などを段階的に習得します。
        バディシステムやレスキューについても学び、安全に楽しむための基礎を身につけていきます。<br />

        条件を満たす方はAIDA1をスキップしての受講も可能です。<br />
        基礎からしっかり学びたい方、フリーダイビングを継続していきたい方におすすめのコースです。<br /><br />

        参加条件：18歳以上で健康な方（持病がある方は要相談）<br />
        ／スキンダイビング経験があり5〜8m潜ることができる方<br />
        日程：2.5〜3日（日程を分けての受講可能）<br />
        場所：瀬戸内町のビーチ<br />

        認定条件：STA2分 / DYN40m / CWT12m / 筆記テスト<br />
        ※未達項目は1年間有効で再挑戦可能（他のインストラクターでも可）<br />

        料金：¥55,000（別途AIDA認定料・プール使用料あり）
      </>
    }
    image="/images/aida-2.jpeg"
    reverse
  />
</div>

{/* AIDA Level 3 */}
<div id="aida3">
  <CourseSection
    title={<span translate="no">AIDA3</span>}
    description1={
      <>
        より深く、安全にフリーダイビングを専門的に学ぶための中級コース。
      </>
    }
    description2={
      <>
        座学とプール・海洋講習を通して、フレンツェル法（耳抜き）や圧外傷の理解、トレーニング設計、フリーフォールなど、より実践的な技術を学びます。
        バディトレーニングやレスキュー技術も強化し、安全管理の理解を深めていきます。<br />

        これまでの経験を活かしながら、より深く潜ることや、スキルアップしたい方におすすめです。<br /><br />

        参加条件：AIDA2または他団体同等資格ありの方／18歳以上で健康な方（持病がある方は要相談）<br />
        日程：3〜3.5日（日程を分けての受講可能）<br />
        場所：瀬戸内町のビーチ<br />

        認定条件：STA2分45秒 / DYN55m / CWT24m / 筆記テスト<br />
        ※未達項目は1年間有効で再挑戦可能（他のインストラクターでも可）<br />

        料金：¥65,000（別途AIDA認定料・プール使用料あり）
      </>
    }
    image="/images/aida-3.jpeg"
  />
</div>

        {/* Skin Diving */}
        <div id="skin-diving">
          <CourseSection
            title={
              <span translate="no">
                Skin Diving Course
              </span>
            }
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
                集合時間：天候を見て前日までにご連絡<br />
                料金：¥12,000
              </>
            }
            image="/images/skin-diving.jpeg"
            reverse 
          />
        </div>

        {/* Training */}
        <div id="training">
          <CourseSection
            title={
              <span translate="no">
                Freediving Training（ビーチトレーニング）
              </span>
            }
            description1={
              <>
                ライセンス取得後のスキルアップや、
                個々のレベル・目標に沿ったトレーニングを行います。
              </>
            }
            description2={
              <>
                参加条件：18歳以上で健康に問題のない方（持病がある方は事前にご相談ください）／AIDA、または他団体のライセンスをお持ちの方<br />
                安全のため最大深度は、受講者様のスキルをお伺いし、相談のうえインストラクターが決定します。(最大深度：40mまで)<br /><br />
                場所：瀬戸内町のビーチ<br />
                人数：最大3名まで<br />
                料金：1セッション（2〜2.5時間）¥12,000
              </>
            }
            image="/images/training.jpeg"
          />
        </div>

      </Container>
    </Section>
  );
};

export default Courses;