import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required:[true,"Please enter a email!"],
        unique:[true,"Email already exists!"]
    },
    password: {
        type: String,
        required:[true,"Please enter a password!"],
        minlength:[6,"Password must be atleast 6 characters long!"]
    },
    verification_token:String,
    verified:{
        type:Boolean,
        default:false,
    },
    manufacturer_verified:{
        type:Boolean,
        default:true,
    },
    manufacturer_details:{
        type:Object,
        default:{},
        required:true
    }
}, { timestamps: true });


const User = mongoose.models.user || mongoose.model("user", userSchema);                              
export default User;