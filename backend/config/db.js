import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thebatmann:<db_password>@cluster0.immmjnb.mongodb.net/').then(() => console.log("DataBase Connected"));
}
