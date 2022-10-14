import { pool } from "../../../../config/db";
import { querys } from "../../../../util/const";

const { selectPokemonByName } = querys;

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getPokemon(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getPokemon = async (req, res) => {
  let { query = "" } = req.query;
  if (query.lenght === 0) {
    res.status(400).json({ message: "Debes de especifcar tu busqueda" });
  }
  query = query.toString().toLowerCase().trim();
  const newQuery = `%${query}%`;
  const [pokemon] = await pool.query(selectPokemonByName, [newQuery]);
  return res.status(200).json(pokemon);
};
