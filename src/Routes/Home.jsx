import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useCharStates()

  return (
    <main className="" >
    <h1>Home</h1>
      <div className="card-grid container">
        {state.medicos.map(medico => <Card medico={medico} key={medico.id}/>)}
      </div>
      </main>
  )
}

export default Home