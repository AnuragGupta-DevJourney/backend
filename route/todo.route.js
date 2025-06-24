import express from "express"
import TododModel from "../model/todo.model.js"

const todoRoute = express.Router()

todoRoute.get("/", (req, res) => {
    let arr = [
        { todo: "hello" },
        { todo: "world" }
    ]
    res.send(arr)
})

todoRoute.get("/todo-list", async (req, res) => {

    try {
        let result = await TododModel.find()
        if (result.length === 0) {
            return res.status(200).json({
                message: "no data found",
                data: []
            })
        }
        res.send(result)
    } catch (error) {

    }

})

todoRoute.post("/todo-list", async (req, res) => {
    const payload = req.body
    const todoRes = await TododModel.insertOne(payload)
    console.log(todoRes)
    res.send(payload)
})


todoRoute.delete("/todo-list/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const response = await TododModel.deleteOne({ _id: id })

    res.status(200).json({
        message: "deleted successfully",
        details: response
    })
})

todoRoute.put("/todo-list/:id", async (req, res) => {
    const id = req.params.id
    console.log("reajaklfniod" , req.body)
    const data = req.body.todoTask
    const response = await TododModel.findByIdAndUpdate(
        id,
        {
            $set: { 
                "todoTask": data
            }
        }, 
        {
            new: true
        }
    )  

    res.status(200).json({
        message: "updated successfully",
        details: response
    })
})      


export default todoRoute 