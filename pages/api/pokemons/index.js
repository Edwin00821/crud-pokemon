import { pool } from "../../../config/db";
import { querys, getTypeId } from "../../../util/const";

const {
  selectPokemon,
  insertPokemon,
  insertStats,
  insertTypes,
  selectType,
  selectStats,
} = querys;

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getPokemons(req, res);
    case "POST":
      return await createPokemon(req, res);
    case "PUT":
      return await updatePokemon(req, res);
    case "DELETE":
      return await deletePokemon(req, res);
    default:
      return res.status(405).json({ message: "Bad request" });
  }
}

async function getPokemons(req, res) {
  const RESPONSE_POKE = await pool.query(selectPokemon);
  const POKES = await RESPONSE_POKE[0].map(async (pokemon) => {
    const { id_poke } = await pokemon;

    const RESPONSE_TYPE = await pool.query(selectType, [id_poke]);
    const RESPONSE_STATS = await pool.query(selectStats, [id_poke]);
    const { hp, atk, def, sp_atk, sp_def, speed } = await RESPONSE_STATS[0][0];

    return await {
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

  // const DATA_POKES = await Promise.all(POKES);

  res.status(200).json(DATA_POKES);
}

async function createPokemon(req, res) {
  const {
    idPoke,
    namePoke,
    weight,
    height,
    abilities,
    imagePoke,
    stats: [
      { hp },
      { ["attack"]: atk },
      { ["defense"]: def },
      { ["special-attack"]: sp_atk },
      { ["special-defense"]: sp_def },
      { ["speed"]: spd },
    ],
    types,
  } = await req.body;

  const data = await pool.query(insertPokemon, [
    idPoke,
    namePoke,
    weight,
    height,
    abilities,
    imagePoke,
  ]);

  const data1 = await pool.query(insertStats, [
    null,
    idPoke,
    hp,
    atk,
    def,
    sp_atk,
    sp_def,
    spd,
  ]);

  const data2 = await types.map(async ({ type:{name} }, i) => {
    await pool.query(insertTypes, [null, idPoke, getTypeId(name)]);
  });

  res.status(200).json({ HolaMundo: "HolaMundo" });
}

async function updatePokemon(req, res) {
  const { id } = req.query;
  const { name, type, image } = req.body;
  const query = `
        UPDATE pokemons
        SET name = ?, type = ?, image = ?
        WHERE id = ?
    `;
  const data = await pool.query(query, [name, type, image, id]);
  res.status(200).json(data);
}

async function deletePokemon(req, res) {
  const { id } = req.query;
  const query = `
        DELETE FROM pokemons
        WHERE id = ?
    `;
  const data = await pool.query(query, [id]);
  res.status(200).json(data);
}
