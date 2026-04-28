import { useEffect, useState } from "react";
import Link from "next/link";

const grupos1serie = [
  {
    num: 1,
    cientista: "Tatiana Coelho de Sampaio",
    pais: "🇧🇷 Brasil",
    integrantes: ["Isaque M", "Gustavo", "Adrian"],
  },
  {
    num: 2,
    cientista: "Sônia Guimarães",
    pais: "🇧🇷 Brasil",
    integrantes: ["Yasmin", "Livia"],
  },
  {
    num: 3,
    cientista: "Joana D'Arc Félix de Souza",
    pais: "🇧🇷 Brasil",
    integrantes: ["Alberto", "Leonardo", "Rafael"],
  },
  {
    num: 4,
    cientista: "Marianne Ferreira",
    pais: "🇧🇷 Brasil",
    integrantes: ["Samuel", "Brian", "Caua"],
  },
  {
    num: 5,
    cientista: "Katherine Johnson",
    pais: "🇺🇸 EUA",
    integrantes: ["Sophia", "Heloisa", "Davi"],
  },
  {
    num: 6,
    cientista: "Alice Ball",
    pais: "🇺🇸 EUA",
    integrantes: ["Nycolle", "Juliana B"],
  },
  {
    num: 7,
    cientista: "Mae C. Jemison",
    pais: "🇺🇸 EUA",
    integrantes: ["Lucio", "Christian"],
  },
  {
    num: 8,
    cientista: "Gladys West",
    pais: "🇺🇸 EUA",
    integrantes: ["Mario"],
  },
  {
    num: 9,
    cientista: "Wangari Maathai",
    pais: "🇰🇪 Quênia",
    integrantes: ["Fernanda", "Rafaela"],
  },
  {
    num: 10,
    cientista: "Marie Maynard Daly",
    pais: "🇺🇸 EUA",
    integrantes: ["Mateus", "Aquiles"],
  },
  {
    num: 11,
    cientista: "Marie-Anne Paulze Lavoisier",
    pais: "🇫🇷 França",
    integrantes: ["Maria E", "Breno", "Enzo"],
  },
  {
    num: 12,
    cientista: "Clara Immerwahr",
    pais: "🇩🇪 Alemanha",
    integrantes: ["Victor", "Ana L E"],
  },
  {
    num: 13,
    cientista: "Kathleen Lonsdale",
    pais: "🇬🇧 Irlanda/Reino Unido",
    integrantes: ["Amanda", "Betina", "Julia"],
  },
  {
    num: 14,
    cientista: "Ida Noddack",
    pais: "🇩🇪 Alemanha",
    integrantes: ["Juliana R", "Maria B"],
  },
  {
    num: 15,
    cientista: "Shirley Ann Jackson",
    pais: "🇺🇸 EUA",
    integrantes: [],
  },
  {
    num: 16,
    cientista: "Quarraisha Abdool Karim",
    pais: "🇿🇦 África do Sul",
    integrantes: ["Gabriel", "Maria L F"],
  },
  {
    num: 17,
    cientista: "Ellen Swallow Richards",
    pais: "🇺🇸 EUA",
    integrantes: [],
  },
  {
    num: 18,
    cientista: "Edith Flanigen",
    pais: "🇺🇸 EUA",
    integrantes: [],
  },
];

const grupos2serie = [
  {
    num: 1,
    cientista: "Tebello Nyokong",
    pais: "🇿🇦 Lesoto/África do Sul",
    integrantes: ["Ana Melo", "Anna C", "Kelvin"],
  },
  {
    num: 2,
    cientista: "Segenet Kelemu",
    pais: "🇪🇹 Etiópia",
    integrantes: ["Victor"],
  },
  {
    num: 3,
    cientista: "Francisca Nneka Okeke",
    pais: "🇳🇬 Nigéria",
    integrantes: ["Alexandra", "Ana L", "Rebeca"],
  },
  {
    num: 4,
    cientista: "Nashwa Eassa",
    pais: "🇸🇩 Sudão",
    integrantes: ["Adriana", "Kaian", "Isabel"],
  },
  {
    num: 5,
    cientista: "Marguerite Perey",
    pais: "🇫🇷 França",
    integrantes: ["Maria Luiza", "Lara"],
  },
  {
    num: 6,
    cientista: "Agnes Pockels",
    pais: "🇩🇪 Alemanha",
    integrantes: ["Pedro", "Marília", "Maria V", "Gabriela"],
  },
  {
    num: 7,
    cientista: "Harriet Brooks",
    pais: "🇨🇦 Canadá",
    integrantes: ["Gustavo", "Alice", "Ursula"],
  },
  {
    num: 8,
    cientista: "Julia Lermontova",
    pais: "🇷🇺 Rússia",
    integrantes: ["Aidan", "Julia", "Hadassa", "Joaquim"],
  },
];

