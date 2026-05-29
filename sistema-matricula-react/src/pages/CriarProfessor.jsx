import logo from '../assets/logo.png.png'
import '../styles/criarProfessor.css'

function CriarProfessor({ mudarPagina }) {
  return (
    <main className="pagina_criar_professor">
      <header className="header_professor">
        <img src={logo} alt="Logo do site" className="logo_professor" />
      </header>

      <div className="container_conta">
        <div className="criar_conta">
          <h2>Criar Conta (Professor)</h2>

          <input className="inputt" type="text" placeholder="Digite seu nome 👤" />
          <input className="inputt" type="email" placeholder="Insira seu email 📩" />
          <input className="inputt" type="password" placeholder="Crie uma senha 🔐" />
          <input className="inputt" type="password" placeholder="Confirme sua senha 🔒" />

          <button
            type="button"
            className="botao"
            onClick={() => mudarPagina('coordenador')}
          >
            Cadastrar
          </button>

          <button
            type="button"
            className="botao botao_secundario"
            onClick={() => mudarPagina('coordenador')}
          >
            Voltar
          </button>
        </div>
      </div>

      <footer className="footer_professor">
        <p>© 2026 Sistema de Matrícula Escolar. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default CriarProfessor