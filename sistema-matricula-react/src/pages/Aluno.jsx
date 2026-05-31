import '../styles/aluno.css'
import { logoutUsuario } from '../services/authService'

function Aluno({ mudarPagina }) {
    return (
        <main className="pagina_aluno">

            <div className="checkbox_aluno">
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="botao_label">
                    ☰
                </label>
                <ul className="menu">
                    <li>
                        <button type="button" onClick={() => mudarPagina('aluno')}>
                            🏠 Início
                        </button>
                    </li>

                    <li>
                        <button type="button" onClick={() => mudarPagina('perfilAluno')}>
                            👤 Perfil
                        </button>
                    </li>

                    <li>
                        <button type="button" onClick={() => mudarPagina('boletimAluno')}>
                            📄 Boletim
                        </button>
                    </li>

                    <li>
                        <button type="button" onClick={() => {
                            logoutUsuario()
                            mudarPagina('login')
                        }}>
                            🚪 Sair
                        </button>
                    </li>
                </ul>
            </div>
            <section className="conteudo">
                <h1>Bem-vindo, João!</h1>
                <h2>Matérias Cursadas</h2>
                <div className="materia">
                    <b>Matemática</b>
                    <p>Nota: 9.0</p>
                    <p>Professor(a): Jessica</p>
                </div>
                <div className="materia">
                    <b>Biologia</b>
                    <p>Nota: 9.0</p>
                    <p>Professor(a): Jessica</p>
                </div>
                <div className="materia">
                    <b>Química</b>
                    <p>Nota: 9.0</p>
                    <p>Professor(a): Jessica</p>
                </div>
                <div className="materia">
                    <b>Física</b>
                    <p>Nota: 9.0</p>
                    <p>Professor(a): Jessica</p>
                </div>
                <div className="materia">
                    <b>Português</b>
                    <p>Nota: 9.0</p>
                    <p>Professor(a): Jessica</p>
                </div>
                <div className="materia">
                    <b>História</b>
                    <p>Nota: 9.0</p>
                    <p>Professor(a): Jessica</p>
                </div>
                <div className="materia">
                    <b>Geografia</b>
                    <p>Nota: 9.0</p>
                    <p>Professor(a): Jessica</p>
                </div>
            </section>
            <footer>
                <p>© 2026 Sistema de Matrícula Escolar</p>
            </footer>

        </main>
    )

}

export default Aluno