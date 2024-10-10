import mongoose, { Schema } from "mongoose";
interface DTOProfile{
    bio:string,
    socialLinks:string[]
}


const DTOPrfl = new Schema<DTOProfile>({
    bio:{
        type:String,
        default:''
    },
socialLinks:{
    type:[String],
    default:[]
}
});

export default DTOPrfl