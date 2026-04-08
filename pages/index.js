import fs from "fs";
import path from "path";

function Home({ htmlContent }) {
  return <main dangerouslySetInnerHTML={{ __html: htmlContent }} />;
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

export default Home;
