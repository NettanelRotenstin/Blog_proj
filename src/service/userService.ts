import mongoose from "mongoose"
import { userModel, IUser, User } from "../models/userModel"



export const createUserService = async (user: IUser): Promise<User | unknown> => {
    try {
        const { username, email, profile } = user

        const dbUser = new userModel({
            username, email, profile
        })
        await dbUser.save()
        return await getUserByName(username)
    } catch (error) {
        throw error
    }
}

export const getUserByName = async (username: string): Promise<User | unknown> => {
    try {
        return await userModel.findOne({ username })
    } catch (error) {
        throw error
    }
}

export const getUserById = async (id: mongoose.Types.ObjectId): Promise<User | unknown> => {
    try {
        return await userModel.findById(id)
    } catch (error) {
        throw error
    }
}

export const getAllUsers = async (): Promise<User[] | unknown> => {
    return await userModel.find({})
}















