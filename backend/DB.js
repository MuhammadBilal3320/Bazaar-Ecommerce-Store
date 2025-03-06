import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.HOST_URI).then(() => {
        console.log("DataBase Connected Successfully!");
    })
}