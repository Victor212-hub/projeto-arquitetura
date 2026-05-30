import '../styles/perfilAluno.css'
import logo from '../assets/logo.png.png'


function PerfilAluno({ mudarPagina }) {
    return (
        <main className="pagina_perfil_aluno">

            <header>
                <button type="button"
                onClick={() => mudarPagina('login')}>
                    <img src={logo} alt="Logo do site" className="logo" />
                </button>
            </header>
            <h1>PERFIL DO ALUNO</h1>
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
                        <button type="button" onClick={() => mudarPagina('login')}>
                            🚪 Sair
                        </button>
                    </li>
                </ul>
            </div>
            <div className="container_perfil">
                <div className="perfil">
                    <p>Nome: João da Silva</p>
                    <p>Nascimento: 01/01/2000</p>
                    <p>Matrícula: 123456</p>
                    <p>cpf: 123.456.789-00</p>
                    <p>rg: 12.345.678-9</p>
                    <p>Curso: Engenharia de Software</p>
                    <p>Endereço: Rua Exemplo, 123 - Cidade/BA</p>
                </div>
                <div className="contatos">
                    <h2>CONTATOS</h2>
                    <input
                        className="inputt"
                        type="email"
                        placeholder="sergioclub2@gmail.com"
                    />
                    <input className="inputt" type="number" placeholder="(71) 99999-9999" />
                </div>
                <div className="endereco">
                    <h2>ENDEREÇO</h2>
                    <p>CEP:</p>
                    <input className="inputt" type="number" placeholder="00000-000" />
                    <p>ENDEREÇO:</p>
                    <input className="inputt" type="text" placeholder="Rua, 123 exemplo" />
                    <p>BAIRRO:</p>
                    <input className="inputt" type="text" placeholder="bairro exemplo" />
                    <p>COMPLEMENTO:</p>
                    <input className="inputt" type="text" placeholder="complemento exemplo" />
                    <p>NÚMERO:</p>
                    <input className="inputt" type="number" placeholder={123} />
                    <p>CIDADE:</p>
                    <input className="inputt" type="text" placeholder="cidade exemplo" />
                    <p>ESTADO:</p>
                    <input className="inputt" type="text" placeholder="estado exemplo" />
                </div>
            </div>

            <button type="button" onClick={() => mudarPagina('aluno')}>
                CANCELAR
            </button>

            <button type="button" onClick={() => mudarPagina('aluno')}>
                Voltar
            </button>

            <footer>
                <p>© 2026 Sistema de Matrícula Escolar. Todos os direitos reservados.</p>
            </footer>

        </main>
    )
}

export default PerfilAluno