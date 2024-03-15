import { useEffect, useState } from "react"
export default function useEf(){
    let [produtos, setProdutos] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            setProdutos(data)
            console.log(data)})
    },[])
    return(
        <>
            <ul>
               {produtos?.map((produto,index) => <li key={index}>{produto.title}</li>)}
            </ul>
        </>
    )
}