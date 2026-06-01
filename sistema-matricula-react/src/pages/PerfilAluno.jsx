    import { useEffect, useState } from 'react'
    import logo from '../assets/openenroll_com_fundo.png'
    import '../styles/perfilAluno.css'
    import { logoutUsuario } from '../services/authService'

    const perfilInicial = {
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        bairro: '',
        complemento: '',
        cidade: '',
        estado: '',
    }

    function PerfilAluno({ mudarPagina }) {
        const [editando, setEditando] = useState(false)
        const [perfil, setPerfil] = useState(perfilInicial)
        const [mensagem, setMensagem] = useState('')

        useEffect(() => {
            const dadosSalvos = JSON.parse(localStorage.getItem('perfil-aluno')) || {}
            setPerfil({ ...perfilInicial, ...dadosSalvos })
        }, [])

        function alterarCampo(campo, valor) {
            setPerfil({
                ...perfil,
                [campo]: valor,
            })
        }

        function salvarPerfil() {
            localStorage.setItem('perfil-aluno', JSON.stringify(perfil))

            setEditando(false)
            setMensagem('✓ Perfil salvo com sucesso!')

            setTimeout(() => {
                setMensagem('')
            }, 2000)
        }

        function cancelarEdicao() {
            const dadosSalvos = JSON.parse(localStorage.getItem('perfil-aluno')) || {}
            setPerfil({ ...perfilInicial, ...dadosSalvos })
            setEditando(false)
        }

        return (
            <main className="pagina_perfil_aluno">
                <header className="topo_perfil">
                    <button
                        type="button"
                        className="botao_logo"
                        onClick={() => mudarPagina('aluno')}
                    >
                        <img src={logo} alt="Logo do site" className="logo" />
                    </button>

                    <h1>Sistema de Matrícula Escolar</h1>
                </header>

                <section className="area-perfil">
                    <div className="perfil-wrapper">
                        <ul className="menu-lateral">
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
                                <button
                                    type="button"
                                    onClick={() => {
                                        logoutUsuario()
                                        mudarPagina('login')
                                    }}
                                >
                                    🚪 Sair
                                </button>
                            </li>
                        </ul>

                        <div className="card-perfil">
                            <h2>Perfil do Aluno</h2>

                            {!editando && (
                                <div>
                                    <div className="info-linha">
                                        <span>Nome</span>
                                        <span>João da Silva</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Nascimento</span>
                                        <span>01/01/2000</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Matrícula</span>
                                        <span>123456</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>CPF</span>
                                        <span>123.456.789-00</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>RG</span>
                                        <span>12.345.678-9</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Curso</span>
                                        <span>Engenharia de Software</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Email</span>
                                        <span>{perfil.email || '—'}</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Telefone</span>
                                        <span>{perfil.telefone || '—'}</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Endereço</span>
                                        <span>{perfil.endereco || '—'}</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Bairro</span>
                                        <span>{perfil.bairro || '—'}</span>
                                    </div>

                                    <div className="info-linha">
                                        <span>Cidade/Estado</span>
                                        <span>
                                            {perfil.cidade && perfil.estado
                                                ? `${perfil.cidade}/${perfil.estado}`
                                                : '—'}
                                        </span>
                                    </div>

                                    <div className="botoes-perfil">
                                        <button
                                            type="button"
                                            className="botao"
                                            onClick={() => setEditando(true)}
                                        >
                                            ✏️ Editar
                                        </button>
                                    </div>
                                </div>
                            )}

                            {editando && (
                                <div className="campos-edicao">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        className="inputt"
                                        type="text"
                                        placeholder="seu@email.com"
                                        value={perfil.email}
                                        onChange={(event) => alterarCampo('email', event.target.value)}
                                    />

                                    <label htmlFor="telefone">Telefone</label>
                                    <input
                                        id="telefone"
                                        className="inputt"
                                        type="text"
                                        placeholder="(71) 99999-9999"
                                        value={perfil.telefone}
                                        onChange={(event) =>
                                            alterarCampo('telefone', event.target.value)
                                        }
                                    />

                                    <label htmlFor="cep">CEP</label>
                                    <input
                                        id="cep"
                                        className="inputt"
                                        type="text"
                                        placeholder="00000-000"
                                        value={perfil.cep}
                                        onChange={(event) => alterarCampo('cep', event.target.value)}
                                    />

                                    <label htmlFor="endereco">Endereço</label>
                                    <input
                                        id="endereco"
                                        className="inputt"
                                        type="text"
                                        placeholder="Rua, Número"
                                        value={perfil.endereco}
                                        onChange={(event) =>
                                            alterarCampo('endereco', event.target.value)
                                        }
                                    />

                                    <label htmlFor="bairro">Bairro</label>
                                    <input
                                        id="bairro"
                                        className="inputt"
                                        type="text"
                                        placeholder="Bairro"
                                        value={perfil.bairro}
                                        onChange={(event) => alterarCampo('bairro', event.target.value)}
                                    />

                                    <label htmlFor="complemento">Complemento</label>
                                    <input
                                        id="complemento"
                                        className="inputt"
                                        type="text"
                                        placeholder="Complemento"
                                        value={perfil.complemento}
                                        onChange={(event) =>
                                            alterarCampo('complemento', event.target.value)
                                        }
                                    />

                                    <label htmlFor="cidade">Cidade</label>
                                    <input
                                        id="cidade"
                                        className="inputt"
                                        type="text"
                                        placeholder="Cidade"
                                        value={perfil.cidade}
                                        onChange={(event) => alterarCampo('cidade', event.target.value)}
                                    />

                                    <label htmlFor="estado">Estado</label>
                                    <input
                                        id="estado"
                                        className="inputt"
                                        type="text"
                                        placeholder="Estado"
                                        value={perfil.estado}
                                        onChange={(event) => alterarCampo('estado', event.target.value)}
                                    />

                                    <p className="msg-salvo">{mensagem}</p>

                                    <div className="botoes-perfil">
                                        <button
                                            type="button"
                                            className="botao-cancelar"
                                            onClick={cancelarEdicao}
                                        >
                                            Cancelar
                                        </button>

                                        <button
                                            type="button"
                                            className="botao"
                                            onClick={salvarPerfil}
                                        >
                                            Salvar
                                        </button>
                                    </div>
                                </div>
                            )}

                            {!editando && mensagem && <p className="msg-salvo">{mensagem}</p>}
                        </div>
                    </div>
                </section>

                <footer>
                    <p>© 2026 Sistema de Matrícula Escolar. Todos os direitos reservados.</p>
                </footer>
            </main>
        )
    }

    export default PerfilAluno