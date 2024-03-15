import { useContext } from "react"
import { MeuContexto } from "../contexts/MeuContexto"
export default function Filho2(){
    const {mensagem , setMensagem} = useContext(MeuContexto)
    return(
        <>
        <hr/>
        <h2>Filho 2</h2>
        <p>Exibindo mensagem novamente: {mensagem}</p>
        <button onClick={() => setMensagem('Mensagem alterada com sucesso')}>Alterar contexto</button>
        </>
    )
}