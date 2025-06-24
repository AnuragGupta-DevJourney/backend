import express from "express"
import "dotenv/config"
import todoRoute from "./route/todo.route.js"
import cors from "cors"
import mongodb_connection from "./db/db_connection.js"

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))        

mongodb_connection()

app.use("/", todoRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on Port https://localhost:${PORT}`)
})