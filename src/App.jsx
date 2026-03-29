import Section from "./components/layout/Section";
import TwoColumn from "./components/layout/TwoColumn";
import TitleBlock from "./components/ui/TitleBlock";
import BodyText from "./components/ui/BodyText";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import InfoCard from "./components/ui/InfoCard";

function App() {
  return (
    <Section>
      <TitleBlock>フリーダイビングコース</TitleBlock>

      <BodyText>
        静けさの中で、自分と向き合う時間
      </BodyText>

      <TwoColumn>
        <Card>
  <h3 className="text-lg font-medium text-[#5a6b74] mb-2">
    AIDA1コース
  </h3>
  <p className="text-sm text-[#7a8a94]">
    初めての方向けの基礎コース
  </p>
</Card>
        <InfoCard>
  <div>
    <p className="text-sm text-[#7a8a94]">料金</p>
    <p className="text-xl font-semibold text-[#5a6b74]">
      ¥30,000
    </p>
  </div>

  <Button>申し込む</Button>
</InfoCard>
      </TwoColumn>
    </Section>
  );
}

export default App;