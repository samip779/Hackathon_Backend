import pkg from 'pg';
const {Pool} = pkg;

import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// const text = 'INSERT INTO users(username, email, password, usertype, photo ) VALUES($1, $2, $3, $4, $5) RETURNING *'
// const values = ['brianc', 'brian.m.carlson@gmail.com', 'test', 'employer', 'test.jpg']

// // callback
// pool.query(text, values, (err, res) => {
//     if (err) {
//         console.log(err.stack)
//     } else {
//         console.log(res.rows[0])
//         // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//     }
// })

export default pool;
