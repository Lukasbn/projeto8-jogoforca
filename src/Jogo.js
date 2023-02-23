import { useState } from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


export default function Jogo() {
    const [erro, setErro] = useState(0)
    const [imagem, setImagem] = useState(forca0)
    const [palavra, setPalavra] = useState([])

    function errou() {
        if (erro === 0) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca1)
        }
        if (erro === 1) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca2)
            setPalavra("batata")
        }
        if (erro === 2) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca3)
        }
        if (erro === 3) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca4)
        }
        if (erro === 4) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca5)
        }
        if (erro === 5) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca6)
        }
    }

    return (
        <div className="container">
            <div className="imagem">
                <img src={imagem} alt="imagem-forca" />
                <button onClick={errou}></button>
            </div>
            <div className="palavra">
                <button> Escolher Palavra </button>
                <div>{palavra}</div>
            </div>
        </div>
    )
}