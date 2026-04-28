import Link from "next/link";

const aulas = [
  {
    serie: "1ª série",
    cor: "#2563eb",
    apresentacoes: [
      {
        titulo: "Introdução à química",
        url: "https://docs.google.com/presentation/d/1pT-PxY9TX5o5K2ZwlkhdR_kGis8rwxVr/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Separação de Misturas",
        url: "https://docs.google.com/presentation/d/1ibdrVJO0DlE2Nzkh5xSp66sD6o50lV0-/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Mudanças de Estado Físico da Matéria",
        url: "https://docs.google.com/presentation/d/1LdMHkvKO11-50SZNScVZudKUHiB27G_5/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
    ],
  },
  {
    serie: "2ª série",
    cor: "#0891b2",
    apresentacoes: [
      {
        titulo: "Massa Molar e Cálculos Moleculares",
        url: "https://docs.google.com/presentation/d/1IhFFJLtkBgXhaQlg4072erAV-a3WLA6T/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Estequiometria",
        url: "https://docs.google.com/presentation/d/1q0fxwDF6ta2xjziJUsQQG---UQv-edov/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Balanceamento de equações químicas",
        url: "https://docs.google.com/presentation/d/1zpqMtwo3vdAT3tSoZ0qWwy2IAQRzNIGl/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Exercícios de Estequiometria",
        url: "https://docs.google.com/presentation/d/1nhKLugzWoFHS966UFJeeeOO7VFmS8JgF/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },

      {
        titulo: "Solubilidade",
        url: "https://docs.google.com/presentation/d/1FUAR7-dhB6eIrNqjFRxDySJAxd2OKAJX/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Diluição de soluções",
        url: "https://drive.google.com/file/d/1EL2vQhujFNxoB9ClPR6z-e1ddsU8kZIr/view?usp=sharing",
      },
    ],
  },
  {
    serie: "3ª série",
    cor: "#7c3aed",
    apresentacoes: [
      {
        titulo: "Bioquímica do corpo humano",
        url: "https://docs.google.com/presentation/d/1YDsz6qp6XQFy2rUDGs7TnIsJMEG6Wtux/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Radioatividade e física nuclear",
        url: "https://docs.google.com/presentation/d/1kyt-NNVkDuljkEGBkqD22_z73rThnRqG/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Exercícios de meia-vida",
        url: "https://docs.google.com/presentation/d/13gkdlRbLo5giTNPlZJeJXs7mk7xKDRpH/edit?usp=sharing&ouid=106621926854032891171&rtpof=true&sd=true",
      },
      {
        titulo: "Leis da radiação",
        url: "https://docs.google.com/presentation/d/1j8536UZNrqsPLRTBrJlXe_JVE6t-fddk5DJ0XkKiyLg/edit?usp=sharing",
      },
    ],
  },
];

function getPreviewUrl(url) {
  const match = url.match(/\/d\/([^/]+)/);
  const fileId = match?.[1];

  if (!fileId) {
    return url;
  }

  return `https://docs.google.com/presentation/d/${fileId}/preview`;
}

export default function Aulas() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px 80px",
        background:
          "linear-gradient(180deg, #fff7ed 0%, #ffffff 35%, #eff6ff 100%)",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: "#0f172a",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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

        <section
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            borderRadius: "28px",
            padding: "40px 28px",
            boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "999px",
              background: "#dbeafe",
              color: "#1d4ed8",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Aulas públicas
          </p>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              marginBottom: "12px",
            }}
          >
            Apresentações por série
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#475569",
              maxWidth: "760px",
            }}
          >
            Cada bloco abaixo mostra os links do Google Apresentações e uma
            pré-visualização incorporada para facilitar o acesso.
          </p>
        </section>

        {aulas.map((grupo) => (
          <section
            key={grupo.serie}
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              padding: "28px",
              marginBottom: "24px",
              boxShadow: "0 14px 40px rgba(15, 23, 42, 0.08)",
              borderTop: `6px solid ${grupo.cor}`,
            }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "18px" }}>
              {grupo.serie}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {grupo.apresentacoes.map((aula) => (
                <article
                  key={aula.url}
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "#f8fafc",
                  }}
                >
                  <div style={{ padding: "18px 18px 10px" }}>
                    <h3 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>
                      {aula.titulo}
                    </h3>
                    <a
                      href={aula.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: grupo.cor,
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      Abrir no Google Apresentações
                    </a>
                  </div>

                  <iframe
                    src={getPreviewUrl(aula.url)}
                    title={`${grupo.serie} - ${aula.titulo}`}
                    width="100%"
                    height="320"
                    allow="autoplay"
                    style={{ border: 0, background: "#cbd5e1" }}
                  />
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
