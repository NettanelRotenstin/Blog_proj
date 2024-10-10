import { error } from "console"
import postModel, { IPost } from "../models/postModel"
import { User, userModel } from "../models/userModel"
import mongoose, { Query } from "mongoose"
import { getUserById } from "./userService"
import UpdatePostDTO from "../types/DTO/updatePostDTO"

export const createPostService = async (post: IPost): Promise<IPost | unknown> => {
    try {
        const { title, content, author } = post

        const myUser: User | unknown = await getUserById(author)

        if (!myUser) throw new Error('author not found!')

        const dbPost = new postModel({ title, content, author })

        await dbPost.save()

        await userModel.findByIdAndUpdate(author, { $push: { posts: dbPost._id } })

        return await getPostById(dbPost.id)
    } catch (error) {
        throw error
    }
}

export const getPostById = async (id: string): Promise<IPost | unknown> => {
    try {
        return await postModel.findById(id)
    } catch (error) {
        throw error
    }
}

export const getAllPosts = async (): Promise<IPost[] | unknown> => {
    return await postModel.find({})
}

export const updatePostService = async (id: string, postToUpdate: UpdatePostDTO): Promise<IPost | unknown> => {

    await postModel.findByIdAndUpdate(id, postToUpdate)
    
    return await getPostById(id)
}


export const deletePostService = async (id: string): Promise<IPost | unknown> => {
    try {
        const myPost : IPost | unknown = await getPostById(id)
        await postModel.deleteOne({_id: id})
        await userModel.updateOne(
            { posts: id },
            { $pull: { posts: id } })
        return myPost
    } catch (err) {
        throw err
    }
}





