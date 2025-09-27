import mongoose from "mongoose"
import { ENV } from "./env.js"
export const connectDB=async()=>{
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("DB connected successfully")
    } catch (error) {
        console.log("DB connection error",error)
        process.exit(1);
    }
}