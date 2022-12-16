import pool from '../db.js';

const addPost = async (req, res, next) => {
  const user_id = req.user.id;
  const { title, description } = req.body;
  const result = await pool.query(
    'insert into post (user_id, title, description) values($1, $2, $3) returning *',
    [user_id, title, description]
  );
  res.json(result.rows[0]);
};

const getPosts = async (req, res, next) => {
  const result = await pool.query('select * from post');
  res.json(result.rows);
};

export { addPost, getPosts };
