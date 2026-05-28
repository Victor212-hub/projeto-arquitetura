import Login from './pages/Login'
import { useState } from 'react'
import Coordenador from './pages/Coordenador'
import CriarAluno from './pages/CriarAluno'
import CriarProfessor from './pages/CriarProfessor'
import Turmas from './pages/Turmas'

function App() {
  const[paginaAtual, setPaginaAtual] = useState('login')

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
  

  if (paginaAtual === 'criarAluno') {
  return <CriarAluno mudarPagina={setPaginaAtual} />
}

if (paginaAtual === 'criarProfessor') {
  return <CriarProfessor mudarPagina={setPaginaAtual} />
}

if (paginaAtual === 'turmas') {
  return <Turmas mudarPagina={setPaginaAtual} />
}
}
export default App