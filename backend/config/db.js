import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thebatmann:pass654321@cluster0.immmjnb.mongodb.net/food-delivery').then(() => console.log("DataBase Connected"));
}