const express = require("express");
const pool = require("./db/db"); //Import pool tu db.js, de su sung postgresql

const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 3000;

app.get('/users', async (req, res) => {
  try {
    const {rows} = await pool.query('Select * from users');
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});