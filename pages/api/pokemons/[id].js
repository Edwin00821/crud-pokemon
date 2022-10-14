import { pool } from "../../../config/db";
import { querys } from "../../../util/const";

const { selectType, selectStats, selectPokemonById, updatePokemons, updateStats, updateType } = querys;

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getPokemonbyId(req, res);
    case "PUT":
      return updatePokemon(req, res);
    case "DELETE":
      return deletePokemon(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getPokemonbyId = async (req, res) => {
  const { id } = req.query;
  const RESPONSE_POKE = await pool.query(selectPokemonById, [id]);

  const POKES = RESPONSE_POKE[0].map(async (pokemon) => {
    const { id_poke } = pokemon;

    const RESPONSE_TYPE = await pool.query(selectType, [id_poke]);
    const RESPONSE_STATS = await pool.query(selectStats, [id_poke]);
    const { hp, atk, def, sp_atk, sp_def, speed } = RESPONSE_STATS[0][0];

    return {
      ...pokemon,
      types: RESPONSE_TYPE[0],
      stats: [
        { id: 1, name: "hp", base_stat: hp },
        { id: 2, name: "attack", base_stat: atk },
        { id: 3, name: "defense", base_stat: def },
        { id: 4, name: "special-attack", base_stat: sp_atk },
        { id: 5, name: "special-defense", base_stat: sp_def },
        { id: 6, name: "speed", base_stat: speed },
      ],
    };
  });

  const DATA_POKES = await Promise.all(POKES);

  res.status(200).json(DATA_POKES);
};

const updatePokemon = async (req, res) => {
  const { id } = req.query;
  const {
    pokemonName,
    image,
    weight,
    height,
    abilitie,
    hp,
    atk,
    def,
    sp_atk,
    sp_def,
    spd,
  } = req.body;
  const [pokemon] = await pool.query(updatePokemons, [
    pokemonName,
    image,
    weight,
    height,
    abilitie,
  ]);
  return res.status(200).json(pokemon);
};

const deletePokemon = async (req, res) => {
  const { id } = req.query;
  const [pokemon] = await pool.query("DELETE FROM pokemons WHERE id = ?", [id]);
  return res.status(200).json(pokemon);
};
