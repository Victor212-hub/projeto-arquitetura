function Coordenador ({ mudarPagina }) {
    return (
        <main>
            <h1>Tela do Coordenador</h1>

            <button type="button" onClick={() => mudarPagina('login')}>
                Sair
            </button>
            

        </main>

    )
}

export default Coordenador