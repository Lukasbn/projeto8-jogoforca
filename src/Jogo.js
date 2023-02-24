import palavras from "./palavras"

export default function Jogo({setJogoIniciado, tentativa, setErro, imagem, palavra, setPalavra}) {

    function iniciarJogo(){
        setJogoIniciado(true)
        setErro(0)
        const sorteado = Math.floor(Math.random() * (palavras.length - 1))
        const escolhido = (palavras[sorteado])
        const arrayDaPalavra = []
        for (let index = 0; index < escolhido.length; index++) {
            arrayDaPalavra.push(escolhido[index])
            console.log(arrayDaPalavra)
        }
        setPalavra(arrayDaPalavra)
        console.log('finalizou')
    }

    
    return (
        <div className="container">
            <div className="imagem">
                <img src={imagem} alt="imagem-forca" />
            </div>
            <div className="palavra">
                <button onClick={iniciarJogo}> Escolher Palavra </button>
                <div>
                    {palavra.map((letra,index)=> <div key={index}>{tentativa.includes(letra) ? letra : '_' }</div>)}
                </div>
            </div>
        </div>
    )
}