import { useReducer } from "react";

const estadoInicial = { contador: 0 };
//função reducer
function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };

    case "decrementar":
      return { contador: estado.contador > 0 ? estado.contador - 1 : estado.contador = 0};
    case "zerar":
      return { contador: (estado.contador = 0) };
    default:
        console.log('Ação não encontrada')  
  }
}

export default function Reducer() {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);
  return (
    <>
      <h2>Reducer</h2>
      <p>{estado.contador} </p>
      <button onClick={() => dispatch({ tipo: "incrementar" })}>
        Adicionar
      </button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>Remover</button>
      <button onClick={() => dispatch({ tipo: "zerar" })}>Excluir tudo</button>
    </>
  );
}
