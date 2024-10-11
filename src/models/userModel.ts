import mongoose, { Schema, Document, Types, InferSchemaType } from "mongoose";
import validator, { isEmail } from "validator";
import  DTOPrfl from '../types/DTO/DTOProfile'

export interface IUser extends Document {
  username: string;
  password?:string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'username is missing!'],
    min: [4, 'name too short!'],
    max: [20, 'name too long!'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'email is missing!'],
    validate: isEmail,
    unique: true
  },
  profile: {
    type: DTOPrfl
  },
  posts:{
    type:[Types.ObjectId],
    default:[],
    ref:'Post'
  }
});

export type User = InferSchemaType<typeof userSchema>;

export const userModel = mongoose.model<IUser>("User", userSchema);

  