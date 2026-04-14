import Link from "next/link";

const trabalhosPorSerie = [
  {
    serie: "1ª série",
    cor: "#7c3aed",
    trabalhos: [
      {
        cientista: "Tatiana Coelho de Sampaio",
        pais: "Brasil",
        alunos: ["Isaque Magri", "Gustavo", "Adrian"],
      },
      {
        cientista: "Sônia Guimarães",
        pais: "Brasil",
        alunos: ["Yasmin", "Livia"],
      },
      {
        cientista: "Joana D'Arc Félix de Souza",
        pais: "Brasil",
        alunos: ["Alberto", "Leonardo", "Rafael"],
      },
      {
        cientista: "Marianne Ferreira",
        pais: "Brasil",
        alunos: ["Samuel", "Brian", "Caua"],
      },
      {
        cientista: "Katherine Johnson",
        pais: "EUA",
        alunos: ["Sophia", "Heloisa", "Davi"],
      },
      {
        cientista: "Alice Ball",
        pais: "EUA",
        alunos: ["Nycolle", "Juliana Burgos"],
      },
      {
        cientista: "Mae C. Jemison",
        pais: "EUA",
        alunos: ["Lucio", "Christian"],
      },
      {
        cientista: "Gladys West",
        pais: "EUA",
        alunos: ["Mario"],
      },
      {
        cientista: "Wangari Maathai",
        pais: "Quênia",
        alunos: ["Fernanda", "Rafaela"],
      },
      {
        cientista: "Marie Maynard Daly",
        pais: "EUA",
        alunos: ["Mateus", "Aquiles"],
      },
      {
        cientista: "Marie-Anne Paulze Lavoisier",
        pais: "França",
        alunos: ["Maria Eduarda", "Breno", "Enzo"],
      },
      {
        cientista: "Clara Immerwahr",
        pais: "Alemanha",
        alunos: ["Victor", "Ana Luiza Efgen"],
      },
      {
        cientista: "Kathleen Lonsdale",
        pais: "Irlanda/Reino Unido",
        alunos: ["Amanda", "Betina", "Julia"],
      },
      {
        cientista: "Ida Noddack",
        pais: "Alemanha",
        alunos: ["Juliana Ribeiro", "Maria Bisi"],
      },
      {
        cientista: "Shirley Ann Jackson",
        pais: "EUA",
        alunos: [],
      },
      {
        cientista: "Quarraisha Abdool Karim",
        pais: "África do Sul",
        alunos: ["Gabriel", "Maria Luiza de Freitas"],
      },
      {
        cientista: "Ellen Swallow Richards",
        pais: "EUA",
        alunos: [],
      },
      {
        cientista: "Edith Flanigen",
        pais: "EUA",
        alunos: [],
      },
    ],
  },
  {
    serie: "2ª série",
    cor: "#0891b2",
    trabalhos: [
      {
        cientista: "Tebello Nyokong",
        pais: "Lesoto/África do Sul",
        alunos: ["Ana Melo", "Anna clara", "Kelvin"],
      },
      {
        cientista: "Segenet Kelemu",
        pais: "Etiópia",
        alunos: ["Victor"],
      },
      {
        cientista: "Francisca Nneka Okeke",
        pais: "Nigéria",
        alunos: ["Alexandra", "Ana Luisa", "Rebeca"],
      },
      {
        cientista: "Nashwa Eassa",
        pais: "Sudão",
        alunos: ["Adriana", "Kaian", "Isabel"],
      },
      {
        cientista: "Marguerite Perey",
        pais: "França",
        alunos: ["Maria Luiza", "Lara"],
      },
      {
        cientista: "Agnes Pockels",
        pais: "Alemanha",
        alunos: ["Pedro", "Marília", "Maria vitoria", "Gabriela"],
      },
      {
        cientista: "Harriet Brooks",
        pais: "Canadá",
        alunos: ["Gustavo", "Alice", "Ursula"],
      },
      {
        cientista: "Julia Lermontova",
        pais: "Rússia",
        alunos: ["Aidan", "Julia", "Hadassa", "Joaquim"],
      },
      {
        cientista: "Vera Rubin",
        pais: "EUA",
        alunos: ["Álvaro"],
      },
    ],
  },
];

const pageStyles = {
  minHeight: "100vh",
  padding: "40px 20px 80px",
  background:
    "linear-gradient(180deg, #fff7ed 0%, #ffffff 40%, #eff6ff 100%)",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  color: "#0f172a",
};

const containerStyles = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const heroStyles = {
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
          Voltar para a página inicial
        </Link>

        <section style={heroStyles}>
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
            A lista abaixo mostra as cientistas de cada série e os alunos
            responsáveis por cada trabalho.
          </p>
        </section>

        {trabalhosPorSerie.map((grupo) => (
          <section key={grupo.serie} style={{ marginBottom: "32px" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "28px",
                marginBottom: "20px",
                boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
                borderTop: `6px solid ${grupo.cor}`,
              }}
            >
              <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {grupo.serie}
              </h2>
              <p style={{ color: "#475569" }}>
                {grupo.trabalhos.length} cientistas listadas.
              </p>
            </div>

            <div style={gridStyles}>
              {grupo.trabalhos.map((trabalho) => (
                <article
                  key={trabalho.cientista}
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    padding: "24px",
                    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
                    borderTop: `6px solid ${grupo.cor}`,
                  }}
                >
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "10px" }}>
                    {trabalho.cientista}
                  </h3>
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
                    >
                      Alunos
                    </strong>

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
                        Alunos a definir
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
