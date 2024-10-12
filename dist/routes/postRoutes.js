"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const authMW_1 = require("../middleware/authMW");
const postRouter = (0, express_1.Router)();
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
postRouter.post("/", authMW_1.onlySignUser, postController_1.createPost);
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
postRouter.get("/", authMW_1.onlySignUser, postController_1.getPosts);
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
postRouter.get("/:id", authMW_1.onlySignUser, postController_1.getPost);
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
postRouter.put("/:id", authMW_1.onlySignUser, postController_1.updatePost);
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
postRouter.delete("/:id", authMW_1.onlySignUser, postController_1.deletePost);
/**
 * @swagger
 * /{id}/comments:
 *   post:
 *     summary: Add comment
 *     description: Add a comment to a post.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the post to add the comment to
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'  # Assuming you have a schema defined for comments
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
postRouter.post("/:id/comments", authMW_1.onlySignUser, postController_1.addComment);
exports.default = postRouter;
