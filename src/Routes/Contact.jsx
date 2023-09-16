import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contact">
      <h2>¿Quieres saber Mas?</h2>
      <p>Envianos tus datos y nos ponderemos en contacto contigo </p>
      <Form/>
    </div>
  )
}

export default Contact