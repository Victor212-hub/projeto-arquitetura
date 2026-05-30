import { useState } from 'react'
import logo from '../assets/logo.png.png'
import '../styles/login.css'
import { loginUsuario } from '../services/authService'

function Login({ mudarPagina }) {
  const [coordLogin, setCoordLogin] = useState('')
  const [coordSenha, setCoordSenha] = useState('')

  const [profLogin, setProfLogin] = useState('')
  const [profSenha, setProfSenha] = useState('')

  const [alunoLogin, setAlunoLogin] = useState('')
  const [alunoSenha, setAlunoSenha] = useState('')

  const [erro, setErro] = useState('')

  function fazerLogin(perfil) {
    setErro('')

    let login = ''
    let senha = ''

    if (perfil === 'coordenador') {
      login = coordLogin
      senha = coordSenha
    }

    if (perfil === 'professor') {
      login = profLogin
      senha = profSenha
    }

    if (perfil === 'aluno') {
      login = alunoLogin
      senha = alunoSenha
    }

    if (!login.trim() || !senha.trim()) {
      setErro('Preencha todos os campos.')
      return
    }

    const usuario = loginUsuario(login.trim(), senha.trim(), perfil)

    if (!usuario) {
      setErro('Login ou senha incorretos.')
      return
    }

    mudarPagina(perfil)
  }

  return (
    <main>
      <div className="area_login">
        <div className="card_login">
          <img src={logo} alt="Logo do Sistema de Matrícula" className="logo" />

          <h2>Acesso ao sistema</h2>

          <input type="radio" name="perfil" id="coord" defaultChecked />
          <input type="radio" name="perfil" id="prof" />
          <input type="radio" name="perfil" id="aluno" />

          <div className="tabs">
            <label htmlFor="coord">Coordenador</label>
            <label htmlFor="prof">Professor</label>
            <label htmlFor="aluno">Aluno</label>
          </div>

          <div className="formularios">
            <form className="form coord">
              <input
                className="inputt"
                type="email"
                placeholder="Email institucional 📩"
                required
                value={coordLogin}
                onChange={(event) => setCoordLogin(event.target.value)}
              />

              <input
                className="inputt"
                type="password"
                placeholder="Senha 🔐"
                required
                value={coordSenha}
                onChange={(event) => setCoordSenha(event.target.value)}
              />

              <button
                className="botao"
                type="button"
                onClick={() => fazerLogin('coordenador')}
              >
                Entrar
              </button>
            </form>

            <form className="form prof">
              <input
                className="inputt"
                type="email"
                placeholder="Email 📩"
                required
                value={profLogin}
                onChange={(event) => setProfLogin(event.target.value)}
              />

              <input
                className="inputt"
                type="password"
                placeholder="Senha 🔐"
                required
                value={profSenha}
                onChange={(event) => setProfSenha(event.target.value)}
              />

              <button
                type="button"
                onClick={() => fazerLogin('professor')}
                className="botao"
              >
                Entrar
              </button>
            </form>

            <form className="form aluno">
              <input
                className="inputt"
                type="number"
                placeholder="Matrícula 📄"
                required
                value={alunoLogin}
                onChange={(event) => setAlunoLogin(event.target.value)}
              />

              <input
                className="inputt"
                type="password"
                placeholder="Senha 🔐"
                required
                value={alunoSenha}
                onChange={(event) => setAlunoSenha(event.target.value)}
              />

              <button
                type="button"
                onClick={() => fazerLogin('aluno')}
                className="botao"
              >
                Entrar
              </button>
            </form>
          </div>

          {erro && <p className="msg_erro">{erro}</p>}
        </div>
      </div>

      <footer>
        <p>&copy; 2026 Sistema de Matrícula Escolar</p>
      </footer>
    </main>
  )
}

export default Login