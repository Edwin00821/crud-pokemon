import { createPool } from 'mysql2/promise';

export const PORT = process.env.PORT || 3000;

export const pool = createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Yonosoyuriel1',
    database: process.env.DB_NAME || 'DBPokemons',
    port: process.env.DB_PORT || 3306,
});