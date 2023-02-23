import Jogo from "./Jogo";
import Letras from "./Letras";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {
  return (

    <div>
      <Jogo />

      <Letras />
    </div>
  );
}
