function Turmas({ mudarPagina }) {
  return (
    <main>
      <h1>Turmas</h1>

      <button type="button" onClick={() => mudarPagina('coordenador')}>
        Voltar
      </button>
    </main>
  )
}

export default Turmas