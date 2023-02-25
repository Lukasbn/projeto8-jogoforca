import palavras from "./palavras"
import forca0 from "./assets/forca0.png"

export default function Jogo({setCertas, letraDaPalavra, setGanhou, setPerdeu, setImagem, setTentativa, setLetraDaPalavra, ganhou, perdeu, setJogoIniciado, tentativa, setErro, imagem, palavra, setPalavra}) {

    function iniciarJogo(){
        setJogoIniciado(true)
        setErro(0)
        setTentativa([])
        setImagem(forca0)
        setPerdeu(false)
        setGanhou(false)
        setCertas([])
        const sorteado = Math.floor(Math.random() * (palavras.length - 1))
        const escolhido = (palavras[sorteado])
        const arrayDaPalavra = []
        const letrasPalavra = []
        for (let index = 0; index < escolhido.length; index++) {
            arrayDaPalavra.push(escolhido[index])
            if(!letrasPalavra.includes(escolhido[index])){
                letrasPalavra.push(escolhido[index])
            }
            
        }
        setLetraDaPalavra(letrasPalavra)
        setPalavra(arrayDaPalavra)
    }
    
    const avaliar = [ganhou ? "ganhou" : ""]
    
    return (
        <div className="container">
            <div className="imagem">
                <img data-test="game-image" src={imagem} alt="imagem-forca" />
            </div>
            <div className="palavra">
                <button data-test="choose-word" onClick={iniciarJogo}> Escolher Palavra </button>
                <div data-test="word">
                    {palavra.map((letra,index)=> <div key={index} className={perdeu ? "perdeu" : avaliar} >{tentativa.includes(letra) ? letra : '_' }</div>)}
                </div>
            </div>
        </div>
    )
}