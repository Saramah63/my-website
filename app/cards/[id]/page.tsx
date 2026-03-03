import cardsData from "@/data/belief-recode-cards.json";
import { notFound, redirect } from "next/navigation";

type CardType = "belief_pattern" | "recode_statement";

type Card = {
  id: string;
  type: CardType;
  label: string;
  text: string;
  pairId: string;
  routeId: string; // "01"..."26" for both cards in a pair
};

type CardsMap = Record<string, Card>;
const cards = cardsData as CardsMap;

function normalizeId(raw?: string) {
  if (!raw) return "";
  const n = raw.trim();
  if (/^\d{1,2}$/.test(n)) return n.padStart(2, "0");
  return n;
}

export function generateStaticParams() {
  // We generate all 52 IDs. If someone scans a Recode card (27–52),
  // we will redirect them to /cards/{routeId} (01–26).
  return Object.keys(cards).map((id) => ({ id }));
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ id?: string }> | { id?: string };
}) {
  const resolved = params instanceof Promise ? await params : params;
  const id = normalizeId(resolved?.id);
  const card = cards[id];
  if (!card) return notFound();

  // If the scanned card is a Recode card, redirect to the pair's main route (/cards/01..26)
  if (card.routeId !== card.id) {
    redirect(`/cards/${card.routeId}`);
  }

  const paired = cards[card.pairId];

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <header style={styles.header}>
          <span style={styles.badge}>{card.label}</span>
          <span style={styles.mini}>Card {card.id}</span>
        </header>

        <h1 style={styles.title}>{card.text}</h1>

        {paired && (
          <section style={styles.paired}>
            <div style={styles.pairedHead}>
              <span style={styles.mini}>Paired card</span>
              <span style={styles.mini}>{paired.label} • Card {paired.id}</span>
            </div>
            <div style={styles.pairedCard}>
              <p style={styles.pairedText}>{paired.text}</p>
            </div>
          </section>
        )}

        <section style={styles.micro}>
          <h2 style={styles.h2}>2-minute micro-action</h2>
          <p style={styles.p}>
            Choose one action you can do in 2 minutes today that proves this belief in real life.
          </p>
          <ul style={styles.ul}>
            <li>Start the habit for 2 minutes</li>
            <li>Open the file and write the first line</li>
            <li>Send one message you’ve been delaying</li>
            <li>Do one small reset (water, breath, tidy one surface)</li>
          </ul>
        </section>

        <footer style={styles.footer}>
          <div style={styles.brand}>Belief Recode Cards™</div>
          <div style={styles.tagline}>Rewire your mind. Rebuild your habits.</div>
        </footer>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "32px 16px",
    background: "#F7F3EE"
  },
  container: {
    width: "100%",
    maxWidth: 760,
    background: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    border: "1px solid rgba(31,35,40,0.10)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 14
  },
  badge: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(31,35,40,0.06)",
    color: "#1F2328"
  },
  mini: { fontSize: 12, color: "rgba(31,35,40,0.65)" },
  title: {
    margin: "8px 0 18px",
    fontSize: 30,
    lineHeight: 1.25,
    letterSpacing: -0.2,
    color: "#111827"
  },
  paired: { marginBottom: 18 },
  pairedHead: { display: "flex", justifyContent: "space-between", marginBottom: 8, gap: 12 },
  pairedCard: {
    border: "1px solid rgba(31,35,40,0.10)",
    borderRadius: 12,
    padding: 14,
    background: "rgba(247,243,238,0.45)"
  },
  pairedText: { margin: 0, fontSize: 16, lineHeight: 1.55, color: "#111827" },
  micro: {},
  h2: { margin: "0 0 8px", fontSize: 16, color: "#111827" },
  p: { margin: "0 0 8px", lineHeight: 1.6, color: "rgba(17,24,39,0.85)" },
  ul: { margin: "0 0 0 18px", lineHeight: 1.75, color: "rgba(17,24,39,0.85)" },
  footer: { marginTop: 22, paddingTop: 14, borderTop: "1px solid rgba(31,35,40,0.08)" },
  brand: { fontSize: 12, color: "#1F2328" },
  tagline: { fontSize: 12, marginTop: 4, color: "rgba(31,35,40,0.65)" }
};
