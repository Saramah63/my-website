import type { Metadata } from "next";
import { redirect } from "next/navigation";
import BodyClass from "@/components/BodyClass";

export const metadata: Metadata = {
  title: "About | Sara Mahmodi",
  description:
    "Founder, product-focused designer, and strategic builder creating structured digital products and human-centered systems.",
  openGraph: {
    title: "About | Sara Mahmodi",
    description:
      "Founder, product-focused designer, and strategic builder creating structured digital products and human-centered systems.",
    type: "website",
  },
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang === "fa") {
    redirect("/fa");
  }
  return (
    <main>
      <BodyClass className="bg-motif--soft" />
      <section className="section">
        <div className="container">
          <h1 className="h1">About</h1>
          <div className="card">
            <>
              <p>
                I am a product-focused designer and founder building structured digital products and
                human-centered systems.
              </p>
              <p>
                My work focuses on turning complex ideas into clear, usable solutions through product
                thinking, user experience, and structured execution.
              </p>
              <p>Currently building:</p>
              <ul className="list">
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>
                    <strong>Donepage</strong> - a conversion-focused landing page system for coaches,
                    consultants, therapists, and service businesses
                  </span>
                </li>
                <li className="listItem">
                  <span className="dot" aria-hidden="true" />
                  <span>
                    <strong>Lumi</strong> - an early-stage emotional learning product helping children
                    recognize and express emotions through simple, guided interaction
                  </span>
                </li>
              </ul>
              <p>
                Through these products, I work on product direction, user experience, early-stage
                validation, and iteration based on real user needs.
              </p>
              <p>
                Alongside this, I work selectively with individuals who need clarity, direction, and a
                more structured way forward.
              </p>
              <p>
                I am also growing toward Product Owner roles, with hands-on experience in building and
                testing real products.
              </p>
              <p>
                If you are interested in collaboration, product development, or structured work, feel free
                to reach out.
              </p>
            </>
          </div>
        </div>
      </section>
    </main>
  );
}
