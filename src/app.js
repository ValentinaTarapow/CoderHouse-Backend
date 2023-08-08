const express = require('express')
const ProductsManager = require('./managers/productsManager')
const UserManager = require('./managers/usersManager')

const users = new UserManager('./users.json')
const products = new ProductsManager('./products.json')

const app = express()
const PORT = 8080

//parse info from server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//server init
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
app.get('/', async (req, res) => {
    res.send('<h1 style="color: darkblue; text-align: center; margin-top: 10%; background-color: darkgray">Welcome</h1>')
})
//endpoint get "/products"
app.get('/products', async (req, res) => {
    try {
        const productsList = await products.getProducts()
        const limit = req.query.limit
        if(!limit) return res.send({status: 'success', payload: productsList})
        res.send({status: 'success', payload: productsList.slice(0, limit)})
    } catch (error) {
        console.log(error)
    }
})
//endpoint get product by ID
app.get('/products/:pid', async (req, res) => {
    try {
        const id = parseInt(req.params.pid)
        const product = await products.getProductById(id)
        if(!product) return res.send({status: 'error', message: 'Product not found'})
        res.send({status: 'success', payload: product})
    } catch (error) {
        console.log(error)
    }
})
app.get('/users', async (req, res) => {
    try {
        const usersList = await users.getUsers()
        res.send({status: 'success', payload: usersList})
    } catch (error) {
        console.log(error)
    }
})
app.get('/users/:uid', async (req, res) => {
    try {
        const id = parseInt(req.params.uid)
        const user = await users.getUserById(id)
        if(!user) return res.send({status: 'error', message: 'No user found'})
        res.send({status: 'success', payload: user})
    } catch (error) {
        console.log(error)
    }
})
