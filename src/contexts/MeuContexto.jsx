import { useState, createContext } from "react"; 
export const MeuContexto = createContext() // criando contexto

// exportando contexto 
// o children vai permitir adicionar componentes dentro nosso context
export const MeuContextoProvider = ({ children}) => {  
    // Podemos ter um ou mais states
    const [mensagem, setMensagem] = useState('Mensagem inicial')
    const [user, setUser] = useState('Anonimo')
   
    // Vamos unir todas as informações aqui dentro do obj
    const valorDoContexto = {
        mensagem,
        setMensagem,
        user,
        setUser
    }
   
    //Todos os componentes dentro do provider, poderão receber as informações criadas
    return (
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    )
}