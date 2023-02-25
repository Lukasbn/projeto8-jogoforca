import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export default function Letras({letraDaPalavra,certas, setCertas, setJogoIniciado, jogoIniciado, setTentativa, tentativa, setErro, setImagem, erro, palavra, setPerdeu, setGanhou}){
    function clicouLetra(letra){
        setTentativa([...tentativa, letra])
        if(!palavra.includes(letra)){
            errou()
        }else if (palavra.includes(letra)){
            let novoArray = certas
            novoArray.push(letra)
            setCertas(novoArray)
            if(novoArray.length === letraDaPalavra.length){
                setGanhou(true)
                setJogoIniciado(false)
            }
        }
    }
    

    function errou() {
        const novoErro = erro + 1 
        setErro(novoErro)
        if (novoErro === 1) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca1)
        }
        else if (novoErro === 2) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca2)
        }
        else if (novoErro === 3) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca3)
        }
        else if (novoErro === 4) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca4)
        }
        else if (novoErro === 5) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca5)
        }
        else if (novoErro === 6) {
            const novoErro = erro + 1
            setErro(novoErro)
            setImagem(forca6)
            setJogoIniciado(false)
            setPerdeu(true)
            for (let index = 0; index < letraDaPalavra.length; index++) {
                setTentativa(alfabeto)
            }
        }
    }

    return(
        <div className="teclado">
            {alfabeto.map((letra) => <button data-test="letter" onClick={()=> clicouLetra(letra)} key={letra} disabled={!jogoIniciado || tentativa.includes(letra)} >{letra}</button>)}
        </div>
    )
}