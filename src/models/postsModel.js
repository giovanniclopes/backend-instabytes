import connectDatabase from "../config/dbConfig.js";

// Connects to the MongoDB database using the connection string from the environment variable
const connection = await connectDatabase(process.env.STRING_CONNECTION);

// Fetches all posts from the 'posts' collection in the 'imersao-instabyte' database
export async function getAll() {
  const db = connection.db("imersao-instabyte");
  const collection = db.collection("posts");
  return await collection.find().toArray();
}
