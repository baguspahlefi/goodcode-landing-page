export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#F2F6D0", minHeight: "100vh", color: "#443627" }}>
      {children}
    </div>
  );
}
