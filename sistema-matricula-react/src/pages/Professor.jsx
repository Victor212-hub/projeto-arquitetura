import '../styles/professor.css'

function Professor({ mudarPagina }) {
    return (
        <main>

  <aside className="sidebar">
    <h2>Professor</h2>
    <nav>
      <a href="#">🎓 Minhas Turmas</a>
      <a href="#">👥 Alunos</a>
      <a href="#">📝 Lançar Notas</a>
      <button onClick={() => mudarPagina('login')}>🚪 Sair</button>
    </nav>
  </aside>

  {/* CONTEÚDO PRINCIPAL */}

  <main className="conteudo">
    <header className="topo">
      <h1>Bem-vindo, Professor!</h1>
    </header>

    {/* CARDS DE INFORMAÇÃO */}

    <section className="cards">
      <div className="card">
        <h3>Turmas</h3>
        <p>4</p>
      </div>
      <div className="card">
        <h3>Alunos</h3>
        <p>112</p>
      </div>
      <div className="card">
        <h3>Atividades</h3>
        <p>9</p>
      </div>
      <div className="card">
        <h3>Média Geral</h3>
        <p>7.8</p>
      </div>
    </section>

    {/* AÇÕES RÁPIDAS */}

    <section className="acoes">
      <h2>Ações rápidas</h2>
      <div className="botoes">

        <a href="#" className="botao">
          ➕ Adicionar Atividade
        </a>

         <button onClick={() => mudarPagina('notas')} className="botao">
          📝 Lançar Notas
        </button>

        <button onClick={() => mudarPagina('turmas')} className="botao">
          📋 Ver Turmas
        </button>
      </div>
    </section>

    {/* TABELA DE ALUNOS */}

    <section className="tabela">
      <h2>Alunos da Turma — 3º Ano A</h2>
      <table>
        <tbody>
          <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Nota</th>
            <th>Situação</th>
          </tr>
          <tr>
            <td>João Silva</td>
            <td>2026001</td>
            <td>8.5</td>
            <td>Aprovado</td>
          </tr>
          <tr>
            <td>Maria Souza</td>
            <td>2026002</td>
            <td>7.2</td>
            <td>Aprovado</td>
          </tr>
          <tr>
            <td>Pedro Lima</td>
            <td>2026003</td>
            <td>5.8</td>
            <td>Recuperação</td>
          </tr>
          <tr>
            <td>Ana Costa</td>
            <td>2026004</td>
            <td>9.1</td>
            <td>Aprovado</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer>
    <p>© 2026 Sistema de Matrícula Escolar</p>
  </footer>

            <button type="button" onClick={() => mudarPagina('login')}>
                Sair
            </button>
        </main >
    )
}

export default Professor