import { useState } from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import palavras from "./palavras"

export default function Jogo({setJogoIniciado}) {
    const [erro, setErro] = useState(0)
    const [imagem, setImagem] = useState(forca0)
    const [palavra, setPalavra] = useState([])

    function errou() {
        if (erro === 0) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca1)
        }
        else if (erro === 1) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca2)
            setPalavra("batata")
        }
        else if (erro === 2) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca3)
        }
        else if (erro === 3) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca4)
        }
        else if (erro === 4) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca5)
        }
        else if (erro === 5) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca6)
        }
    }

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
                    {palavra}
                    {palavra.map((letra,index)=> <div key={index}>_</div>)}
                </div>
            </div>
        </div>
    )
}