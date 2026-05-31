import { useState } from 'react'
import Login from './pages/Login'
import Coordenador from './pages/Coordenador'
import CriarAluno from './pages/CriarAluno'
import CriarProfessor from './pages/CriarProfessor'
import CriarTurma from './pages/CriarTurma'
import Professor from './pages/Professor'
import Aluno from './pages/Aluno'
import PerfilAluno from './pages/PerfilAluno'
import BoletimAluno from './pages/BoletimAluno'
import Notas from './pages/Notas'
import CriarAtividade from './pages/CriarAtividade'


function App() {
  const [paginaAtual, setPaginaAtual] = useState('login')

  if (paginaAtual === 'login') {
    return <Login mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'coordenador') {
    return <Coordenador mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'criarAluno') {
    return <CriarAluno mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'criarProfessor') {
    return <CriarProfessor mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'criarTurma') {
    return <CriarTurma mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'professor') {
    return <Professor mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'aluno') {
    return <Aluno mudarPagina={setPaginaAtual}/>
  }

  if (paginaAtual === 'perfilAluno'){
    return <PerfilAluno mudarPagina={setPaginaAtual}/>  
  }

  if (paginaAtual === 'boletimAluno'){
    return <BoletimAluno mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'notas') {
    return <Notas mudarPagina={setPaginaAtual} />
  }

  if (paginaAtual === 'criarAtividade') {
    return <CriarAtividade mudarPagina={setPaginaAtual} />
  }

  return <Login mudarPagina={setPaginaAtual} />
}

export default App