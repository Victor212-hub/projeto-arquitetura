function CriarAluno({ mudarPagina }) {
  return (
    <main>
      <h1>Cadastrar Aluno</h1>

      <button type="button" onClick={() => mudarPagina('coordenador')}>
        Voltar
      </button>
    </main>
  )
}

export default CriarAluno