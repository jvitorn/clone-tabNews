function Home() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
    };
    return <>
        <div style={containerStyle}>
            <h1>Olá, Devs!</h1>
            <p>
                Se você chegou até aqui, saiba que é uma pessoa fantástica. Não desista, pois você está no caminho para se tornar uma pessoa e um profissional cada vez mais incrível. Mesmo que a 'Síndrome do Impostor' apareça em algum momento, lembre-se da sua jornada e dos passos que você percorreu e continua a percorrer diariamente. Continue acreditando em si mesmo!
            </p>
            <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM14c-Guv938uehyMw2TW6WX33t7vfxrnYg&s" alt="Imagem Motivacional" style={imgStyle} />
                <figcaption>Continue acreditando em si mesmo!</figcaption>
            </figure>
        </div>
    </>
}

export default Home;