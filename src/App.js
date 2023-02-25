import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState} from "react";
import forca0 from "./assets/forca0.png"

export default function App() {
  const [jogoIniciado, setJogoIniciado] = useState(false)
  const [tentativa, setTentativa] = useState([])
  const [erro, setErro] = useState(0)
  const [imagem, setImagem] = useState(forca0)
  const [palavra, setPalavra] = useState([])
  const [perdeu, setPerdeu] = useState(false)
  const [ganhou, setGanhou] = useState(false)
  const [certas, setCertas] = useState([])
  const [letraDaPalavra, setLetraDaPalavra] = useState([])

  return (

    <div>
      <Jogo letraDaPalavra={letraDaPalavra} setCertas={setCertas}setTentativa={setTentativa} setLetraDaPalavra={setLetraDaPalavra} setGanhou={setGanhou} setPerdeu={setPerdeu} perdeu={perdeu} ganhou={ganhou} setJogoIniciado={setJogoIniciado} tentativa={tentativa} setErro={setErro} imagem={imagem} palavra={palavra} setPalavra={setPalavra} setImagem={setImagem}/>

      <Letras letraDaPalavra={letraDaPalavra} certas={certas} setCertas={setCertas} setGanhou={setGanhou} setPerdeu={setPerdeu} setJogoIniciado={setJogoIniciado} jogoIniciado={jogoIniciado} tentativa={tentativa} setTentativa={setTentativa} setErro={setErro} setImagem={setImagem} erro={erro} palavra={palavra}/>
    </div>
  );
}
