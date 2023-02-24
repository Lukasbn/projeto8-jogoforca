const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({jogoIniciado}){
    return(
        <div className="teclado">
            {alfabeto.map((letra) => <button onClick={()=> console.log(`${letra}`)} key={letra} disabled={!jogoIniciado} >{letra}</button>)}
        </div>
    )
}