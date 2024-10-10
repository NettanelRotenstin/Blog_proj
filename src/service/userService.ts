import  { userModel,IUser, User } from "../models/userModel"

 

export const createUserService = async (user:IUser):Promise<User|unknown> => {
    try {
        const {username,email,profile} = user

        const dbUser = new userModel({
            username,email,profile
        })
        await dbUser.save()
        return await getUserByName(username)
    } catch (error) {
        throw error
    }
}

export const getUserByName = async (username:string):Promise<User|unknown> => {
    try {
          return await userModel.find({username})       
    } catch (error) {
        throw error
    }
}















