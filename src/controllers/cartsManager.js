const fs = require('fs')

class CartManager {
    constructor(file) {
        this.file = file
    }
    exists() {
        try {
            if (!fs.existsSync(this.file)) {
                return console.log('The file did not exist but was just created')
            } else {
                return true
            }
        } catch (error) {
            console.log(error)
        }
    }
    readFile = async () => {
        try {
            //Leemos el file
            const data = await fs.promises.readFile(this.file)
            return JSON.parse(data)
        } catch (error) {
            if(error.message.includes('Unexpected end of JSON input')) return []
            console.log(`Error reading the file: ${error.message}`)
        }
    }
    //Escribimos el file
    writeFile = async data => {
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data, null, 2)
                )
            }catch(err) {
            console.log(err)
            }
    }
    createCart = async () => {
        try {
            if (!this.exists(this.file)) {
                let cartsArray = []
                const cart = {
                    id: this.#idGen(),
                    products: [],
                }
                cartsArray.push(cart)
                await this.writeFile(cartsArray)
                console.log(`The cart was added with the id: ${cart.id}`)
                return cart.id
            } else {
                if (this.readFile(this.file)) {
                const carts = await this.readFile(this.file)
                const cartsArray = carts === "" ? [] : carts
                if (cartsArray.length === 0 || !cartsArray) {
                    const cart = {
                        id: this.#idGen(),
                        products: [],
                    }
                    cartsArray.push(cart)
                } else {
                    const cart = {
                        id: this.#idGen(cartsArray),
                        products: [],
                    }
                    cartsArray.push(cart)
                    console.log(`The cart was added with the id: ${cart.id}`)
                }
                await this.writeFile(cartsArray)
            }
        }
        } catch (error) {
        console.log(`Error adding cart: ${error.message}`)
        }
    }
    getCartById = async id => {
        try {
            if(this.exists(this.file)){
                let carts = await this.readFile(this.file)
                const cart = carts.find(item => item.id === id)
                return cart ? cart : console.log('No product found')
        }
        return console.log('The db not exist')
        } catch (error) {
            console.log(error)
        }
    }
    addToCart = async (cid, pid) => {
        try {
            if(this.exists(this.file)) {
                const carts = await this.readFile(this.file)
                const cart = carts.find(item => item.id === cid)
            if(cart) {
                const addProduct = cart.products.find(item => item.id === pid)
                if(addProduct) {
                    addProduct.quantity++
                    console.log(JSON.stringify(cart, null, 2))
                }else{
                    cart.products.push({id: pid, quantity: 1 })
                    console.log(JSON.stringify(cart, null, 2))
                }
                await this.writeFile(carts)
                return {status: 'success', cart}
            }
            throw new Error(`The cart with the id was not found: ${cid}`)
        }
        } catch (error) {
            console.log(error)
        }
    }
    #idGen(productsArray = []) {
        const id =
        productsArray.length === 0
            ? 1
            : productsArray[productsArray.length - 1].id + 1
        return id
    }
}
module.exports = CartManager