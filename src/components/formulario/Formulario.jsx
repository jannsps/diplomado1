import React,{useState} from 'react'

const Formulario = () => {
    const [nombre,setNombre]=useState('')
    const [apellido,setApellido]=useState('')
    const [lista,setLista]=useState([])
    const guardarDatos=(e)=>{
        e.preventDefault()
        //validaciones
        if (!nombre.trim()) {
            alert('Ingrese Nombre')
            return
        }
        if (!apellido.trim()) {
            alert('Ingrese Apellido')
            return
        }
         //console.log(nombre + apellido)
        //guardar lista
       setLista([
        ...lista,
        {nombre,apellido}
       ]
        )
        //limpiar inputs
        e.target.reset()
        //limpiar estados
        setNombre('')
        setApellido('')

    }
  return (
    <div className='container'>
        <form onSubmit={guardarDatos}>
            <input type="text"
            placeholder='Ingrese Nombre'
            className='form-control mb-3 mt-3'
            onChange={(e)=>setNombre(e.target.value)}
            />
            <input type="text"
            placeholder='Ingrese Apellido'
            className='form-control mb-3'
            onChange={(e)=>setApellido(e.target.value)}
            />
            <div className='d-grid gap-2'>
            <button className='btn btn-outline-dark' 
            type='submit'>Registrar</button>
            </div>
            
        </form>
        <hr />
        <ul>
            {
                 lista.map((elemento,index)=>(<li key={index}>{elemento.nombre} - {elemento.apellido}</li>))
            }
        </ul>
    </div>
  )
}

export default Formulario