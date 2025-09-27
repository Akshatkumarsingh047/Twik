import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
       clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is Required"],
      unique: [true,"email must be unique"],
    },
    firstName: {
      type: String,
      required: [true,"firstName is required"],
    },
    lastName: {
      type: String,
      required: [true,"lastName is required"],
    },
    username: {
      type: String,
      required: [true,"userName is required"],
      unique: [true , "Provide unique userName"],
    },
    profilePicture: {
      type: String,
      default: "",
    },
    bannerImage: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
      maxLength: 160,
    },
    location: {
      type: String,
      default: "",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
},{timestamps:true})
const User = mongoose.model("User", userSchema);

export default User; 