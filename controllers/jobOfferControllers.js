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

const getJobs = async (req, res, next) => {
  const result = await pool.query('select * from offer');
  res.json(result.rows);
};

const getJob = async (req, res, next) => {
  const jobId = req.params.id;
  const result = await pool.query('select * from offer where id=$1', [jobId]);
  if (result.rows.length <= 0) {
    res.status(404);
    throw new Error('Does not exist');
  }
  res.send(result.rows[0]);
};

export { addJob, getJobs, getJob };
