import '../styles/perfilAluno.css'
import logo from '../assets/logo.png.png'
import { logoutUsuario } from '../services/authService'


function PerfilAluno({ mudarPagina }) {
    return (
        <main className="pagina_perfil_aluno">

            <header className="topo">
                <a href="index.html">
                    <img src="./logo.png" alt="Logo do site" className="logo" />
                </a>
                <h1>Sistema de Matrícula Escolar</h1>
            </header>
            <div className="area-perfil">
                <div style={{ width: "100%", maxWidth: 500 }}>
                    {/* Menu de navegação */}
                    <ul className="menu-lateral">
                        <li>
                            <a href="tela_aluno.html">🏠 Início</a>
                        </li>
                        <li>
                            <a href="perfil_aluno.html">👤 Perfil</a>
                        </li>
                        <li>
                            <a href="boletim_aluno.html">📄 Boletim</a>
                        </li>
                        <li>
                            <a href="index.html">🚪 Sair</a>
                        </li>
                    </ul>
                    <div className="card-perfil">
                        <h2>Perfil do Aluno</h2>
                        {/* Modo visualização */}
                        <div id="modo-visualizacao">
                            <div className="info-linha">
                                <span>Nome</span>
                                <span id="ver-nome">João da Silva</span>
                            </div>
                            <div className="info-linha">
                                <span>Nascimento</span>
                                <span id="ver-nascimento">01/01/2000</span>
                            </div>
                            <div className="info-linha">
                                <span>Matrícula</span>
                                <span id="ver-matricula">123456</span>
                            </div>
                            <div className="info-linha">
                                <span>CPF</span>
                                <span id="ver-cpf">123.456.789-00</span>
                            </div>
                            <div className="info-linha">
                                <span>RG</span>
                                <span id="ver-rg">12.345.678-9</span>
                            </div>
                            <div className="info-linha">
                                <span>Curso</span>
                                <span id="ver-curso">Engenharia de Software</span>
                            </div>
                            <div className="info-linha">
                                <span>Email</span>
                                <span id="ver-email">—</span>
                            </div>
                            <div className="info-linha">
                                <span>Telefone</span>
                                <span id="ver-telefone">—</span>
                            </div>
                            <div className="info-linha">
                                <span>Endereço</span>
                                <span id="ver-endereco">—</span>
                            </div>
                            <div className="info-linha">
                                <span>Bairro</span>
                                <span id="ver-bairro">—</span>
                            </div>
                            <div className="info-linha">
                                <span>Cidade/Estado</span>
                                <span id="ver-cidade">—</span>
                            </div>
                            <div className="botoes-perfil">
                                <button className="botao" onclick="ativarEdicao()">
                                    ✏️ Editar
                                </button>
                            </div>
                            
                        </div>
                        {/* Modo edição */}
                        <div id="modo-edicao" className="campos-edicao">
                            <label>Email</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-email"
                                placeholder="seu@email.com"
                            />
                            <label>Telefone</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-telefone"
                                placeholder="(71) 99999-9999"
                            />
                            <label>CEP</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-cep"
                                placeholder="00000-000"
                            />
                            <label>Endereço</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-endereco"
                                placeholder="Rua, Número"
                            />
                            <label>Bairro</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-bairro"
                                placeholder="Bairro"
                            />
                            <label>Complemento</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-complemento"
                                placeholder="Complemento"
                            />
                            <label>Cidade</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-cidade"
                                placeholder="Cidade"
                            />
                            <label>Estado</label>
                            <input
                                className="inputt"
                                type="text"
                                id="edit-estado"
                                placeholder="Estado"
                            />
                            <p id="msg-salvo" />
                            <div className="botoes-perfil">
                                <button className="botao-cancelar" onclick="cancelarEdicao()">
                                    Cancelar
                                </button>
                                <button className="botao" onclick="salvarPerfil()">
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    )
}

export default PerfilAluno