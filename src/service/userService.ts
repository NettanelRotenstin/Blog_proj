import userModel, { IUser } from "../models/userModel"

 

export const createUserService = async (user:IUser) => {
    try {
        const {username,email,profile} = user

        const dbUser = new userModel({
            username,email,profile
        })
        await dbUser.save()
    } catch (error) {
        throw error
    }
}















