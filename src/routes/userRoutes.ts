import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/userController";
import { register } from "module";
import { onlySignUser } from "../middleware/authMW";

const userRouter = Router();

/**
 * @swagger
 * /:
 *   post:
 *     summary: register.
 *     description: register.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/userRoutes'
 *      
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
userRouter.post("/", createUser);

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all users.
 *     description: get all users.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/userRoutes'
 *      
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
userRouter.get("/",onlySignUser, getUsers);

/**
 * @swagger
 * /:username:
 *   get:
 *     summary: get user.
 *     description: get user.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/userRoutes'
 *      
 *     responses:
 *       '204':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
userRouter.get("/:username",onlySignUser, getUser);

export default userRouter;
