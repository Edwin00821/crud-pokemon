import React from "react";
import { getPokemonBgColor } from "./../util/getPokemonColor";

export default function PokemonElement({ types }) {
  return (
    <div className="flex justify-center">
      {types.map((type) => {
        const { id_ctype, name_type, } = type;

        return (
          <p
            key={id_ctype}
            className={`${getPokemonBgColor(name_type)} m-1 p-1 px-3 rounded-2xl text-white text-xs font-bold mx-3 first-letter:uppercase`}>
            {name_type}
          </p>
        );
      })}
    </div>
  );
}
