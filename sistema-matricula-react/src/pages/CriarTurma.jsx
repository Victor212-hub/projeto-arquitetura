import '../styles/turma.css'
import logo from '../assets/logo.png.png'

function CriarTurma({ mudarPagina }) {
  return (
    <main className="pagina_turma">
      <header className="topo">
        <img src={logo} alt="Logo do site" className="logo" />
        <h1>Turmas</h1>
      </header>

      <div className="area">
        <div className="card">
          <h2>Minhas turmas</h2>

          <div className="lista-turmas">
            <div className="turma">
              <h3>3º Ano A</h3>
              <p>
                <b>Disciplina:</b> Matemática
              </p>
              <p>
                <b>Alunos:</b> 32
              </p>
              <button type="button">Ver alunos</button>
            </div>

            <div className="turma">
              <h3>2º Ano B</h3>
              <p>
                <b>Disciplina:</b> Biologia
              </p>
              <p>
                <b>Alunos:</b> 28
              </p>
              <button type="button">Ver alunos</button>
            </div>

            <div className="turma">
              <h3>1º Ano B</h3>
              <p>
                <b>Disciplina:</b> Matemática
              </p>
              <p>
                <b>Alunos:</b> 29
              </p>
              <button type="button">Ver alunos</button>
            </div>
          </div>

          <button
            type="button"
            className="botao-voltar"
            onClick={() => mudarPagina('coordenador')}
          >
            Voltar
          </button>
        </div>
      </div>

      <footer>
        <p>© 2026 Sistema de Matrícula Escolar</p>
      </footer>
    </main>
  )
}

export default CriarTurma