import mongoose from "mongoose";

const connectContact = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.DB_CONTACT_URI);
            console.log("Contact DB connected");
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectContact;