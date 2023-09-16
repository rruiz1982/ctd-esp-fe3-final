import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCharStates } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch} = useCharStates();

  const changeDark=() => { 
    dispatch({type: 'SWITCH_THEME'});
  }


  return (
    <nav >
    <button onClick={changeDark}>Cambiar Tema </button> 

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to='/'>Inicio</Link>
      <Link to='/favs'>Favoritos</Link>
      <Link to='/contact'>Contacto</Link>
      <img src="./images/DH.ico" alt='logo ticktok' />
    </div>
  </nav>
  )
}

export default Navbar