import { error } from "console"
import postModel, { IComment, IPost } from "../models/postModel"
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


export const deletePostService = async (id: string): Promise<void> => {
    try {
        await postModel.deleteOne({ _id: id })
        await userModel.updateOne(
            { posts: id },
            { $pull: { posts: id } })
    } catch (err) {
        throw err
    }
}


// export const addCommentService = async (comment: IComment): Promise<void> => {
//     try {
//         const { content,author,createdAt } = comment

//         const myUser: User | unknown = await getUserById(author)

//         if (!myUser) throw new Error('author not found!')

//         const dbPost = new postModel({ title, content, author })

//         await dbPost.save()

//         await userModel.findByIdAndUpdate(author, { $push: { posts: dbPost._id } })

//         return await getPostById(dbPost.id)
//     } catch (error) {
//         throw error
//     }
// }
 



