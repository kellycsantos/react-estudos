import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login(){
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    const [msgErro, setErro] = useState(false)
    const erro = 'Digite seu nome de usuario'
    
    function handleLogin(event){
        //vai redirecionar o usuario 
        event.preventDefault()
        username.length > 0 ? navigate("/dashboard") : setErro(true)
    }
    return(
        <div style={{textAlign: 'center'}}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          { msgErro && <p  style={{color: 'red'}}> {erro}</p>}
            <button type="submit">Login</button> 

        </form>
        </div>
    )
}