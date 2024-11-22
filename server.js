import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Initializes an Express app
const app = express();
routes(app);

// Starts the server on port 3000
app.listen(3000, () => {
  console.log("Server rodando na porta 3000");
});
