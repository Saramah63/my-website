import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Sara Mahmodi",
  description: "Privacy policy for saramahmodi.com.",
  openGraph: {
    title: "Privacy | Sara Mahmodi",
    description: "Privacy policy for saramahmodi.com.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="h1">Privacy</h1>
          <div className="card">
            <p>
              This site collects only the information you submit via application forms. Data is used to respond to your
              request and is not sold or shared.
            </p>
            <p>
              If you want your data removed, contact us at contact [at] saramahmodi.com. This policy may be updated as
              the site evolves.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
