import {Schema} from "mongoose";
import mongoose from "mongoose"

const UserSchema = new Schema({
    userName:{type:String, required:true,unique:true},
    clerkId:{type:String, required:true,unique:true},
    email:{type:String, required:true,unique:true},
    photo:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    planId:{type:Number, default:1},
    creditBalance:{type:Number, default:10},
});

const user = mongoose.models?.User || mongoose.model('User', UserSchema);

export default user;