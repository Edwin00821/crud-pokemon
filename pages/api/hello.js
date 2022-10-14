import { pool } from '../../config/db.js';
// import { getSession } from 'next-auth/client';
// import { query } from 'express';

export default async function handler (req, res) {

  const [ rows ] = await pool.query('SELECT NOW()');

  res.status(200).json(rows[0]['NOW()']);

  // const session = await getSession({ req });
  // if (session) {
  //   const { id } = req.query;
  //   const { name, type, image } = req.body;
  //   const query = `
  //     UPDATE pokemons
  //     SET name = ?, type = ?, image = ?
  //     WHERE id = ?
  //   `;
  //   const data = await pool.query(query, [name, type, image, id]);
  //   res.status(200).json(data);
  // }
  // res.status(401).json({ message: 'Unauthorized' });
};
