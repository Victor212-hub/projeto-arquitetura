import Login from './pages/Login'
import { useState } from 'react'
import Coordenador from './pages/Coordenador'

function App() {
  const[paginaAtual, setPaginaAtual] = useState('login')
console.log('Página atual:', paginaAtual)
  if (paginaAtual === 'login') {
    return <Login mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'coordenador') {
    return <Coordenador mudarPagina={setPaginaAtual} />
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