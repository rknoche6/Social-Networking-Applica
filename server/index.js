const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.NODE_ENV == "test" ? 5001 : 5000;
let pool;

if (process.env.NODE_ENV === "test") {
  pool = require("./test_db");
} else {
  pool = require("./db");
}

app.use(cors());
app.use(express.json());

// ROUTES //

// create a post

app.post("/posts", async (req, res) => {
  try {
    const { description } = req.body;
    const newPost = await pool.query(
      "INSERT INTO posts (description) VALUES ($1) RETURNING * ",
      [description]
    );

    res.json(newPost.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get posts

app.get("/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM posts;");

    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a single post

app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await pool.query("SELECT * FROM posts WHERE post_id = $1", [
      id,
    ]);

    res.json(post.rows[0]);
  } catch (err) {
    console.error(err.messsage);
  }
});

// update a post

app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatePost = await pool.query(
      "UPDATE posts SET description = $1 WHERE post_id = $2",
      [description, id]
    );

    res.json("Post was updated");
  } catch (err) {
    console.error(err.messsage);
  }
});

// delete a post

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await pool.query(
      "DELETE FROM posts WHERE post_id= $1",
      [id]
    );

    res.json("Post was deleted");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

module.exports = app;