import { Request, Response } from "express";
import { User } from "../models/userModel";
import { createUserService } from "../service/userService";
 

export const createUser = async (req: Request, res: Response) => {
    try {
        const user:User|unknown = await createUserService(req.body)
        res.status(201).json({
            user
        })
    } catch (error) {
        
    }
};

export const getUsers = async (req: Request, res: Response) => {};

export const getUser = async (req: Request, res: Response) => {};

// Optionally, add DELETE and EDIT functions
