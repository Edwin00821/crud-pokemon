import { apiURL, OPTIONS } from "../util/const.js";
import axios from "axios";

export async function getPokemonData() {
  console.log("Llamando a la API");
  return fetch(apiURL, OPTIONS)
    .then((res) => res.json())
    .then((response) => {
      const { results = [] } = response;
      if (Array.isArray(results)) {
        return Promise.all(
          results.map(async ({ url }) => await getPokemonDataById(url))
        );
      }
    })
    .catch((error) => console.error(error));
}

async function getPokemonDataById(url) {
  return fetch(url, OPTIONS)
    .then((res) => res.json())
    .then(async (response) => {
      const idPoke = response.id;
      const namePoke = response.name;
      const {
        weight,
        height,
        abilities,
        sprites: {
          other,
        },
        stats,
        types,
      } = response;
      const s = stats.map((obj) => ({
        [obj.stat.name]: obj.base_stat,
      }));
      const t = types.map(({ type }) => type.name);     
      const product = {
        idPoke,
        namePoke,
        weight,
        height,
        abilities: abilities[0].ability.name,
        imagePoke: other["official-artwork"].front_default,
        stats: s,
        types: types,
      };
      // console.log(product);
      // await axios.post("/api/pokemons/", product);

      return product;
    });
}
