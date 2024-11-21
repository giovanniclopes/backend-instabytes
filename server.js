import express from "express";
import connectDatabase from "./src/config/dbConfig.js";

// Connects to the MongoDB database using the connection string from the environment variable
const connection = await connectDatabase(process.env.STRING_CONNECTION);

// Initializes an Express app
const app = express();
// Enables JSON parsing for incoming requests
app.use(express.json());

// Starts the server on port 3000
app.listen(3000, () => {
  console.log("Server rodando na porta 3000");
});

// Fetches all posts from the 'posts' collection in the 'imersao-instabyte' database
async function getAll() {
  const db = connection.db("imersao-instabyte");
  const collection = db.collection("posts");
  return await collection.find().toArray();
}

// Defines a GET route to retrieve all posts
app.get("/posts", async (req, res) => {
  // Fetches all posts
  const posts = await getAll();
  // Sends the posts as a JSON response with a 200 status code
  res.status(200).json(posts);
});

// function buscarPostPorId(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }

// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorId(req.params.id);
//   res.status(200).json(posts[index]);
// });
