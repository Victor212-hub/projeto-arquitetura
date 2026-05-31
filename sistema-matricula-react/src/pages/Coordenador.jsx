import '../styles/coordenador.css'
import { logoutUsuario } from '../services/authService'

function Coordenador({ mudarPagina }) {
  return (
    <main className="Coordenador">
      {/* MENU LATERAL */}
      <aside className="sidebar">
        <h2>Coordenação</h2>

        <nav>
          <button type="button" onClick={() => mudarPagina('aluno')}>
            🎓 Alunos
          </button>

          <button type="button" onClick={() => mudarPagina('professor')}>
            👨‍🏫 Professores
          </button>

          <button type="button" onClick={() => mudarPagina('criarTurma')}>
            📚 Turmas
          </button>

          <button type="button" onClick={() => {
            logoutUsuario()
            mudarPagina('login')
          }}>
            🚪 Sair
          </button>
        </nav>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="conteudo">
        <h2>Tela do Coordenador</h2>

        <header className="topo">
          <h1>Bem-vindo, Coordenador!</h1>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Alunos</h3>
            <p>245</p>
          </div>

          <div className="card">
            <h3>Professores</h3>
            <p>32</p>
          </div>

          <div className="card">
            <h3>Turmas</h3>
            <p>18</p>
          </div>

          <div className="card">
            <h3>Média Geral</h3>
            <p>8.4</p>
          </div>
        </section>

        <section className="acoes">
          <h2>Ações rápidas</h2>

          {/* Botões para criar aluno, professor e turma */}

          <div className="botoes">
            <button className="botao"
              type="button"
              onClick={() => mudarPagina('criarAluno')}
            >
              ➕ Cadastrar Aluno
            </button>

            <button className="botao"
              type="button"
              onClick={() => mudarPagina('criarProfessor')}
            >
              ➕ Cadastrar Professor
            </button>

            <button className="botao"
              type="button"
              onClick={() => mudarPagina('criarTurma')}>
              ➕ Criar Turma
            </button>

          </div>
        </section>

        {/*Fim da seção de botoes */}

        <section className="tabela">
          <h2>Últimos alunos cadastrados</h2>

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Turma</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>João Silva</td>
                <td>2026001</td>
                <td>3º Ano A</td>
                <td>Ativo</td>
              </tr>

              <tr>
                <td>Maria Souza</td>
                <td>2026002</td>
                <td>2º Ano B</td>
                <td>Ativo</td>
              </tr>

              <tr>
                <td>Pedro Lima</td>
                <td>2026003</td>
                <td>1º Ano C</td>
                <td>Ativo</td>
              </tr>
            </tbody>
          </table>
        </section>

        <footer>
          <p>&copy; 2026 Sistema de Matrícula Escolar</p>
        </footer>
      </section>
    </main>
  )
}

export default Coordenador