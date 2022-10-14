import { pool } from '../../../../config/db';
import { querys } from '../../../../util/const';

const {selectPokemonById, updatePokemons, updateStats, updateType} = querys;

export default async function handler(req, res) {

    res.status(400).json({message: 'Debes de especifcar tu busqueda'});
}