import { error } from "console"
import postModel, { IPost } from "../models/postModel"
import { User, userModel } from "../models/userModel"
import mongoose from "mongoose"
import { getUserById } from "./userService"

export const createPostService = async (post: IPost): Promise<IPost | unknown> => {
    try {
        const { title, content, author } = post

        const myUser:User | unknown = await getUserById(author)

        if(!myUser) throw new Error('author not found!')

        const dbPost = new postModel({ title, content, author })
 
        await dbPost.save()
         
        const user: User | unknown = await userModel.findByIdAndUpdate(author,{$push:{posts:dbPost._id} })

        return await  getPostById(dbPost.id)
    } catch (error) {
        throw error
    }
}

 export const getPostById = async (id:mongoose.Types.ObjectId):Promise<IPost|unknown> => {
    try {
          return await postModel.findById(id)       
    } catch (error) {
        throw error
    }
}