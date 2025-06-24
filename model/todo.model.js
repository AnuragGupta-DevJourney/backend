import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

    todoTask: {
        type: String,
        required: true,
        // unique: true
    }

}, { timestamps: true })

const TododModel = mongoose.model("TodoModel", todoSchema)


export default TododModel; 