const ProductManager = require('./app.js')
const products = new ProductManager('./products.json')

async function Test() {

    const product1 = {
        title: 'Product 1',
        description: 'Test product',
        price: 1000,
        thumbnail: 'No image',
        code: '001',
        stock: 10
    }
    const product2 = {
        title: 'Product 2',
        description: 'Test product',
        price: 1000,
        thumbnail: 'No image',
        code: '002',
        stock: 10
    }
    const product3 = {
        title: 'Product 3',
        description: 'Test product',
        price: 1000,
        thumbnail: 'No image',
        code: '003',
        stock: 10
    }
    const product4 = {
        title: 'Product 4',
        description: 'Test product',
        price: 1000,
        thumbnail: 'No image',
        code: '005',
        stock: 10
    }

//Add products
    // await products.addProducts(product1).then(data => console.log(data))
    // await products.addProducts(product2).then(data => console.log(data))
    // await products.addProducts(product3).then(data => console.log(data))
    await products.addProducts(product4).then(data => console.log(data))

//Get all products
    // await products.getProducts().then(data => console.log(data))

//Get products by ID
    // await products.getProductById(1).then(data => console.log(data))

//Update product
    // await products.updateProducts(2, {
    //     title: 'New product',
    //     description: 'This is an updated product',
    //     price: 1800,
    //     thumbnail: 'No image',
    //     code: '010',
    //     stock: 15
    // })

//Delete producto
    // await products.deleteProduct(2)
}
Test()