"use client";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button className="btn" onClick={() => window.print()} type="button">
      {label}
    </button>
  );
}
