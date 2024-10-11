"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authMW_1 = require("../middleware/authMW");
const userRouter = (0, express_1.Router)();
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
userRouter.post("/", userController_1.createUser);
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
userRouter.get("/", authMW_1.onlySignUser, userController_1.getUsers);
/**
 * @swagger
 * /:
 *   get:
 *     summary: get user.
 *     description: get user.
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
userRouter.get("/:username", authMW_1.onlySignUser, userController_1.getUser);
exports.default = userRouter;
