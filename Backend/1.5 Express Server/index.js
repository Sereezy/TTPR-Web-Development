import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send(<h1>Welcome to the homepage!</h1>)
})

app.get("/", (req, res) =>{
    res.send(<h1>About us</h1>)
})

app.use((req, res) =>{
    res.status(404).send(<h1>Page Not Found</h1>)
})

app.listen(3000, () =>{
    console.log("Server running at http://localhost:3000")
})


    

