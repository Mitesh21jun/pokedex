import React from "react";

const Pokemon = (props) => {
    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;

    return( <div>
      <h1>`This is a Pokemon page for pokemon #${pokemonId}.`</h1>
        
  </div>)
};
export default Pokemon;