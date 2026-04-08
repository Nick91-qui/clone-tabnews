import fs from "fs";
import path from "path";
import Link from "next/link";

function Trabalhos({ htmlContent }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "20px",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "16px",
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Voltar para a página inicial
        </Link>

        <iframe
          title="Trabalho Cientistas Invisibilizadas"
          srcDoc={htmlContent}
          style={{
            width: "100%",
            minHeight: "90vh",
            border: "1px solid #cbd5e1",
            borderRadius: "18px",
            background: "#ffffff",
          }}
        />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "pages", "site.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      htmlContent,
    },
  };
}

export default Trabalhos;
