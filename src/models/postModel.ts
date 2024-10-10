import mongoose, { Schema, Document, Types } from "mongoose";


export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  title?: string;
  content?: string;
  author: Types.ObjectId;
  comments: IComment[];
}
const CommentSchema = new Schema<IComment>({
  content:{
    type:String,
    required:[true,'content is missing!']
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    required:[true,'author is missing!']
  }
},{timestamps:true});

const PostSchema = new Schema<IPost>({
    title:{
      type:String,
      default:''
    },
    content:{
      type:String,
      required:[true,'content is missing!']
    },
    author:{
      type:mongoose.Schema.Types.ObjectId,
      required:[true,'author is missing!']
    },
    comments:{
      type:[CommentSchema],
      default:[]
    }
});




export default mongoose.model<IPost>("Post", PostSchema);