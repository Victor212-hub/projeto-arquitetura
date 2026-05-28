import logo from '../assets/logo.png.png';
import '../styles/login.css';

function Login({ mudarPagina}) {
  return (
    <main>
      <div className="area_login">

        <div className="card_login">
          <img src={logo} alt="Logo do Sistema de Matrícula" className="logo" />

          <h2>Acesso ao sistema</h2>

          {/* CONTROLES (abas) */}
          <input type="radio" name="perfil" id="coord" defaultChecked />
          <input type="radio" name="perfil" id="prof" />
          <input type="radio" name="perfil" id="aluno" />

          <div className="tabs">
            <label htmlFor="coord">Coordenador</label>
            <label htmlFor="prof">Professor</label>
            <label htmlFor="aluno">Aluno</label>
          </div>

          {/* FORMULÁRIOS */}

          <div className="formularios">

            {/* Coordenador */}
            <form className="form coord">
              <input className="inputt" type="email" placeholder="Email institucional 📩" required />
              <input className="inputt" type="password" placeholder="Senha 🔐" required />
              <button className="botao" type="button" onClick={() => mudarPagina('coordenador')}>Entrar</button>
            </form>

            {/* Professor */}
            <form className="form prof">
              <input className="inputt" type="email" placeholder="Email 📩" required />
              <input className="inputt" type="password" placeholder="Senha 🔐" required />
              <button type = "button" onClick={() =>mudarPagina ('professor')} className="botao">Entrar</button>
            </form>

            {/* Aluno */}
            <form className="form aluno">
              <input className="inputt" type="number" placeholder="Matrícula 📄" required />
              <input className="inputt" type="password" placeholder="Senha 🔐" required />
              <button type = "button" onClick={() =>mudarPagina ('aluno')} className="botao">Entrar</button>
            </form>

          </div>

        </div>

      </div>

      <footer>
        <p>&copy; 2026 Sistema de Matrícula Escolar</p>
      </footer>
    </main>
  )
}
export default Login