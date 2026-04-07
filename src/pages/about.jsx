import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import TwoColumn from "../components/layout/TwoColumn";

export default function About() {
  return (
    <>

      {/* ===== メッセージ ===== */}
      <Section variant="compact">
        <Container size="narrow">

          <div className="text-center">

  <h1 className="text-2xl md:text-3xl text-[#5a6b74] mb-10">
    About
  </h1>

  <div className="space-y-4 text-base text-[#6b7c85] leading-relaxed max-w-[680px] mx-auto">
              <p>
                これから海遊びを始めたい方、フリーダイビングに興味がある方、<br />
                もっと深く潜れるようになりたい方、初心者〜上級者さんまで、男女問わず大歓迎です。<br />
                一呼吸で海の世界に飛び込む楽しさを、誰でも気軽に体験してほしいです。<br />
                海の中でしか味わえない静けさや、心も体もゆるむひとときをぜひ味わってください。
              </p>
            </div>

          </div>

        </Container>
      </Section>

      {/* ===== 区切り ===== */}
      <div className="border-t border-[#e5eef2]" />

      {/* ===== メイン ===== */}
      <Section>
        <Container>

          <TwoColumn variant="wide">

            {/* 左：情報 */}
            <div className="space-y-10 max-w-[520px]">

              {/* NAME */}
              <div className="space-y-3">
                <h3 className="text-xs text-[#9fb2bb]">インストラクター</h3>
                <p className="text-base text-[#6b7c85]">
                  hico/ひこ<br />
                </p>
                
              </div>

              {/* FREEDIVING */}
              <div className="space-y-3">
                <h3 className="text-xs text-[#9fb2bb]">経歴</h3>
                <p className="text-sm text-[#6b7c85] ">
                  愛知県出身。地元の総合病院で４年勤務後沖縄へ移住しました。
                  海で泳いだことがなく、初めは足がつかないところが怖くて浮き輪をつけていました。<br />
                  スキンダイビングをしているうちに少しずつ潜れるようになり、
                  水中で「もっと自由に動きたい」と思うようになりました。
                </p>

                <p className="text-sm text-[#6b7c85] ">
                  2018年にフリーダイビングを始め、一息の世界に魅了されました。<br />
                  より良い環境を求め奄美大島へ移住し、現在は看護師として働きながら
                  フリーダイビングの大会出場を目標に練習しています。
                </p>
              </div>

              {/* LICENSE */}
              <div className="space-y-3">
                <h3 className="text-xs text-[#9fb2bb]">資格</h3>
                <p className="text-sm text-[#6b7c85]">
                  ・AIDA フリーダイビングインストラクター<br />
                  ・YOGA インストラクター RYT200<br />
                  ・看護師免許
                </p>
              </div>

              {/* CAREER */}
              <div className="space-y-4">
                <h3 className="text-xs text-[#9fb2bb]">大会出場歴</h3>

                <div className="space-y-4 text-sm text-[#6b7c85]">

                  <div>
                    <p className="text-xs text-[#9fb2bb] mb-1">海洋</p>
                    <p>
                      AIDA Panglao Depth games TAIWAN CUP 2023<br />
                      15TH AIDA PANGLAO DEPTH GAMES 2023 FINAL<br />
                      AIDA Volcano Cup 2024<br />
                      21st AIDA Panglao Depth Games Final 2024<br />
                      AIDA Panglao Depth Championship 2024 -2
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#9fb2bb] mb-1">プール</p>
                    <p>
                      AIDA Yuinoshima Freediving Cup 2nd 🥈<br />
                      AIDA Freediving Pool Games Japan Suzuka 1st 🥇<br />
                      Kusatsu 2nd 🥈<br />
                      Wakayama 3rd 🥉<br />
                      AIDA JAPAN FREEDIVING POOL CHAMPIONSHIPS 2026 女子1st 🥇
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* 右：写真 */}
            <div>
              <img
                src="/images/instructor.jpeg"
                className="w-full h-[520px] object-cover"
              />
            </div>

          </TwoColumn>

        </Container>
      </Section>

    </>
  );
}