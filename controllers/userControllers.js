import pool from '../db.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';

const register = async (req, res) => {
  const { username, email, password, usertype } = req.body;

  const salt = await bcrypt.genSalt(10);
  const encrypted_password = await bcrypt.hash(password, salt);

  const text =
    'INSERT INTO users(username, email, password, usertype) VALUES($1, $2, $3, $4) RETURNING username, email, usertype';
  const values = [username, email, encrypted_password, usertype];

  // callback
  const result = await pool.query(text, values);
  res.json(result.rows[0]);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide email or password');
  }

  const result = await pool.query('select * from users where email=$1', [
    email,
  ]);
  if (result.rowCount === 0) {
    res.status(400);
    throw new Error("Email doesn't exists");
  }
  const hashed_password = result.rows[0].password;
  const is_matched = await bcrypt.compare(password, hashed_password);

  if (!is_matched) {
    res.status(400);
    throw new Error("Password doesn't match");
  }

  const token = generateToken(result.rows[0].id);

  res.json({
    username: result.rows[0].username,
    email: result.rows[0].email,
    token: token,
    userType: result.rows[0].usertype,
    id:result.rows[0].id
  });
};

const getUserProfile = async (req, res) => {
  const id = req.params.id;
  const result = await pool.query(
    'select id, username, email, bio, usertype from users where id = $1',
    [id]
  );
  if (result.rowCount === 0) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json(result.rows[0]);
};

const updateUserProfile = async (req, res) => {
  const { username, bio } = req.body;
  if (!username || !bio) {
    res.status(403);
    throw new Error('Please provide username and bio');
  }

  const result = await pool.query(
    'update users set username= $1, bio= $2 where id= $3 returning username, email, bio, usertype',
    [username, bio, req.user.id]
  );
  res.json(result.rows[0]);
};

export { register, login, getUserProfile, updateUserProfile };
