import { useState, useMemo, useEffect  } from "react"
export default function User({nome, status}){
    let [users, setUsers] = useState([])
    function getUsers(){
        fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.users)
            console.log(data.users)
        })
    }

    useEffect(() =>{
        getUsers()
    },[])

    return(
        <>
        <p>{nome ? nome : 'Anonimo'}</p>
        <p>{status && status }</p>
        <ul> 
            { users.length > 0 ? 
           users.map((user) => <li key={user.id}>{user.firstName} {user.lastName}</li>) : <p>carregando...</p>}
        </ul>
        <button onClick={getUsers}>Get</button>
        </>
    )
}