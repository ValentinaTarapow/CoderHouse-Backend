const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const handlebars = require('express-handlebars')
const routers = require('./routes/index')
const viewsRouter = require('./routes/views')
const ProductManager = require('./controllers/productsManager')

const app = express()
const PORT = 8080

const httpServer = http.createServer(app)
const productsList = new ProductManager(`${__dirname}/db/products.json`)

//hbs--------------------------
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname +'/views')
app.set('view engine', 'handlebars')


app.use('/static', express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const io = new Server(httpServer)
httpServer.listen(PORT, () => {
    console.log(`Listening app port ${PORT}`)
})

//route configuration /api/products & /api/carts in routes/index
app.use('/api', routers)
//route configuration views
app.use("/", viewsRouter)

io.on('connection', async socket => {
    console.log('New client connected', socket.id)
    socket.on('client:productDelete', async (pid, cid) => {
        const id = await productsList.getProductById(parseInt(pid.id))
        if(id) {
        await productsList.deleteById(parseInt( pid.id ))
        const data = await productsList.getProducts()
        return io.emit('newList', data)
        }
        const dataError = {status: "error", message: "Product not found"}
        return socket.emit('newList', dataError)
    })
    socket.on('client:newProduct', async data => {
        console.log(data.thumbnail)
        const imgPaths = data.thumbnail
        const productAdd = await productsList.addProducts(data, imgPaths)
        console.log(productAdd);
        if(productAdd.status === 'error'){
            let error = productAdd.message
            socket.emit('server:producAdd', {status:'error', error})
        }
        const newData = await productsList.getProducts()
        return io.emit('server:productAdd', newData)
    })
})