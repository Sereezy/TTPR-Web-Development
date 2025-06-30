import express from 'express'

const app = express()
const port = 3000

app.get('/',(req,res)=>{
  console.log(req)
  console.log(req.rawHeaders)
 res.send("hello world")
})
app.get('/contact',(req,res)=>{
  console.log(req)
 res.send("<h1>Contact Us</h1>")
})

app.get('/about',(req,res)=>{
  console.log(req)
 res.send("<h1>About Us</h1>")
})



app.listen(port,()=>{
console.log(`the port is currently running in ${port}`)
})
