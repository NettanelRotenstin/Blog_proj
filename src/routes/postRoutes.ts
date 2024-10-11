import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/postController";
import { onlySignUser } from "../middleware/authMW";

const postRouter = Router();

/**
 * @swagger
 * /:
 *   post:
 *     summary: create post.
 *     description: create post.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/postRoutes'
 *      
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

postRouter.post("/", onlySignUser, createPost);

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all posts.
 *     description: get all posts.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/postRoutes'
 *      
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
postRouter.get("/", onlySignUser, getPosts);

/**
 * @swagger
 * /:
 *   get:
 *     summary: get post.
 *     description: get post.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/postRoutes'
 *      
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

postRouter.get("/:id", onlySignUser, getPost);

/**
 * @swagger
 * /:
 *   put:
 *     summary: update post.
 *     description: update post.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/postRoutes'
 *      
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
postRouter.put("/:id", onlySignUser, updatePost);

/**
 * @swagger
 * /:
 *   delete:
 *     summary: delete post.
 *     description: delete post.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/postRoutes'
 *      
 *     responses:
 *       '204':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
postRouter.delete("/:id", onlySignUser, deletePost);

/**
 * @swagger
 * /:
 *   post:
 *     summary: add comment.
 *     description: add comment.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/postRoutes'
 *      
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

postRouter.post("/:id/comments", onlySignUser, addComment);

export default postRouter;
