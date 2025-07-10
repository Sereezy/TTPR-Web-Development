import express from "express"

const app = express()
const port = 3000;

app.set('view engine', 'ejs')

const today = new Date()
const day = today.getDay()

const data = {
                dataType:"1",
                message:"2"
            }



app.get("/", (req, res) => {
    console.log(day)
    res.render("index", data)
})









app.listen(port, ()=> {
    console.log(`Listening at port ${3000}`)
})