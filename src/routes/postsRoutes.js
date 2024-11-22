import express from "express";
import { listPosts } from "../controllers/postsController.js";

const routes = (app) => {
  // Enables JSON parsing for incoming requests
  app.use(express.json());
  // Defines a GET route to retrieve all posts
  app.get("/posts", listPosts);
};

export default routes;
