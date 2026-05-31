import '../styles/criarAtividade.css'

function CriarAtividade({ mudarPagina }) {
  return (
    <main className="pagina_atividade">
      <section className="card_atividade">
        <h1>Adicionar Atividade</h1>

        <label htmlFor="titulo">Título da atividade</label>
        <input id="titulo" type="text" placeholder="Ex: Lista de exercícios" />

        <label htmlFor="turma">Turma</label>
        <select id="turma">
          <option>3º Ano A</option>
          <option>2º Ano B</option>
          <option>1º Ano C</option>
        </select>

        <label htmlFor="disciplina">Disciplina</label>
        <select id="disciplina">
          <option>Matemática</option>
          <option>Biologia</option>
          <option>Português</option>
          <option>História</option>
        </select>

        <label htmlFor="data">Data de entrega</label>
        <input id="data" type="date" />

        <label htmlFor="descricao">Descrição</label>
        <textarea id="descricao" placeholder="Descreva a atividade"></textarea>

        <div className="acoes_atividade">
          <button type="button" onClick={() => mudarPagina('professor')}>
            Salvar
          </button>

          <button type="button" onClick={() => mudarPagina('professor')}>
            Voltar
          </button>
        </div>
      </section>
    </main>
  )
}

export default CriarAtividade