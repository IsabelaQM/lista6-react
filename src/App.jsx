import Box from "./components/Box"
import Title from "./components/Title"

function App() {
  const arrayTexts = ["Plano de desenvolvimento institucional","Pesquisa pública processos iftm","Licitações e contratos","Receitas e despesas",
  "Dados abertos","Transparência e prestação de contas","Servidores","Perguntas frequentes"];

  return (
    <>
      <Title title="Acesso à Informação" infos="Veja dados de transparência e governança" />
      <div className="container">
        {arrayTexts.map((text, i) => (
          <Box key={i} text={text} />
        ))}
      </div>
    </>
  )
}

export default App