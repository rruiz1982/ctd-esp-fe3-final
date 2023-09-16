import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {state, dispatch} = useCharStates()
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const {name, phone, email, website} = state.medico

  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        dispatch({type: 'GET_MEDICO', payload: data})
        setLoading(false)
    })
}, [])

  return (
    <>
      <h1>Tarjeta del Dentista </h1>

      <div className="dentist-Information" style={{display:'flex', justifyContent:'center',margin:20}}>
        {loading ? 'Cargando...' : <>

        
            <h3 style={{margin:20}} >Name: {name}</h3>
            <h4 style={{margin:20}}>Telefono: {phone}</h4>
            <h4 style={{margin:20}}>Correo: {email}</h4>
            <h4 style={{margin:20}}>WEB: {website}</h4>
      
           
           
            
            
        </>}
    </div>


      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail