import jwt from 'jsonwebtoken';
import pool from '../db.js';

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const result = await pool.query('select * from users where id = $1', [
      decoded.id,
    ]);
    req.user = result.rows[0];
    next();
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};



export {protect}