const express = require('express')
const routers = require('./routes/index')


const app = express()
const PORT = 8080

app.use(express.static(`${__dirname}/public`))
//parse info
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

//configure routes
// /api/products and /api/carts in routes/index
app.use('/api', routers)