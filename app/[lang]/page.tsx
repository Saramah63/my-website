import Link from "next/link";

type Lang = "fa" | "en";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = raw === "fa" ? "fa" : "en";

  return (
    <main>
      <section className="section">
        <div className="container dpHero">
          <p className="kicker">Donepage</p>
          <h1 className="h1">Launch your landing page in days — not weeks.</h1>
          <p className="muted dpLead">
            Answer a few questions. Get a conversion-ready page. No templates. No complexity.
          </p>
          <div className="dpActions">
            <Link className="btn btnPrimary btnLarge" href="/start">
              Get Started
            </Link>
            <a className="btn btnLarge" href="#pricing">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Why most pages fail</h2>
          </div>
          <ul className="list dpProblemList">
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>No clear message</span>
            </li>
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>No structured offer</span>
            </li>
            <li className="listItem">
              <span className="dot" aria-hidden="true" />
              <span>No fast execution</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">How it works</h2>
          </div>
          <div className="grid3">
            <article className="card">
              <h3 className="h3">1. Answer simple questions</h3>
            </article>
            <article className="card">
              <h3 className="h3">2. We structure &amp; build your page</h3>
            </article>
            <article className="card">
              <h3 className="h3">3. You launch and collect leads</h3>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Pricing</h2>
          </div>

          <div className="pricingGrid">
            <article className="priceCard">
              <div style={{ height: 28 }} />
              <h3 className="h3">Launch</h3>
              <div className="priceRow">
                <div className="price">€99</div>
              </div>
              <ul className="list">
                <li>1 landing page</li>
                <li>1 revision</li>
                <li>Delivered in 5 business days</li>
              </ul>
              <Link className="btn btnLarge" href="/start?plan=launch">
                Start Launch
              </Link>
            </article>

            <article className="priceCard isPopular">
              <div className="pill">Most popular</div>
              <h3 className="h3">Growth</h3>
              <div className="priceRow">
                <div className="price">€249</div>
              </div>
              <ul className="list">
                <li>1 landing page</li>
                <li>3 revisions</li>
                <li>Domain connection</li>
                <li>Basic SEO</li>
                <li>Priority delivery</li>
              </ul>
              <Link className="btn btnPrimary btnLarge" href="/start?plan=growth">
                Start Growth
              </Link>
            </article>

            <article className="priceCard">
              <div style={{ height: 28 }} />
              <h3 className="h3">Hosting &amp; Support</h3>
              <div className="priceRow">
                <div className="price">€19</div>
                <div className="muted">/ month</div>
              </div>
              <ul className="list">
                <li>Hosting on Vercel</li>
                <li>SSL &amp; uptime</li>
                <li>Minor updates</li>
                <li>Email support</li>
              </ul>
              <Link className="btn btnLarge" href="/hosting">
                Add Hosting
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card dpCustomCard">
          <h2 className="h2">Custom Projects</h2>
          <p className="muted">
            Need something more advanced? Multi-page sites, integrations, or custom builds.
          </p>
          <div>
            <Link className="btn btnLarge" href="/contact?reason=custom">
              Request a Custom Proposal
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">FAQ</h2>
          </div>
          <div className="dpFaq">
            <details className="card dpFaqItem">
              <summary>Do I need hosting?</summary>
              <p className="muted">No. You can host it yourself, or add our €19/month hosting option.</p>
            </details>
            <details className="card dpFaqItem">
              <summary>Can I use my own domain?</summary>
              <p className="muted">Yes. We can connect your existing domain in the Growth package.</p>
            </details>
            <details className="card dpFaqItem">
              <summary>How long does it take?</summary>
              <p className="muted">Launch is delivered in 5 business days. Growth is prioritized.</p>
            </details>
            <details className="card dpFaqItem">
              <summary>What&apos;s included in revisions?</summary>
              <p className="muted">
                Revisions cover copy, layout blocks, and CTA adjustments inside the agreed page scope.
              </p>
            </details>
            <details className="card dpFaqItem">
              <summary>Can I request changes later?</summary>
              <p className="muted">Yes. Ongoing minor updates are available with Hosting &amp; Support.</p>
            </details>
            <details className="card dpFaqItem">
              <summary>What if I need more pages?</summary>
              <p className="muted">Use the custom proposal flow and we&apos;ll scope a multi-page solution.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card dpFinalCta">
          <h2 className="h2">Ready to launch?</h2>
          <div>
            <Link className="btn btnPrimary btnLarge" href="/start">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
