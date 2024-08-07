const express = require('express')
const app = express()
const port = 5000

app.get('/',(req , res) => {
    res.send('Welcome To Server Alok !')
})

app.get('/login',(req , res) => {
    res.send('<h1>User AUthentication</h1>')
})

app.listen(port,() => {
    console.log(`Server is Listening on port ${port}`)
})