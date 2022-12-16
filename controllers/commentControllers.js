import pool from '../db.js';

const addComment = async (req, res, next) => {
  const user_id = req.user.id;
  const post_id = req.params.post_id;
  const { content } = req.body;
  const result = await pool.query(
    'insert into comment (user_id, post_id, content) values ($1, $2, $3) returning *',
    [user_id, post_id, content]
  );
  res.json(result.rows[0]);
};

const getComments = async (req, res, next) => {
  const post_id = req.params.post_id;
  const result = await pool.query('select * from comment where post_id = $1', [
    post_id,
  ]);
  res.json(result.rows);
};

export { addComment, getComments };
