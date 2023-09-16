import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state}= useCharStates();

  const render = new Set()

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {/* {state.favs.map(fav => <Card  medico={fav} key={fav.id}/>)} */}

        {state.favs.map(fav => {
          if (!render.has(fav.id))
          {render.add(fav.id);
          return <Card medico={fav} key={fav.id}/>}
          return null
        })}
      </div>
    </>
  );
};

export default Favs;
