import { usuariosIniciais } from '../data/seedData'

const CHAVE_USUARIOS = 'usuarios'
const CHAVE_USUARIO_LOGADO = 'usuarioLogado'

export function iniciarBanco() {
  const usuariosSalvos = localStorage.getItem(CHAVE_USUARIOS)

  if (!usuariosSalvos) {
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuariosIniciais))
  }
}

export function listarUsuarios() {
  iniciarBanco()
  return JSON.parse(localStorage.getItem(CHAVE_USUARIOS)) || []
}

export function loginUsuario(login, senha, perfil) {
  const usuarios = listarUsuarios()

  const usuarioEncontrado = usuarios.find(
    (usuario) =>
      String(usuario.login).trim() === String(login).trim() &&
      String(usuario.senha).trim() === String(senha).trim() &&
      String(usuario.perfil).trim() === String(perfil).trim()
  )

  if (!usuarioEncontrado) {
    return null
  }

  localStorage.setItem(CHAVE_USUARIO_LOGADO, JSON.stringify(usuarioEncontrado))
  return usuarioEncontrado
}

export function obterUsuarioLogado() {
  const usuario = localStorage.getItem(CHAVE_USUARIO_LOGADO)

  if (!usuario) {
    return null
  }

  return JSON.parse(usuario)
}

export function logoutUsuario() {
  localStorage.removeItem(CHAVE_USUARIO_LOGADO)
}