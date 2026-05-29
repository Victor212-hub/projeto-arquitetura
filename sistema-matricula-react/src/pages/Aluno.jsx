import '../styles/aluno.css'

function Aluno({ mudarPagina }) {
    return (
        <main>
                
                <div className="checkbox_aluno">
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="botao_label">
                        ☰
                    </label>
                    <ul className="menu">
                        <li>
                            <a href="index.html">🏠 Início</a>
                        </li>
                        <li>
                            <a href="perfil_aluno.html">👤 Perfil</a>
                        </li>
                        <li>
                            <a href="boletim_aluno.html">📄 Boletim</a>
                        </li>
                    </ul>
                </div>
                <main className="conteudo">
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
                </main>
                <footer>
                    <p>© 2026 Sistema de Matrícula Escolar</p>
                </footer>


            <button type="button" onClick={() => mudarPagina('login')}>
                Sair
            </button>
        </main>
    )

}

export default Aluno