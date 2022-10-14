export const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=151`;

export const OPTIONS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const TYPES = {
  NORMAL: "normal",
  FIGHTING: "fighting",
  FLYING: "flying",
  POISON: "poison",
  GROUND: "ground",
  ROCK: "rock",
  BUG: "bug",
  GHOST: "ghost",
  STEEL: "steel",
  FIRE: "fire",
  WATER: "water",
  GRASS: "grass",
  ELECTRIC: "electric",
  PSYCHIC: "psychic",
  ICE: "ice",
  DRAGON: "dragon",
  DARK: "dark",
  FAIRY: "fairy",
  UNKNOWN: "unknown",
  SHADOW: "shadow",
};

export function getTypeId( name ){
  if(name === 'normal') return 1
  if(name === 'fire') return 2
  if(name === 'water') return 3
  if(name === 'electric') return 4
  if(name === 'grass') return 5
  if(name === 'ice') return 6
  if(name === 'fighting') return 7
  if(name === 'poison') return 8
  if(name === 'ground') return 9
  if(name === 'flying') return 10
  if(name === 'psychic') return 11
  if(name === 'bug') return 12
  if(name === 'rock') return 13
  if(name === 'ghost') return 14
  if(name === 'dragon') return 15
  if(name === 'dark') return 16
  if(name === 'steel') return 17
  if(name === 'fairy') return 18
  if(name === 'unknown') return 10001
  if(name === 'shadow') return 10002
}

const SELECT_POKEMON = `SELECT 
MPokemon.id_poke, MPokemon.name_poke, MPokemon.weight_poke, MPokemon.height_poke, MPokemon.ability, MPokemon.img_poke, 
MStats.hp, MStats.atk, MStats.def, MStats.sp_atk, MStats.sp_def, MStats.speed
FROM MPokemon 
INNER JOIN MStats 
ON MPokemon.id_poke = MStats.id_poke
INNER JOIN Mtype
ON MPokemon.id_poke = Mtype.id_poke`;

export const querys = {
  selectPokemon: 'SELECT * FROM MPokemon',
  selectType: `SELECT MType.id_ctype, name_type FROM MType INNER JOIN CType ON MType.id_ctype = CType.id_ctype where id_poke = ?`,
  selectStats: 'SELECT * FROM MStats where id_poke = ?',
  selectPokemonById: `SELECT * FROM MPokemon WHERE id_poke = ?`,
  selectPokemonByName: `SELECT * FROM MPokemon WHERE name_poke like ?`,
  insertPokemon: `INSERT INTO MPokemon VALUES (?, ?, ?, ?, ?, ?)`,
  insertStats: `INSERT INTO MStats VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  insertTypes: `INSERT INTO MType VALUES (?, ?, ?)`,
  updatePokemons: `UPDATE MPokemon SET pokemonName = ?, image = ?, weight = ?, height = ?, abilitie = ?`,
  updateStats: `UPDATE MPokemon SET hp = ?, atk = ?, def = ?, sp_atk = ?, sp_def = ?, spd = ? WHERE id = ?`,
  updateType: `UPDATE MType SET id_poke = ?, id_Ctype= ? WHERE id = ?`,
};
