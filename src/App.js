import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState} from "react";

export default function App() {
  const [jogoIniciado, setJogoIniciado] = useState(false)
  return (

    <div>
      <Jogo setJogoIniciado={setJogoIniciado}/>

      <Letras jogoIniciado={jogoIniciado} />
    </div>
  );
}
