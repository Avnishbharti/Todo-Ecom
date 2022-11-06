const Express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const usercontroller = require("./Routes/User")
const todocontroller = require("./Routes/Todolist")

const app = Express()
app.use(Express.json())
app.use(cors())

const Connection_Url = "mongodb://localhost:27017/fulltodoapp"
const Port = process.env.PORT || 5003;

mongoose.connect(Connection_Url).then(()=>{
    app.listen(Port,(err)=>{
        if(!err){
            console.log(`The Server running at ${Port} And Db Has Connected`)
        }
    })
}).catch((err)=>{
    console.log(err)
})


app.use("/user",usercontroller)
app.use("/todolist",todocontroller)