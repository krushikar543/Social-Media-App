import { Timestamp } from "mongodb";
import mongoose from "mongoose";

// Blue print of the User Object
const UserSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required: true,
        min : 2,
        max: 50,
    },
    lastName: {
        type : String,
        required: true,
        min : 2,
        max: 50,
    },
    email: {
        type : String,
        required: true,
        unique: true,
        min : 2,
        max: 50,
    },
    password: {
        type : String,
        required: true,
        unique: true,
        min : 2,
        max: 50,
    },
    picture: {
        type : String,
        default : "",
    },
    friends : {
        type : Array,
        default : []
    },
    location : String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}, {timestamps:true});

const User = mongoose.model("User", UserSchema);
export default User;