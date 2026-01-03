export default function TrustStrip() {
  return (
    <div
      style={{
        marginTop: 24,
        padding: "14px 18px",
        borderRadius: 16,
        border: "1px solid var(--border)",
        background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
        display: "flex",
        gap: 18,
        flexWrap: "wrap",
        justifyContent: "center",
        fontWeight: 900,
        color: "var(--text-main)",
      }}
    >
      <span>⭐ 4.9 / 5 Client Rating</span>
      <span>⏱ Response &lt; 24h</span>
      <span>🔒 100% Confidential</span>
      <span>🌍 Online & International</span>
    </div>
  );
}
