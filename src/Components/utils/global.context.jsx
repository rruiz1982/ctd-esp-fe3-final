import { createContext, useReducer, useState, useContext, useEffect} from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'

//  const initialState = {theme: "", data: []}
 const CharStates = createContext();

 const reducer = (state, action) => {

  switch (action.type) {
    case 'GET_MEDICOS': 
      return {...state, medicos: action.payload}
    case 'GET_MEDICO':
      return {...state, medico: action.payload}
    case 'ADD_FAV':
      return {...state, favs: [...state.favs, action.payload]}
      case 'SWITCH_THEME':
        return{...state, theme: !state.theme}
    default: 
    throw new Error()
      
     
  }


 }

const localFavs = JSON.parse(localStorage.getItem('favs'));
const initiaFavState = localFavs ? localFavs : [] 

const initialStates = {
  medicos: [], 
  medico: {},
  favs: initiaFavState,
  theme: true,
}

 const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates)
  

  const url='https://jsonplaceholder.typicode.com/users/'
  

    useEffect(()=> {
      axios(url)
      .then(res =>{console.log(res.data)
        
        dispatch({type: 'GET_MEDICOS', payload: res.data})})
      .catch(err => console(err))
    },[])

    useEffect(()=> {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])



  return (
    <CharStates.Provider value={{dispatch, state }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context

export const useCharStates = () => useContext(CharStates)