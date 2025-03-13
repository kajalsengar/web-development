const express = require('express')
const app = express()
const port = 3000
const blog = require('./Routes/blog')
const fs = require("fs")

// app.use(express.static("public"))
app.use("/blog", blog)

const myLogger = function (req, res, next) {
    console.log(req.hadders)
    req.kaju = "i am kajal"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
    console.log('LOGGED')
    // console.log(`${Date.now()} is a ${req.method}`)

    // res.send("middleware...")
    next()
}

app.use(myLogger)

const myLogger2 = function (req, res, next) {
    req.kaju = "i am sengar also"
    console.log('LOGGED again..')
    next()
}

app.use(myLogger2)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('contact me!')
})

app.get('/about', (req, res) => {
    res.send('about me!' + req.kaju)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})