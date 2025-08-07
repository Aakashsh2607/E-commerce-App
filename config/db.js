import mongoose from "mongoose";
import colors from "colors";

// Enable colors explicitly if needed
colors.enable();

// MongoDB Connection String

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to  Mongodb Database ${conn.connection.host}');
    } catch (error){
        console.log('error in Mongodb ${error}'.bgMagenta.white);
    }
};

export default connectDB;
