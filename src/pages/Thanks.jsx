import { Link } from "react-router-dom";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

export default function Thanks() {
  return (
    <Section className="min-h-screen flex items-center bg-[#f4f4f2]">
      <Container size="narrow">

        <div className="text-center space-y-6">

          <h1 className="text-[20px] tracking-[0.2em] text-[#5a6b74]">
            CONTACT
          </h1>

          <h2 className="text-[18px] text-[#6b7c85] font-light">
            お問い合わせありがとうございます
          </h2>

          <p className="text-[13px] text-[#8fa0a8] leading-relaxed">
            内容を確認のうえ、通常1〜2日以内にご返信いたします。<br />
            万が一返信がない場合は、迷惑メールフォルダをご確認いただくか、再度お問い合わせください。
          </p>

          <Link to="/" className="inline-block mt-6">
            <div className="text-[12px] text-[#aab6bd] tracking-[0.15em] hover:opacity-60 transition">
              BACK TO HOME →
            </div>
          </Link>

        </div>

      </Container>
    </Section>
  );
}