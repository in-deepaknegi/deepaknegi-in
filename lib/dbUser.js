import mongoose from "mongoose";

export const connectUser = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_USER_URI)
    } catch (error) {
        console.log("Error conencting to database: ",error)
    }
}
