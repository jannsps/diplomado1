import React from 'react'

const Listas = () => {
    const arrayinicial=['Elemento 1','Elemento 2','Elemento 3']
    const objeto=[
        {id:1,texto:'Elemento A'},
        {id:2,texto:'Elemento B'},
        {id:3,texto:'Elemento C'}
    ]
    const [listado,setlistado]=React.useState(objeto)
    const [lista,setlista]=React.useState(arrayinicial)

  return (
    <div>
        <h1>Listas</h1>
        <ul>
        {
            lista.map((item,index)=>(<li key={index}>{item}</li>))
        }
        </ul>
        <ol type='I'>
            {
            listado.map((elemento)=>(<li key={elemento.id}>{elemento.id} - {elemento.texto}</li>))
            }
        </ol>
    </div>
  )
}

export default Listas