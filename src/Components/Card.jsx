import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/global.context";

const Card = ({medico}) => {

  // const addFav = ()=>{
  //   // Aqui iria la logica para agregar la Card en el localStorage
  // }
    


    
   const {dispatch} = useCharStates()
      const addFav = ()=>{
        // Aqui iria la logica para agregar la Card en el localStorage
          dispatch({type: 'ADD_FAV', payload: medico})
      }

  
    // const addFav = () => {
    //   dispatch({type: 'ADD_FAV', payload: medico.id})
    //   // setFavs({...favs, [medico.id]:true})
    //   localStorage.setItem('favs', JSON.stringify({ ...favs, [medico.id]: true }))
    // }
    // const addFav = () => {   setFavs([...favs, medico])    }

  return (
    // <div className="card">
    //     {/* En cada card deberan mostrar en name - username y el id */}

    //     {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

    //     {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    //     <button onClick={addFav} className="favButton">Add fav</button>
    // </div>

    
    <div className="card">

      <img  className="card-img-top" src="/images/doctor.jpg" alt="imagenDoctor" style={{ width: "100%" }}/>
      <div>
        <Link to={'/dentista/' + medico.id}>
        <h3>{medico.name}</h3>
        <h4>{medico.username}</h4>
        <h4>{medico.id}</h4>
        
      </Link>
      <button onClick={addFav}>⭐</button> 
       </div>
       </div>
  );
};

export default Card;
