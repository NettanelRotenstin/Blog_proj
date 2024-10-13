import { Router } from "express";

const router = require("express").Router();
const { login, logout } = require("../controllers/authController");

const authRouter = Router()
 
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login to the system.
 *     description: Login to the system.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/authRoutes'
 *      
 *     responses:
 *       '201':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router.post("/login", login);

/**
 * @swagger
 * /logout:
 *   delete:
 *     summary: logout from system.
 *     description: logout from system.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/src/routes/authRoutes'
 *      
 *     responses:
 *       '204':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */

router.delete("/logout", logout);

 

export default authRouter;