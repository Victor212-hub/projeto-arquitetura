import '../styles/criarAluno.css'
import '../styles/criarAluno.css'

function CriarAluno({ mudarPagina }) {
  return (
    <main>
    
    <div className="container_aluno">

        <div className="caixa_aluno">
            <h2>Cadastrar Aluno</h2>

            <input className="inputt" type="text" placeholder="Digite o nome do aluno 👤"/>
            <input className="inputt" type="date"/>
            <input className="inputt" type="number" placeholder="CPF 🧾"/>
            <input className="inputt" type="text" placeholder="Cep 00000-000 📮"/>
            <input className="inputt" type="text" placeholder="Bairro 🏘️"/>
            <input className="inputt" type="number" placeholder="Número 🏠"/>
            <input className="inputt" type="number" placeholder="Gerar matrícula 📄"/>

            <button className="botao"
             type="button" 
             onClick={() => alert('Aluno cadastrado com sucesso!')}>
              Criar matrícula
              </button>

              <button className="botao"
             type="button" 
             onClick={() => alert('Aluno cadastrado com sucesso!')}>
              Voltar
              </button>




        </div>

    </div>

    <footer>
        <p>&copy; 2026 Sistema de Matrícula Escolar. Todos os direitos reservados.</p>
    </footer>

      <button type="button" onClick={() => mudarPagina('coordenador')}>
        Voltar
      </button>
    </main>
  )
}

export default CriarAluno