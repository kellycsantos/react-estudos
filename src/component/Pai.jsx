import Filho from "./Filho"
import Filho2 from "./Filho2"
import { MeuContextoProvider } from "../contexts/MeuContexto"
export default function Pai(){
    return(
        <>
        <h1>Pai</h1>
        <MeuContextoProvider>
            <Filho/>
            <Filho2/>
        </MeuContextoProvider>
        </>
    )
}