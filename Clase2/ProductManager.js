class ProductManager {

    constructor() {
        this.products = []
    }
    getProducts = () => {
        try {
        return this.products
        } catch (error) {
            console.log(error)
        }
    }
    addProduct = (title, description, price, thumbnail, code, stock) => {
        try {
            const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        let products = this.getProducts()
        let newId
        let newCode = products.find(prod => prod.code === product.code)
        //checks for repeat ids
        products.length === 0 ? newId = 1 : newId = products[products.length - 1 ].id + 1
        if(!Object.values(product).every(value => value)){
            return console.log('All fields are required')
        }
        //checks for repeated code
        if (newCode) return console.log(`A product has already been entered with the code ${product.code}`)
        const newProduct = {...product, id: newId}
        products.push(newProduct)
        return this.getProducts()
        } catch (error) {
            console.log(error)
        }
    }
    getProductById = ( id ) => {
        try {
            const obj = this.products.find(product => product.id === id)
        return obj ? obj : console.log('Not found')
        } catch (error) {
            console.log(error)
        }
    }
}

const aplicacion = new ProductManager()
aplicacion.addProduct('Producto 1','Descripcion de producto 1', 500, 'thumnbail', '001', 10)
aplicacion.addProduct('Producto 2','Descripcion de producto 2', 1000, 'thumbnail', '002', 10)
aplicacion.addProduct('Producto 3','Descripcion de producto 3', 1000, 'thumbnail', '003', 10)
console.log('Showing product with id 1 ', aplicacion.getProductById(1))
console.log('Showing all products ', aplicacion.getProducts())