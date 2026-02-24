import Link from "next/link";

export default function HostingPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="card dpFormCard">
          <h1 className="h2">Hosting &amp; Support</h1>
          <p className="muted">Simple managed hosting for pages built with Donepage.</p>

          <div className="dpHostingBlocks">
            <div>
              <h2 className="h3">What&apos;s included</h2>
              <ul className="list">
                <li>Hosting on Vercel</li>
                <li>SSL certificate and uptime monitoring</li>
                <li>Minor page updates</li>
                <li>Email support</li>
              </ul>
            </div>

            <div>
              <h2 className="h3">What&apos;s not included</h2>
              <ul className="list">
                <li>New page creation or major redesigns</li>
                <li>Custom backend engineering</li>
                <li>Email inbox hosting</li>
              </ul>
            </div>
          </div>

          <p className="price" style={{ marginTop: 10 }}>
            €19 <span className="muted" style={{ fontSize: 18 }}>/ month</span>
          </p>

          <p className="muted">
            Note: Email is handled via Google Workspace, Microsoft 365, or Zoho. DNS setup can be added as a one-time add-on.
          </p>

          <div>
            <Link className="btn btnPrimary btnLarge" href="/contact?reason=hosting">
              Request Hosting Setup
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
