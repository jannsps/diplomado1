import React from 'react'

const Contador = () => {
    const [contador,setContador]=React.useState(0)
    const sumar=()=>setContador(contador+1)
    const restar=()=>setContador(contador-1)
  return (
    <div>
        <p>Contador</p>
        <h2>Contador: {contador}</h2>
        <h3>
            {
                contador%2===0 ? 'Es par' : 'Es Impar'
            }
        </h3>
        <button onClick={()=>sumar()}>+</button>
        <button onClick={()=>restar()}>-</button>

    </div>
  )
}

export default Contador