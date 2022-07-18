const express = require('express')
const app = express()
const UserRouter = require('./modules/Users/UserRoutes')
const productRouter = require('./modules/Products/product.routes')
const path = require("path")
const connectionDB = require('./DB/connection')
require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT
app.use(express.json())
app.use(cors())
connectionDB()


app.use('/pictures', express.static(path.join(__dirname, './pictures')))

app.use(UserRouter, productRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
