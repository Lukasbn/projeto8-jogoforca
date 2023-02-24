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
  return (

    <div>
      <Jogo setJogoIniciado={setJogoIniciado} tentativa={tentativa} setErro={setErro} imagem={imagem} palavra={palavra} setPalavra={setPalavra}/>

      <Letras setJogoIniciado={setJogoIniciado} jogoIniciado={jogoIniciado} tentativa={tentativa} setTentativa={setTentativa} setErro={setErro} setImagem={setImagem} erro={erro} palavra={palavra}/>
    </div>
  );
}
