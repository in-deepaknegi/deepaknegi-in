import mongoose, { Schema } from "mongoose";

const emailSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema)

export default Email;