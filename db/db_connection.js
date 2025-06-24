import mongoose from "mongoose";
import "dotenv/config"

async function mongodb_connection(params) {

    try {
        let DB_URL = process.env.MONGO_DB_LOCAL_URL
        let response = await mongoose.connect(DB_URL)
        console.log( "mongodb connected" ,  response.connection._connectionString)
        let db = mongoose.connection
        db.on("connected" , () => {
            console.log("DB connected succefully")
        })
        db.on("error" , () => {
            console.log("DB connecttion error")
        })
        db.on("disconnected" , () => {
            console.log("DB disconnected succefully")
        })
    }
    catch (error) {
        console.log(`db internal server error`)
    }

}

export default mongodb_connection