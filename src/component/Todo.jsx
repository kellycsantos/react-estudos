import { useParams } from "react-router-dom"
export default function Todo(){
    const params = useParams()
 console.log(params)
    return(
        <div>
         <h1>Parametros</h1>
        </div>
    )
}