import type { Metadata } from "next";
import EmailContactActions from "@/components/EmailContactActions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Lumi | Sara Mahmodi",
  description:
    "A digital concept designed to support emotional awareness in early childhood through simple, guided interaction.",
  openGraph: {
    title: "Lumi | Sara Mahmodi",
    description:
      "A digital concept designed to support emotional awareness in early childhood through simple, guided interaction.",
    type: "website",
  },
};

const whatItDoes = [
  "helps children identify basic emotions",
  "supports safe expression",
  "builds early emotional awareness",
];

const howItWorks = [
  "visual emotion choices",
  "simple prompts",
  "short, supportive responses",
];

const contexts = ["daycares", "early education", "home use"];

export default async function LumiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang === "fa") {
    redirect("/en/lumi");
  }

  return (
    <main className="founderHome">
      <section className="founderHero">
        <div className="container founderHeroShell">
          <div className="founderHeroCopy">
            <p className="founderKicker">Lumi</p>
            <h1 className="founderDisplay serviceDisplay">Supporting emotional awareness in early childhood</h1>
            <p className="founderLead">
              A digital concept designed to help children ages 4-6 recognize and express emotions through
              simple, guided interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="founderSection">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">What It Does</p>
            <h2 className="founderHeading">A simple structure for early emotional learning.</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList">
              {whatItDoes.map((item) => (
                <div key={item} className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">How It Works</p>
            <h2 className="founderHeading">Built around guided interaction.</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderList">
              {howItWorks.map((item) => (
                <div key={item} className="founderListItem">
                  <span className="founderListMark" aria-hidden="true" />
                  <p className="founderBody">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Context</p>
            <h2 className="founderHeading">Designed for everyday use in early childhood settings.</h2>
          </div>
          <div className="founderPanel founderQuietCard">
            <div className="founderChipRow">
              {contexts.map((item) => (
                <span key={item} className="founderChip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="founderSection founderSectionAlt founderSectionLast">
        <div className="container founderFeature">
          <div className="founderFeatureIntro">
            <p className="founderKicker">Status</p>
            <h2 className="founderHeading">Early-stage concept.</h2>
            <p className="founderBody">Exploring pilot collaborations and research partnerships.</p>
          </div>
          <div className="founderPanel founderQuietCard">
            <p className="founderCardLabel">Collaboration</p>
            <EmailContactActions
              lang="en"
              prefix="For collaboration:"
              className="emailContactCard"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
