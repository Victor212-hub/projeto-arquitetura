import { useEffect, useState } from 'react'
import '../styles/notas.css'

const bancoDados = {
    '3A': [
        { id: '2026001', nome: 'João Silva' },
        { id: '2026002', nome: 'Maria Souza' },
        { id: '2026003', nome: 'Pedro Lima' },
        { id: '2026004', nome: 'Ana Costa' },
    ],
    '3B': [
        { id: '2026005', nome: 'Lucas Mendes' },
        { id: '2026006', nome: 'Julia Ramos' },
    ],
    '2A': [
        { id: '2026007', nome: 'Carlos Neto' },
        { id: '2026008', nome: 'Fernanda Lima' },
    ],
}

const disciplinas = ['Matemática', 'Geografia', 'Ciências', 'Português', 'Física', 'Química']

function Notas({ mudarPagina }) {
    const [turmaSelecionada, setTurmaSelecionada] = useState('')
    const [notas, setNotas] = useState({})
    const [status, setStatus] = useState('')

    useEffect(() => {
        const notasSalvas = JSON.parse(localStorage.getItem('notas')) || {}
        setNotas(notasSalvas)
    }, [])

    function salvarNota(alunoId, disciplina, valor) {
        const nota = parseFloat(valor)

        if (valor !== '' && (nota < 0 || nota > 10)) {
            setStatus('Nota inválida! Digite entre 0 e 10.')
            setTimeout(() => setStatus(''), 2000)
            return
        }

        const novasNotas = {
            ...notas,
            [alunoId]: {
                ...(notas[alunoId] || {}),
                [disciplina]: valor,
            },
        }

        setNotas(novasNotas)
        localStorage.setItem('notas', JSON.stringify(novasNotas))

        setStatus('✓ Nota salva!')
        setTimeout(() => setStatus(''), 2000)
    }

    function calcularMedia(alunoId) {
        const notasAluno = notas[alunoId] || {}
        const valores = Object.values(notasAluno)
            .filter((nota) => nota !== '')
            .map(Number)

        if (valores.length === 0) {
            return '—'
        }

        const media = valores.reduce((soma, nota) => soma + nota, 0) / valores.length
        return media.toFixed(1)
    }

    function classeMedia(alunoId) {
        const media = calcularMedia(alunoId)

        if (media === '—') {
            return 'media-cell'
        }

        if (Number(media) >= 7) {
            return 'media-cell aprovado'
        }

        if (Number(media) >= 5) {
            return 'media-cell recuperacao'
        }

        return 'media-cell reprovado'
    }

    const alunos = bancoDados[turmaSelecionada] || []

    return (
        <main className="pagina_notas">
            <section className="card_notas">
                <h1>Lançamento de Notas</h1>

                <label htmlFor="turma">Selecione uma turma</label>
                <select
                    id="turma"
                    className="inputt"
                    value={turmaSelecionada}
                    onChange={(event) => setTurmaSelecionada(event.target.value)}
                >
                    <option value="">Selecione</option>
                    <option value="3A">3º Ano A</option>
                    <option value="3B">3º Ano B</option>
                    <option value="2A">2º Ano A</option>
                </select>

                <p className="status-nota">{status}</p>

                <div className="tabela_notas_container">
                    <table className="tabela_notas">
                        <thead>
                            <tr>
                                <th>Aluno</th>
                                {disciplinas.map((disciplina) => (
                                    <th key={disciplina}>{disciplina}</th>
                                ))}
                                <th>Média</th>
                            </tr>
                        </thead>

                        <tbody>
                            {alunos.length === 0 ? (
                                <tr>
                                    <td colSpan={disciplinas.length + 2} className="msg-turma">
                                        Selecione uma turma para carregar os alunos
                                    </td>
                                </tr>
                            ) : (
                                alunos.map((aluno) => (
                                    <tr key={aluno.id}>
                                        <td>
                                            <strong>{aluno.nome}</strong>
                                        </td>

                                        {disciplinas.map((disciplina) => (
                                            <td key={`${aluno.id}-${disciplina}`}>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    max="10"
                                                    step="0.1"
                                                    value={notas[aluno.id]?.[disciplina] || ''}
                                                    onChange={(event) =>
                                                        salvarNota(aluno.id, disciplina, event.target.value)
                                                    }
                                                />
                                            </td>
                                        ))}

                                        <td className={classeMedia(aluno.id)}>
                                            {calcularMedia(aluno.id)}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <button type="button" onClick={() => mudarPagina('professor')}>
                    Voltar
                </button>
            </section>
        </main>
    )
}

export default Notas