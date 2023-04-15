import React,{useState} from 'react'

const Estados = () => {
    //const texto='Texto inicial'
    const [texto,setTexto]=useState('Texto inicial desde estado')
    const click=()=>{
        setTexto('Texto modificado desde metodo settexto')
        //texto='Texto modificado'
    }
  return (
    <div>
        <p>Estados</p>
       <p>{texto}</p> 
        <button onClick={()=>click()}>Cambiar texto</button>
    </div>
  )
}

export default Estados