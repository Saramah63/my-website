import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">Donepage</div>
          <div className="muted" style={{ fontSize: 14 }}>
            Conversion-focused landing pages built fast.
          </div>
        </div>

        <div className="footerRight">
          <Link className="footerLink" href="/en#pricing">
            Pricing
          </Link>
          <Link className="footerLink" href="/hosting">
            Hosting
          </Link>
          <Link className="footerLink" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
