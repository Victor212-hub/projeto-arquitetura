function CriarProfessor({ mudarPagina }) {
  return (
    <main>
      <h1>Cadastrar Professor</h1>

      <button type="button" onClick={() => mudarPagina('coordenador')}>
        Voltar
      </button>
    </main>
  )
}

export default CriarProfessor