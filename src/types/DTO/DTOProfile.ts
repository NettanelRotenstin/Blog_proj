import mongoose, { Schema } from "mongoose";
interface DTOProfile{
    bio?:string,
    socialLinks?:string
}


const DTOPrfl = new Schema<DTOProfile>({});

export default DTOPrfl