import Login from './pages/Login'
import{ useState} from 'react'
import Login from './pages/Login'

function App() {
  const[paginalAtual, setPaginaAtual] = useState('login')

  if (paginaAtual === 'login') {
    return <Login mudarPagina={setPaginaAtual} />
  }

  if (paginalAtual === 'coordenador') {
    return <h1>Tela do Coordenador</h1>
  }

  if (paginaAtual === 'professor') {
    return <h1>Tela do Professor</h1>
  }

  if (paginaAtual === 'aluno') {
    return <h1>Tela do Aluno</h1>
  }

  return <Login mudarPagina={setPaginaAtual} />
  }


export default App