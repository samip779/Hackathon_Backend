import pool from '../db.js';

const addJob = async (req, res, next) => {
  const user = req.user;
  const { title, description, price } = req.body;
  const result = await pool.query(
    'insert into offer (user_id,title,description,price,status) values ($1,$2,$3,$4, $5) returning *',
    [user.id, title, description, price, 'vacant']
  );
  res.json(result.rows[0]);
};

export { addJob };
