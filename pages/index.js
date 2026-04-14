import Link from "next/link";

const pageStyles = {
  minHeight: "100vh",
  padding: "48px 24px",
  background: "linear-gradient(180deg, #f8fafc 0%, #e0f2fe 45%, #fefce8 100%)",
  color: "#0f172a",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
};

const containerStyles = {
  maxWidth: "1080px",
  margin: "0 auto",
};

const heroStyles = {
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "28px",
  padding: "48px 32px",
  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
  marginBottom: "32px",
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
};

const cardStyles = {
  display: "block",
  padding: "28px",
  borderRadius: "24px",
  background: "#ffffff",
  textDecoration: "none",
  color: "inherit",
  boxShadow: "0 16px 40px rgba(15, 23, 42, 0.1)",
  border: "1px solid rgba(148, 163, 184, 0.2)",
};

const badgeStyles = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "#dbeafe",
  color: "#1d4ed8",
  fontSize: "0.85rem",
  fontWeight: 700,
  marginBottom: "18px",
};

export default function Home() {
  return (
    <main style={pageStyles}>
      <div style={containerStyles}>
        <section style={heroStyles}>
          <span style={badgeStyles}>Portal de Conteúdos</span>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              marginBottom: "16px",
            }}
          >
            Materiais e trabalhos em um só lugar
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "720px",
              color: "#334155",
            }}
          >
            Escolha abaixo para acessar o trabalho desenvolvido anteriormente ou
            navegar pelas aulas separadas por série.
          </p>
        </section>

        <section style={gridStyles}>
          <Link href="/trabalhos" style={cardStyles}>
            <span
              style={{
                ...badgeStyles,
                background: "#ede9fe",
                color: "#6d28d9",
              }}
            >
              Trabalhos
            </span>
            <h2 style={{ fontSize: "1.9rem", marginBottom: "12px" }}>
              Cientistas Transformadoras
            </h2>
            <p
              style={{
                lineHeight: 1.7,
                color: "#475569",
                marginBottom: "18px",
              }}
            >
              Trabalho das turmas da PAV.
            </p>
            <strong style={{ color: "#6d28d9" }}>Abrir trabalho</strong>
          </Link>

          <Link href="/aulas" style={cardStyles}>
            <span
              style={{
                ...badgeStyles,
                background: "#dcfce7",
                color: "#15803d",
              }}
            >
              Aulas
            </span>
            <h2 style={{ fontSize: "1.9rem", marginBottom: "12px" }}>
              1ª, 2ª e 3ª série
            </h2>
            <p
              style={{
                lineHeight: 1.7,
                color: "#475569",
                marginBottom: "18px",
              }}
            >
              Reúne os links públicos das aulas.
            </p>
            <strong style={{ color: "#15803d" }}>Ver aulas</strong>
          </Link>
        </section>
      </div>
    </main>
  );
}
