import mongoose from "mongoose";

const dbConnection = async () => {
    try{
        const cnn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`db connect at ${cnn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

export default dbConnection;