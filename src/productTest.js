const ProductManager = require('./controllers/productsManager')
const products = new ProductManager('./db/products.json')

async function Test() {

    const product1 = {
        title: 'Product 1',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '001',
        stock: 10
    }
    const product2 = {
        title: 'Product 2',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '002',
        stock: 10
    }
    const product3 = {
        title: 'Product 3',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '003',
        stock: 10
    }
    const product4 = {
        title: 'Product 4',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '004',
        stock: 10
    }
    const product5 = {
        title: 'Product 5',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '005',
        stock: 10
    }
    const product6 = {
        title: 'Product 6',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '006',
        stock: 10
    }
    const product7 = {
        title: 'Product 7',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '007',
        stock: 10
    }
    const product8 = {
        title: 'Product 8',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '008',
        stock: 10
    }
    const product9 = {
        title: 'Product 9',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '009',
        stock: 10
    }
    const product10 = {
        title: 'Product 10',
        description: 'test product',
        price: 1000,
        thumbnail: 'No image',
        code: '0010',
        stock: 10
    }

//add products
    // await products.addProducts(product1).then(data => console.log(data))
    // await products.addProducts(product2).then(data => console.log(data))
    // await products.addProducts(product3).then(data => console.log(data))
    // await products.addProducts(product4).then(data => console.log(data))
    // await products.addProducts(product5).then(data => console.log(data))
    // await products.addProducts(product6).then(data => console.log(data))
    // await products.addProducts(product7).then(data => console.log(data))
    // await products.addProducts(product8).then(data => console.log(data))
    // await products.addProducts(product9).then(data => console.log(data))
    // await products.addProducts(product10).then(data => console.log(data))

//get all products
    // await products.getProducts().then(data => console.log(data))

//get product by id
    // await products.getProductById(1).then(data => console.log(data))

//update product
    // await products.updateProducts(1, {
    //     title: 'Updated product',
    //     description: 'updated product',
    //     price: 1800,
    //     thumbnail: 'No image',
    //     code: '010',
    //     stock: 15
    // })

//delete product
    // await products.deleteProduct(1)
}
Test()