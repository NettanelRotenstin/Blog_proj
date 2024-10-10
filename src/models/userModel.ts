import mongoose, { Schema, Document, Types } from "mongoose";
import validator, { isEmail } from "validator";
import  DTOPrfl from '../types/DTO/DTOProfile'

export interface IUser extends Document {
  username: string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'username is missing!'],
    min: [4, 'name too short!'],
    max: [20, 'name too long!']
  },
  email: {
    type: String,
    required: [true, 'email is missing!'],
    validate: isEmail
  },
  profile: {
    type: DTOPrfl

  }
});

export default mongoose.model<IUser>("User", UserSchema);
