import { Token } from "typescript";
import { User, userModel } from "../models/userModel";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";


export const loginServise = async (user: User) => {
    try {
        const dbUser = await userModel.findOne({ username: user.username });

        if (!dbUser) throw new Error("user not found");

        const userPass: string = user.password || " "

        const dbUserPass: string = dbUser.password || " "

        if (!(await bcrypt.compare(userPass, dbUserPass))) {
            
            throw new Error("wrong password");
        }

        const token = await jwt.sign({user_name: dbUser.username,email: dbUser.email,id: dbUser._id},process.env.TOKEN_SECRET as string);
        
        return token;
    
    } catch (err) {
        console.log(err);
        throw err;
    }
};

 