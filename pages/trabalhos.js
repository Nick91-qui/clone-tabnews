import Link from "next/link";

const trabalhos = [
  {
    cientista: "Tatiana Coelho de Sampaio",
    pais: "Brasil",
    categoria: "Brasileira",
    emoji: "🇧🇷",
    alunos: ["Isaque M", "Gustavo", "Adrian"],
  },
  {
    cientista: "Sonia Guimaraes",
    pais: "Brasil",
    categoria: "Brasileira/Negra",
    emoji: "🇧🇷",
    alunos: ["Yasmin", "Livia"],
  },
  {
    cientista: "Joana D'Arc Felix de Souza",
    pais: "Brasil",
    categoria: "Brasileira/Negra",
    emoji: "🇧🇷",
    alunos: ["Alberto", "Leonardo", "Rafael"],
  },
  {
    cientista: "Marianne Ferreira",
    pais: "Brasil",
    categoria: "Brasileira",
    emoji: "🇧🇷",
    alunos: ["Samuel", "Brian", "Caua"],
  },
  {
    cientista: "Katherine Johnson",
    pais: "EUA",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: ["Sophia", "Heloisa", "Davi"],
  },
  {
    cientista: "Alice Ball",
    pais: "EUA",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: ["Nycolle", "Juliana B"],
  },
  {
    cientista: "Mae C. Jemison",
    pais: "EUA",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: ["Lucio", "Christian"],
  },
  {
    cientista: "Gladys West",
    pais: "EUA",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: ["Mario"],
  },
  {
    cientista: "Wangari Maathai",
    pais: "Quenia",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: ["Fernanda", "Rafaela"],
  },
  {
    cientista: "Marie Maynard Daly",
    pais: "EUA",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: ["Mateus", "Aquiles"],
  },
  {
    cientista: "Marie-Anne Paulze Lavoisier",
    pais: "Franca",
    categoria: "Invisibilizada",
    emoji: "🟡",
    alunos: ["Maria Eduarda", "Breno", "Enzo"],
  },
  {
    cientista: "Clara Immerwahr",
    pais: "Alemanha",
    categoria: "Invisibilizada",
    emoji: "🟡",
    alunos: ["Victor", "Ana L E"],
  },
  {
    cientista: "Kathleen Lonsdale",
    pais: "Irlanda/Reino Unido",
    categoria: "Invisibilizada",
    emoji: "🟡",
    alunos: ["Amanda", "Betina", "Julia"],
  },
  {
    cientista: "Ida Noddack",
    pais: "Alemanha",
    categoria: "Invisibilizada",
    emoji: "🟡",
    alunos: ["Juliana Ribeiro", "Maria Bisi"],
  },
  {
    cientista: "Shirley Ann Jackson",
    pais: "EUA",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: [],
  },
  {
    cientista: "Quarraisha Abdool Karim",
    pais: "Africa do Sul",
    categoria: "Negra",
    emoji: "✊🏿",
    alunos: ["Gabriel", "Maria L F"],
  },
  {
    cientista: "Ellen Swallow Richards",
    pais: "EUA",
    categoria: "Invisibilizada",
    emoji: "🟡",
    alunos: [],
  },
  {
    cientista: "Edith Flanigen",
    pais: "EUA",
    categoria: "Invisibilizada",
    emoji: "🟡",
    alunos: [],
  },
];

const pageStyles = {
  minHeight: "100vh",
  padding: "40px 20px 80px",
  background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 40%, #eff6ff 100%)",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  color: "#0f172a",
};

const containerStyles = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const cardStyles = {
  background: "rgba(255, 255, 255, 0.94)",
  borderRadius: "28px",
  padding: "36px 28px",
  boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
  marginBottom: "28px",
};

const badgeStyles = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "#dbeafe",
  color: "#1d4ed8",
  fontWeight: 700,
  marginBottom: "16px",
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

export default function Trabalhos() {
  return (
    <main style={pageStyles}>
      <div style={containerStyles}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "24px",
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Voltar para a pagina inicial
        </Link>

        <section style={cardStyles}>
          <span style={badgeStyles}>Trabalhos</span>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              marginBottom: "12px",
            }}
          >
            Cientistas e grupos
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: "760px",
            }}
          >
            Cada card mostra a cientista sorteada e os alunos responsaveis pelo
            trabalho.
          </p>
        </section>

        <section style={gridStyles}>
          {trabalhos.map((trabalho) => (
            <article
              key={trabalho.cientista}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
                borderTop: "6px solid #7c3aed",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#f5f3ff",
                  color: "#6d28d9",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                <span>{trabalho.emoji}</span>
                <span>{trabalho.categoria}</span>
              </div>

              <h2 style={{ fontSize: "1.45rem", marginBottom: "10px" }}>
                {trabalho.cientista}
              </h2>
              <p style={{ color: "#475569", marginBottom: "18px" }}>
                {trabalho.pais}
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "18px",
                  padding: "16px",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    marginBottom: "12px",
                    color: "#0f172a",
                  }}
                ></strong>

                {trabalho.alunos.length > 0 ? (
                  trabalho.alunos.map((aluno) => (
                    <div
                      key={aluno}
                      style={{
                        padding: "10px 12px",
                        marginBottom: "8px",
                        borderRadius: "12px",
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        color: "#1e293b",
                        fontWeight: 600,
                      }}
                    >
                      {aluno}
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      padding: "10px 12px",
                      borderRadius: "12px",
                      background: "#fff1f2",
                      border: "1px solid #fecdd3",
                      color: "#be123c",
                      fontWeight: 600,
                    }}
                  >
                    Sem alunos definidos ate o momento
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
