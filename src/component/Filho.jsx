import { useContext } from "react"
import useWindowSize from "../hooks/useWindowSize"
import { MeuContexto } from "../contexts/MeuContexto"


export default function Filho(){
    const {width, height} = useWindowSize()
    const {mensagem} = useContext(MeuContexto) // mensagem foi desertruturado do meuContexto
    const {user, setUser} = useContext(MeuContexto)
    return(
        <div>
            <h2>Filho</h2>
            <p>O valor do contexto é : {mensagem}</p>
            <p>Usuario {user}</p>
            <button onClick={() => setUser('João')}>Alterar user</button>
            <hr />
            <p> A largura é igual  : {width}</p>
            <p> A Altura é igual  : {height}</p>
        </div>
    )
}