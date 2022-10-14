import PokemonCard from "./PokemonCard";

export default function ListOfPokemons({ pokemons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-10 justify-items-center m-auto w-4/5">
      {pokemons.map(
        ({ id_poke, name_poke, weight_poke, height_poke, ability, img_poke, types, stats }) => {
          return (
            <PokemonCard
              key={name_poke}
              id={id_poke}
              name={name_poke}
              weight={weight_poke}
              height={height_poke}
              abilities={ability}
              img={img_poke}
              types={types}
              stats={stats}
            />
          );
        }
      )}
    </div>
  );
}
