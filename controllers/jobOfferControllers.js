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

const getMyCreatedOffers = async (req, res, next) => {
  const result = await pool.query('select * from offer where user_id=$1', [
    req.user.id,
  ]);
  res.json(result.rows);
};

const getJob = async (req, res, next) => {
  const jobId = req.params.id;
  const result = await pool.query('select * from offer where id=$1', [jobId]);
  if (result.rows.length <= 0) {
    res.status(404);
    throw new Error('Does not exist');
  }
  res.json(result.rows[0]);
};

const applyJob = async (req, res, next) => {
  const jobId = req.params.id;
  const result = await pool.query('select * from offer where id=$1', [jobId]);
  if (result.rows.length <= 0) {
    res.status(404);
    throw new Error('Does not exist');
  }
  const job = result.rows[0];
  if (job.status !== 'vacant') {
    res.status(403);
    throw new Error('Job offer is not vacant');
  }
  const result2 = await pool.query(
    'insert into deal (offer_id, employee_id, dealstatus) values ($1, $2, $3) returning *',
    [job.id, req.user.id, 'requested']
  );
  res.json(result2.rows[0]);
};

// yo employer ko lagi
const getMyCreatedOffer = async (req, res, next) => {
  const offerId = req.params.id;
  const result = await pool.query('select * from offer where id=$1', [offerId]);
  if (result.rows.length <= 0) {
    res.status(404);
    throw new Error('Does not exist');
  }
  const result2 = await pool.query(
    `
    select
      deal.id, deal.offer_id, deal.employee_id, deal.dealstatus,
      users.username, users.email
      from deal
      inner join users on deal.employee_id = users.id
      where deal.offer_id = $1`,
    [offerId]
  );

  res.json(result2.rows);
};

export {
  addJob,
  getJobs,
  getJob,
  applyJob,
  getMyCreatedOffers,
  getMyCreatedOffer,
};
