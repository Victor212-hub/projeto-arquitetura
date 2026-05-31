import '../styles/boletimAluno.css'

function BoletimAluno({ mudarPagina }) {
    return (
        <main className="pagina_boletim">
            <div className="container_boletim">
                <h1>Boletim do Aluno</h1>
                <p>Nome: João da Silva</p>
                <p>Matrícula: 123456</p>

                <div className="acoes_boletim">
                    <button type="button" onClick={() =>window.print()}>
                        Imprimir Boletim
                    </button>

                </div>

                <table className="table_bole">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>Nota 1</th>
                            <th>Nota 2</th>
                            <th>Nota 3</th>
                            <th>Média</th>
                            <th>Situação</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Matemática</td>
                            <td>8.5</td>
                            <td>7.0</td>
                            <td>9.0</td>
                            <td>8.2</td>
                            <td>
                                <span className="situacao aprovado">
                                    🟢Aprovado
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>Biologia</td>
                            <td>7.0</td>
                            <td>8.5</td>
                            <td>8.0</td>
                            <td>7.8</td>
                            <td>
                                <span className="situacao aprovado">
                                    🟢Aprovado
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>Português</td>
                            <td>7.5</td>
                            <td>8.0</td>
                            <td>8.5</td>
                            <td>8.0</td>
                            <td>
                                <span className="situacao aprovado">
                                    🟢Aprovado
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>História</td>
                            <td>7.5</td>
                            <td>8.0</td>
                            <td>8.5</td>
                            <td>8.0</td>
                            <td>
                                <span className="situacao aprovado">
                                    🟢Aprovado
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="acoes_boletim"
                 type="button" onClick={() => mudarPagina('aluno')}>
                    Voltar
                </button>
            </div>

            <footer>
                <p>© 2026 Sistema de Matrícula Escolar. Todos os direitos reservados.</p>
            </footer>
        </main>
    )
}

export default BoletimAluno