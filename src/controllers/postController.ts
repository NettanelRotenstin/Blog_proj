import { Request, Response, NextFunction } from "express";
import Post, { IPost } from "../models/postModel";
import {User} from "../models/userModel";
import { createPostService, getAllPosts, getPostById, updatePostService } from "../service/postService";
import mongoose, { Types } from "mongoose";

// Create a new post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const post:IPost|unknown = await createPostService(req.body)
    res.status(201).json({
      post
    })
  } catch (error) {
    res.json({error})
  }
};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};



// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const posts:IPost[] | unknown = await getAllPosts()
    res.status(200).json({
      posts
    })
    
  } catch (error) {
    res.json(error)
  }
};


// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const myPost:IPost|unknown = await getPostById(req.params.id)
    res.status(200).json({
      myPost
    })
  } catch (error) {
    res.json({error})
  }
  
};


// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const post:IPost  | unknown = await updatePostService(req.params.id,req.body)
    res.json({post})
  } catch (error) {
    res.json(error)
  }
};


// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};