const checklistLabels = [
  "Abertura com nome + frase de impacto ou pergunta",
  "Explicou quem foi a cientista (país, época, área)",
  "Explicou a descoberta de forma simples",
  "Falou das dificuldades que ela enfrentou",
  "Mostrou o impacto no mundo hoje",
  "Fechamento com reflexão, curiosidade ou pergunta",
  "Tem pelo menos 1 foto real da cientista",
  "O nome da cientista aparece escrito na tela",
  "Todos do grupo participam falando",
  "O vídeo tem entre 2 e 4 minutos",
];

const sections = [
  { id: "roteiro", label: "Roteiro" },
  { id: "exemplo", label: "Exemplo" },
  { id: "grupos-1serie", label: "1ª Série" },
  { id: "grupos-2serie", label: "2ª Série" },
  { id: "checklist", label: "Checklist" },
  { id: "dicas", label: "Dicas" },
  { id: "avaliacao", label: "Avaliação" },
  { id: "referencias", label: "Referências" },
];

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function GroupCards({ grupos }) {
  return (
    <div className="grupos-container">
      {grupos.map((grupo) => (
        <div className="grupo-card" key={grupo.num}>
          <div className="grupo-num">Grupo {grupo.num}</div>
          <div className="grupo-cientista">{grupo.cientista}</div>
          <div className="grupo-info">{grupo.pais}</div>
          <div className="grupo-integrantes">
            <span className="label-integrantes">👥 Integrantes:</span>
            {grupo.integrantes.length > 0 ? (
              grupo.integrantes.map((nome) => (
                <span className="nome-aluno" key={nome}>
                  👤 {nome}
                </span>
              ))
            ) : (
              <span className="nome-vazio">⚠️ Integrantes a definir</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Trabalhos() {
  const [activeSection, setActiveSection] = useState("roteiro");
  const [checklist, setChecklist] = useState(() =>
    checklistLabels.map(() => false),
  );

  useEffect(() => {
    const savedChecklist = window.localStorage.getItem("checklist-trabalhos");

    if (savedChecklist) {
      try {
        const parsedChecklist = JSON.parse(savedChecklist);

        if (
          Array.isArray(parsedChecklist) &&
          parsedChecklist.length === checklistLabels.length
        ) {
          setChecklist(parsedChecklist);
        }
      } catch {
        window.localStorage.removeItem("checklist-trabalhos");
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "checklist-trabalhos",
      JSON.stringify(checklist),
    );
  }, [checklist]);

  const toggleChecklistItem = (index) => {
    setChecklist((currentChecklist) =>
      currentChecklist.map((item, itemIndex) =>
        itemIndex === index ? !item : item,
      ),
    );
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="page">
      <div className="container">
        <Link href="/" className="back-link">
          Voltar para a página inicial
        </Link>

        <header>
          <h1>🎬 Roteiro para Vídeo</h1>
          <p className="subtitle">Cientistas Invisibilizadas</p>
          <span className="badge">📚 Guia Completo do Aluno</span>
        </header>

        <nav>
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={activeSection === section.id ? "active" : ""}
              onClick={() => handleSectionChange(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {activeSection === "roteiro" && (
          <section>
            <Card>
              <h2>📌 O que você vai fazer?</h2>
              <p>
                Criar um vídeo de <strong>2 a 4 minutos</strong> sobre uma
                cientista que fez história, mas que muitas vezes foi esquecida
                ou invisibilizada.
              </p>
            </Card>

            <Card>
              <h2>📋 Estrutura do Vídeo - 6 Partes</h2>
              <p>Siga esta ordem:</p>

              <h3>1️⃣ Abertura (5 a 10 segundos)</h3>
              <ul>
                <li>Dizer o nome da cientista</li>
                <li>Fazer uma pergunta curiosa ou frase de impacto</li>
                <li>
                  <strong>Dica:</strong> Algo que faça a pessoa querer continuar
                  assistindo.
                </li>
              </ul>

              <h3>2️⃣ Quem foi ela? (20 a 30 segundos)</h3>
              <ul>
                <li>De que país era</li>
                <li>Em que época viveu</li>
                <li>Qual era a área de trabalho dela</li>
              </ul>

              <h3>3️⃣ O que ela descobriu ou fez? (30 a 60 segundos)</h3>
              <ul>
                <li>Explicar a descoberta de forma simples e clara</li>
                <li>Usar comparações do dia a dia se possível</li>
                <li>
                  <strong>Dica:</strong> Imagine que está explicando para alguém
                  que nunca estudou ciência.
                </li>
              </ul>

              <h3>4️⃣ Dificuldades (20 a 40 segundos)</h3>
              <p>Responda pelo menos uma dessas perguntas:</p>
              <ul>
                <li>Ela sofreu preconceito?</li>
                <li>Alguém roubou o crédito do trabalho dela?</li>
                <li>Que barreiras ela enfrentou?</li>
              </ul>

              <h3>5️⃣ Impacto Hoje (20 a 30 segundos)</h3>
              <ul>
                <li>Onde a descoberta dela aparece na vida real hoje</li>
                <li>Como o trabalho dela mudou a ciência ou a sociedade</li>
              </ul>

              <h3>6️⃣ Fechamento (10 a 15 segundos)</h3>
              <p>Escolha uma opção:</p>
              <ul>
                <li>Uma curiosidade final</li>
                <li>Uma reflexão</li>
                <li>Uma pergunta para o público pensar</li>
              </ul>
            </Card>

            <Card>
              <h2>📌 Regras Importantes</h2>
              <table>
                <thead>
                  <tr>
                    <th>Regra</th>
                    <th>Detalhe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>⏱️ Duração</td>
                    <td>Entre 2 e 4 minutos</td>
                  </tr>
                  <tr>
                    <td>📸 Imagem</td>
                    <td>Obrigatório pelo menos 1 foto real da cientista</td>
                  </tr>
                  <tr>
                    <td>✍️ Nome na tela</td>
                    <td>O nome da cientista deve aparecer escrito no vídeo</td>
                  </tr>
                  <tr>
                    <td>🗣️ Fala</td>
                    <td>Use suas próprias palavras, não leia o texto</td>
                  </tr>
                  <tr>
                    <td>👥 Grupo</td>
                    <td>Todos os integrantes devem participar do vídeo</td>
                  </tr>
                  <tr>
                    <td>🕵️ Fontes</td>
                    <td>
                      Apresente as fontes das quais obtiveram as informações.
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </section>
        )}

        {activeSection === "exemplo" && (
          <section>
            <Card>
              <h2>🎥 Exemplo Pronto - Vera Rubin</h2>

              <h3>1️⃣ Abertura</h3>
              <div className="exemplo-box">
                <p>
                  &quot;E se eu te dissesse que a maior parte do universo é
                  feita de algo que ninguém consegue ver?&quot;
                </p>
              </div>

              <h3>2️⃣ Quem foi</h3>
              <p>
                Vera Rubin foi uma astrônoma americana, nascida em 1928. Desde
                criança era fascinada pelas estrelas. Numa época em que mulheres
                eram desencorajadas de seguir carreira científica, ela insistiu
                e se tornou uma das maiores astrônomas de todos os tempos.
              </p>

              <h3>3️⃣ O que ela fez</h3>
              <p>
                Vera estudou como as galáxias giram. Ela percebeu que as
                estrelas nas bordas das galáxias se moviam rápido demais, tão
                rápido que deveriam sair voando para o espaço. Mas não saíam.
                Isso só fazia sentido se existisse algo invisível segurando tudo
                junto, uma matéria que ninguém consegue ver, chamada{" "}
                <strong>matéria escura</strong>.
              </p>
              <p>
                É como se você visse uma pipa voando, mas não conseguisse
                enxergar o fio que a segura. O fio está lá, você só não vê. Vera
                provou que esse &quot;fio invisível&quot; existe no universo.
              </p>

              <h3>4️⃣ Dificuldades</h3>
              <p>
                Quando tentou entrar no mestrado em Princeton, foi rejeitada
                porque mulheres não eram aceitas no programa de astronomia. Ao
                longo da carreira, foi a única mulher em muitos ambientes.
                Colegas não a levavam a sério. Mesmo com uma das maiores
                descobertas da astronomia, nunca recebeu o Prêmio Nobel.
              </p>

              <h3>5️⃣ Impacto</h3>
              <p>
                Hoje sabemos que a matéria escura compõe cerca de 27% de todo o
                universo. Sem o trabalho de Vera Rubin, não teríamos essa
                compreensão. Toda a astrofísica moderna depende da descoberta
                dela.
              </p>

              <h3>6️⃣ Fechamento</h3>
              <div className="exemplo-box">
                <p>
                  &quot;Ela provou que o que não conseguimos ver pode ser a
                  maior parte do que existe. Quantas outras descobertas
                  invisíveis ainda estão esperando para serem encontradas?&quot;
                </p>
              </div>
            </Card>
          </section>
        )}

        {activeSection === "grupos-1serie" && (
          <section>
            <Card>
              <h2>👥 Grupos e Cientistas - 1ª Série</h2>
              <p>
                Veja abaixo qual cientista seu grupo da 1ª Série ficou
                responsável e quem são os integrantes.
              </p>
            </Card>
            <GroupCards grupos={grupos1serie} />
          </section>
        )}

        {activeSection === "grupos-2serie" && (
          <section>
            <Card>
              <h2>👥 Grupos e Cientistas - 2ª Série</h2>
              <p>
                Veja abaixo qual cientista seu grupo da 2ª Série ficou
                responsável e quem são os integrantes.
              </p>
            </Card>
            <GroupCards grupos={grupos2serie} />
          </section>
        )}

        {activeSection === "checklist" && (
          <section>
            <Card>
              <h2>✅ Checklist - Confira Antes de Gravar</h2>
              <p>Marque cada item para garantir que seu vídeo tem tudo:</p>

              <div className="checklist">
                {checklistLabels.map((label, index) => {
                  const inputId = `check-${index + 1}`;

                  return (
                    <div className="checklist-item" key={inputId}>
                      <input
                        type="checkbox"
                        id={inputId}
                        checked={checklist[index]}
                        onChange={() => toggleChecklistItem(index)}
                      />
                      <label htmlFor={inputId}>{label}</label>
                    </div>
                  );
                })}
              </div>
            </Card>
          </section>
        )}

        {activeSection === "dicas" && (
          <section>
            <Card>
              <h2>💡 Dicas Finais Para o Vídeo</h2>
            </Card>

            <div className="dica-container">
              <div className="dica-card">
                <strong>📖 Use pelo menos 2 fontes</strong>
                <p>
                  Não confie em uma fonte só. Pesquise em diferentes lugares
                  para ter informações mais confiáveis.
                </p>
              </div>
              <div className="dica-card">
                <strong>🗣️ Conte como uma história</strong>
                <p>
                  Não leia, fale naturalmente. Pratique para soar como se
                  estivesse conversando com um amigo.
                </p>
              </div>
              <div className="dica-card">
                <strong>⏱️ Ensaie antes de gravar</strong>
                <p>
                  Leia em voz alta e cronometre. Assim você conhece bem o texto
                  e sabe se está dentro do tempo.
                </p>
              </div>
              <div className="dica-card">
                <strong>🎨 Use imagens ou desenhos</strong>
                <p>
                  Prende a atenção de quem assiste. Não deixe só áudio, mostre
                  fotos, diagramas, qualquer coisa visual.
                </p>
              </div>
              <div className="dica-card">
                <strong>🤝 Dividam as falas</strong>
                <p>
                  Todos do grupo devem aparecer e falar no vídeo. Cada um fica
                  com uma ou duas partes.
                </p>
              </div>
              <div className="dica-card">
                <strong>🎤 Áudio claro</strong>
                <p>
                  Fale bem perto do microfone, em um lugar silencioso. Áudio
                  ruim prejudica muito a avaliação.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === "avaliacao" && (
          <section>
            <Card>
              <h2>📊 Como o Vídeo Será Avaliado</h2>
              <p>
                <strong>Total: 10 pontos</strong>
              </p>
            </Card>

            <div className="rubrica">
              {[
                [
                  "1. Abertura",
                  "Tem frase de impacto ou pergunta? Prende a atenção?",
                  "1,0 ponto",
                ],
                [
                  "2. Quem foi",
                  "Informou país, época e área da cientista?",
                  "1,0 ponto",
                ],
                [
                  "3. Descoberta",
                  "Explicou o que ela fez de forma clara e simples?",
                  "2,0 pontos",
                ],
                [
                  "4. Dificuldades",
                  "Mostrou os obstáculos que ela enfrentou?",
                  "1,5 ponto",
                ],
                [
                  "5. Impacto",
                  "Conectou o trabalho dela com o mundo de hoje?",
                  "1,0 ponto",
                ],
                [
                  "6. Fechamento",
                  "Terminou com reflexão, curiosidade ou pergunta?",
                  "0,5 ponto",
                ],
                [
                  "7. Imagem",
                  "Tem pelo menos 1 foto real da cientista com nome escrito?",
                  "1,0 ponto",
                ],
                [
                  "8. Participação",
                  "Todos do grupo falaram no vídeo?",
                  "1,0 ponto",
                ],
                ["9. Tempo", "O vídeo tem entre 2 e 4 minutos?", "0,5 ponto"],
                [
                  "10. Capricho",
                  "Áudio claro, imagem ok, vídeo organizado?",
                  "0,5 ponto",
                ],
              ].map(([titulo, descricao, pontos]) => (
                <div className="rubrica-item" key={titulo}>
                  <div>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                  </div>
                  <div className="pontos">{pontos}</div>
                </div>
              ))}
            </div>

            <Card>
              <h2>📋 Detalhamento de Cada Nota</h2>

              <h3>Abertura (1,0 ponto)</h3>
              <ul>
                <li>
                  <strong>1,0:</strong> Abertura criativa, com pergunta ou frase
                  que prende a atenção
                </li>
                <li>
                  <strong>0,5:</strong> Tem abertura, mas é fraca ou genérica
                </li>
                <li>
                  <strong>0,0:</strong> Não tem abertura, já começa falando
                  direto
                </li>
              </ul>

              <h3>Quem foi (1,0 ponto)</h3>
              <ul>
                <li>
                  <strong>1,0:</strong> Informou país, época e área de atuação
                </li>
                <li>
                  <strong>0,5:</strong> Faltou uma das informações
                </li>
                <li>
                  <strong>0,0:</strong> Não apresentou a cientista
                </li>
              </ul>

              <h3>Descoberta (2,0 pontos)</h3>
              <ul>
                <li>
                  <strong>2,0:</strong> Explicou de forma clara, simples e usou
                  comparações
                </li>
                <li>
                  <strong>1,5:</strong> Explicou bem, mas sem comparações ou um
                  pouco confuso
                </li>
                <li>
                  <strong>1,0:</strong> Explicou de forma superficial
                </li>
                <li>
                  <strong>0,5:</strong> Muito vago ou difícil de entender
                </li>
                <li>
                  <strong>0,0:</strong> Não explicou a descoberta
                </li>
              </ul>

              <h3>Dificuldades (1,5 ponto)</h3>
              <ul>
                <li>
                  <strong>1,5:</strong> Mostrou claramente os obstáculos com
                  detalhes
                </li>
                <li>
                  <strong>1,0:</strong> Mencionou dificuldades, mas sem
                  aprofundar
                </li>
                <li>
                  <strong>0,5:</strong> Citou rapidamente, sem explicar
                </li>
                <li>
                  <strong>0,0:</strong> Não mencionou dificuldades
                </li>
              </ul>

              <h3>Impacto (1,0 ponto)</h3>
              <ul>
                <li>
                  <strong>1,0:</strong> Conectou o trabalho da cientista com a
                  vida real de hoje
                </li>
                <li>
                  <strong>0,5:</strong> Mencionou impacto, mas de forma vaga
                </li>
                <li>
                  <strong>0,0:</strong> Não falou sobre impacto
                </li>
              </ul>

              <h3>Fechamento (0,5 ponto)</h3>
              <ul>
                <li>
                  <strong>0,5:</strong> Fechamento marcante com reflexão,
                  curiosidade ou pergunta
                </li>
                <li>
                  <strong>0,25:</strong> Tem fechamento, mas fraco
                </li>
                <li>
                  <strong>0,0:</strong> Não tem fechamento, o vídeo simplesmente
                  acaba
                </li>
              </ul>

              <h3>Imagem (1,0 ponto)</h3>
              <ul>
                <li>
                  <strong>1,0:</strong> Foto real da cientista + nome escrito na
                  tela
                </li>
                <li>
                  <strong>0,5:</strong> Tem foto ou nome, mas não os dois
                </li>
                <li>
                  <strong>0,0:</strong> Não tem foto nem nome na tela
                </li>
              </ul>

              <h3>Participação (1,0 ponto)</h3>
              <ul>
                <li>
                  <strong>1,0:</strong> Todos os integrantes falam no vídeo
                </li>
                <li>
                  <strong>0,5:</strong> A maioria fala, mas alguém ficou de fora
                </li>
                <li>
                  <strong>0,0:</strong> Só uma pessoa fala
                </li>
              </ul>

              <h3>Tempo (0,5 ponto)</h3>
              <ul>
                <li>
                  <strong>0,5:</strong> Entre 2 e 4 minutos
                </li>
                <li>
                  <strong>0,25:</strong> Passou um pouco (até 4:30) ou ficou
                  curto (1:30-2:00)
                </li>
                <li>
                  <strong>0,0:</strong> Menos de 1:30 ou mais de 5 minutos
                </li>
              </ul>

              <h3>Capricho (0,5 ponto)</h3>
              <ul>
                <li>
                  <strong>0,5:</strong> Áudio claro, imagem ok, vídeo organizado
                </li>
                <li>
                  <strong>0,25:</strong> Dá para entender, mas com problemas de
                  áudio ou imagem
                </li>
                <li>
                  <strong>0,0:</strong> Áudio incompreensível ou vídeo muito
                  desorganizado
                </li>
              </ul>
            </Card>
          </section>
        )}

        {activeSection === "referencias" && (
          <section>
            <Card>
              <h2>📸 Onde Encontrar Imagens</h2>
              <table>
                <thead>
                  <tr>
                    <th>Fonte</th>
                    <th>Site</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Imagens</td>
                    <td>Buscar o nome da cientista</td>
                  </tr>
                  <tr>
                    <td>Wikimedia Commons</td>
                    <td>commons.wikimedia.org</td>
                  </tr>
                  <tr>
                    <td>Site do Nobel</td>
                    <td>nobelprize.org</td>
                  </tr>
                  <tr>
                    <td>Reportagens</td>
                    <td>Buscar nome + cientista no Google</td>
                  </tr>
                </tbody>
              </table>
            </Card>

            <Card>
              <h2>📚 Dicas de Pesquisa</h2>
              <ul>
                <li>
                  <strong>Use pelo menos 2 fontes</strong> - Não confie em uma
                  fonte só
                </li>
                <li>
                  <strong>Busque Wikipedia em português</strong> - Tem
                  informações confiáveis sobre a maioria das cientistas
                </li>
                <li>
                  <strong>Procure por reportagens</strong> - Buscar &quot;[Nome
                  da cientista] + cientista&quot; no Google
                </li>
                <li>
                  <strong>Verifique a data</strong> - Prefira informações mais
                  recentes e atualizadas
                </li>
                <li>
                  <strong>Anote as fontes</strong> - Guarde o link para
                  referência
                </li>
              </ul>
            </Card>
          </section>
        )}

        <footer>
          <p>🎓 Guia do Aluno - Projeto Científicas Invisibilizadas</p>
        </footer>
      </div>

      <style jsx global>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8eef7 100%);
          padding: 20px;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, sans-serif;
          color: #1a1a1a;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 16px;
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }

        header {
          text-align: center;
          margin-bottom: 50px;
          padding: 40px 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        }

        h1 {
          font-size: 2.5em;
          color: #2d3748;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .subtitle {
          font-size: 1.1em;
          color: #718096;
          margin-bottom: 20px;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9em;
          font-weight: 500;
        }

        nav {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          margin-bottom: 40px;
          display: flex;
          flex-wrap: wrap;
          overflow-x: auto;
        }

        nav button {
          flex: 1;
          min-width: 150px;
          padding: 16px 20px;
          color: #4a5568;
          border: 0;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          font-weight: 500;
          border-right: 1px solid #e2e8f0;
          background: transparent;
          font-size: 1rem;
        }

        nav button:last-child {
          border-right: none;
        }

        nav button:hover {
          color: #667eea;
          background: #f7fafc;
        }

        nav button.active {
          color: #667eea;
          border-bottom-color: #667eea;
          background: #f0f4ff;
        }

        section {
          animation: fadeIn 0.3s ease-in;
        }

        .card,
        .rubrica {
          background: white;
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .card {
          border-left: 4px solid #667eea;
        }

        .card h2 {
          font-size: 1.8em;
          color: #2d3748;
          margin-bottom: 16px;
        }

        .card h3 {
          font-size: 1.3em;
          color: #2d3748;
          margin: 24px 0 12px;
        }

        .card p,
        .grupo-info,
        .dica-card p,
        .rubrica-item p {
          color: #4a5568;
          line-height: 1.8;
        }

        .card ul {
          margin-left: 24px;
          color: #4a5568;
        }

        .card li {
          margin-bottom: 10px;
          line-height: 1.7;
        }

        .checklist {
          background: #f7fafc;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }

        .checklist-item {
          display: flex;
          align-items: center;
          padding: 12px;
          margin-bottom: 10px;
          background: white;
          border-radius: 8px;
          border-left: 3px solid #48bb78;
        }

        .checklist-item input {
          width: 20px;
          height: 20px;
          margin-right: 16px;
          cursor: pointer;
          accent-color: #48bb78;
        }

        .checklist-item label {
          flex: 1;
          cursor: pointer;
          color: #2d3748;
          font-weight: 500;
        }

        .exemplo-box {
          background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
          border-left: 4px solid #d63031;
        }

        .exemplo-box p {
          color: #2d3748;
          margin-bottom: 0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        th {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px;
          text-align: left;
          font-weight: 600;
        }

        td {
          padding: 14px 16px;
          border-bottom: 1px solid #e2e8f0;
          color: #2d3748;
        }

        tr:hover {
          background: #f7fafc;
        }

        tbody tr:last-child td {
          border-bottom: none;
        }

        .grupos-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .grupo-card,
        .dica-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .grupo-card {
          border-top: 4px solid #667eea;
          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .grupo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .grupo-num {
          font-size: 0.9em;
          color: #718096;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .grupo-cientista {
          font-size: 1.3em;
          color: #2d3748;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .grupo-integrantes {
          background: #f7fafc;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9em;
          color: #4a5568;
        }

        .label-integrantes {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #2d3748;
        }

        .nome-aluno,
        .nome-vazio {
          display: block;
          padding: 8px 12px;
          margin-bottom: 6px;
          border-radius: 6px;
        }

        .nome-aluno {
          background: white;
          border-left: 3px solid #667eea;
          color: #2d3748;
          font-weight: 500;
        }

        .nome-vazio {
          background: #fff5f5;
          border-left: 3px solid #e53e3e;
          color: #e53e3e;
          font-style: italic;
          font-weight: 400;
        }

        .dica-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .dica-card strong {
          color: #667eea;
          display: block;
          margin-bottom: 8px;
          font-size: 1em;
        }

        .rubrica-item {
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 1fr 200px;
          gap: 20px;
          align-items: start;
        }

        .rubrica-item:last-child {
          border-bottom: none;
        }

        .rubrica-item h4 {
          color: #2d3748;
          margin-bottom: 8px;
          font-size: 1em;
        }

        .rubrica-item p {
          color: #718096;
          font-size: 0.9em;
          margin-bottom: 8px;
        }

        .pontos {
          font-weight: 600;
          color: #667eea;
          text-align: right;
        }

        footer {
          text-align: center;
          padding: 30px 20px;
          color: #718096;
          margin-top: 50px;
          border-top: 1px solid #e2e8f0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8em;
          }

          nav {
            flex-direction: column;
          }

          nav button {
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
          }

          nav button.active {
            border-left: 4px solid #667eea;
            border-bottom: 1px solid #e2e8f0;
          }

          .grupos-container,
          .dica-container,
          .rubrica-item {
            grid-template-columns: 1fr;
          }

          .pontos {
            text-align: left;
          }

          table {
            font-size: 0.9em;
          }

          th,
          td {
            padding: 10px;
          }
        }
      `}</style>
    </main>
  );
}
