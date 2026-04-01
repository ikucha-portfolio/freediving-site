import CourseSection from "../components/CourseSection";
import Container from "../components/layout/Container";

const Courses = () => {
  return (
    <>
      <section className="w-full bg-[#f8f7f5] py-28">
        
        <Container> {/* ←これに置き換え */}

        <div className="max-w-4xl mx-auto px-8">

          {/* タイトル */}
          <div className="text-center mb-28">
            <h1 className="text-3xl md:text-4xl font-light text-[#5a6b74]">
              Courses
            </h1>
          </div>

          {/* Skin Diving */}
<CourseSection
  title="Skin Diving Course"
  description1="スキンダイビングを楽しみたい方向けのコース。無理なく安全に潜るための基本的なスキルと呼吸法を身につけます。"
  description2="海の中を自由に楽しみながら、美しい水中世界との一体感を体験できます。初心者の方でも安心して参加できます。"
  duration="1日（プールまたは海洋）"
  condition="健康で泳げる方"
  price="¥15,000"
  image="https://picsum.photos/600/800?random=3"
/>

{/* AIDA Level 1（reverse） */}
<CourseSection
  title="AIDA Level 1"
  description1="フリーダイビングの基礎を学ぶ初心者向けコース。安全な潜水のための知識、呼吸法、リラクゼーション、イコライゼーションの基本を習得します。"
  description2="プールと海洋実習を通じて、水深10〜15mまでの潜水スキルを身につけます。海との一体感を感じながら、自分のペースで学べる環境を提供します。"
  duration="2日間（学科＋プール実習＋海洋実習）"
  condition="18歳以上、健康で泳げる方"
  price="¥45,000"
  image="https://picsum.photos/600/800"
  reverse
/>

{/* AIDA Level 2 */}
<CourseSection
  title="AIDA Level 2"
  description1="より深く長く潜るためのステップアップコース。呼吸法の強化とリラクゼーション技術を高め、安全に深度を伸ばしていきます。"
  description2="フリーダイビングの技術をさらに高め、水中での自由度と快適さを向上させます。"
  duration="3日間（学科＋プール＋海洋講習）"
  condition="AIDA1修了 または同等経験"
  price="¥55,000"
  image="https://picsum.photos/600/800?random=2"
/>

{/* AIDA Level 3（reverse） */}
<CourseSection
  title="AIDA Level 3"
  description1="より高度なフリーダイビングスキルを習得する上級者向けコース。安全管理やレスキュー技術も含め、より実践的な知識を学びます。"
  description2="深度やパフォーマンスの向上を目指しながら、自分の限界と向き合うトレーニングを行います。"
  duration="4日間（学科＋プール＋海洋講習）"
  condition="AIDA2修了 または同等経験"
  price="¥65,000"
  image="https://picsum.photos/600/800?random=4"
  reverse
/>
        </div>
        
</Container>

      </section>
    </>
  );
}

export default Courses;