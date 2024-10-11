import { Request, Response } from "express";
import { User } from "../models/userModel";
import { createUserService, getAllUsers, getUserByName } from "../service/userService";
import { error } from "console";


export const createUser = async (req: Request, res: Response) => {
    try {
        const user: User | unknown = await createUserService(req.body)
        res.status(201).json({
            user
        })
    } catch (error) {
        res.json(error)
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const allUsers: User[] | unknown = await getAllUsers()
        res.status(200).json({
            allUsers
        })
    } catch (error) {
        res.json(error)
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user: User | unknown = await getUserByName(req.body.username)
        res.status(200).json({
            user
        })
    }
    catch {
        res.json(error)
    }
};

// Optionally, add DELETE and EDIT functions
