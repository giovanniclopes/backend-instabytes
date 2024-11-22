import { getAll } from "../models/postsModel.js";

export async function listPosts(req, res) {
  // Fetches all posts
  const posts = await getAll();
  // Sends the posts as a JSON response with a 200 status code
  res.status(200).json(posts);
}

// const Post = require('../models/Post');

// class PostsController {
//   async create(req, res) {
//     try {
//       const { title, content, imageUrl, author } = req.body;

//       if (!title || !content) {
//         return res.status(400).json({ error: 'Title and content are required' });
//       }

//       const post = await Post.create({
//         title,
//         content,
//         imageUrl,
//         author,
//         likes: 0,
//         comments: []
//       });

//       return res.status(201).json(post);
//     } catch (error) {
//       return res.status(500).json({ error: 'Error creating post' });
//     }
//   }

//   async getAllPosts(req, res) {
//     try {
//       const { page = 1, limit = 10 } = req.query;
//       const posts = await Post.find()
//         .sort({ createdAt: -1 })
//         .limit(limit * 1)
//         .skip((page - 1) * limit)
//         .exec();

//       const count = await Post.countDocuments();

//       return res.status(200).json({
//         posts,
//         totalPages: Math.ceil(count / limit),
//         currentPage: page
//       });
//     } catch (error) {
//       return res.status(500).json({ error: 'Error fetching posts' });
//     }
//   }

//   async getPostById(req, res) {
//     try {
//       const post = await Post.findById(req.params.id);
//       if (!post) {
//         return res.status(404).json({ error: 'Post not found' });
//       }
//       return res.status(200).json(post);
//     } catch (error) {
//       return res.status(500).json({ error: 'Error fetching post' });
//     }
//   }

//   async updatePost(req, res) {
//     try {
//       const { title, content, imageUrl } = req.body;
//       const post = await Post.findByIdAndUpdate(
//         req.params.id,
//         { title, content, imageUrl },
//         { new: true }
//       );

//       if (!post) {
//         return res.status(404).json({ error: 'Post not found' });
//       }

//       return res.status(200).json(post);
//     } catch (error) {
//       return res.status(500).json({ error: 'Error updating post' });
//     }
//   }

//   async deletePost(req, res) {
//     try {
//       const post = await Post.findByIdAndDelete(req.params.id);
//       if (!post) {
//         return res.status(404).json({ error: 'Post not found' });
//       }
//       return res.status(200).json({ message: 'Post deleted successfully' });
//     } catch (error) {
//       return res.status(500).json({ error: 'Error deleting post' });
//     }
//   }

//   async likePost(req, res) {
//     try {
//       const post = await Post.findByIdAndUpdate(
//         req.params.id,
//         { $inc: { likes: 1 } },
//         { new: true }
//       );

//       if (!post) {
//         return res.status(404).json({ error: 'Post not found' });
//       }

//       return res.status(200).json(post);
//     } catch (error) {
//       return res.status(500).json({ error: 'Error liking post' });
//     }
//   }

//   async addComment(req, res) {
//     try {
//       const { comment, author } = req.body;
//       const post = await Post.findByIdAndUpdate(
//         req.params.id,
//         {
//           $push: {
//             comments: {
//               text: comment,
//               author,
//               createdAt: new Date()
//             }
//           }
//         },
//         { new: true }
//       );

//       if (!post) {
//         return res.status(404).json({ error: 'Post not found' });
//       }

//       return res.status(200).json(post);
//     } catch (error) {
//       return res.status(500).json({ error: 'Error adding comment' });
//     }
//   }
// }

// module.exports = new PostsController();
