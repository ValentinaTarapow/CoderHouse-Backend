const {Router} = require ('express')
const CartManager = require('../controllers/cartsManager')
const ProductManager = require('../controllers/productsManager.js')

const router = Router()
const productManager = new ProductManager('./db/products.json')
const cartManager = new CartManager('./db/carts.json')
const notFound = { error: "Cart not found" }

/* ok: 200
    created: 201
    no content: 204
    bad request: 400
    forbidden: 403
    not found: 404
    internal server error: 500
    */

//endpoint for post carts
router.post("/", async (req, res) => {
  try {
    await cartManager.createCart()
    res.status(201).send({ status:'success', mensaje: "Cart created successfully" })
  } catch (error) {
    console.log(error)
  }
})

//endpoint get cart by id
router.get("/:cid", async (req, res) => {
  const {cid}  = req.params
  const cart = await cartManager.getCartById(parseInt(cid))
  !cart ? res.status(404).send(notFound) : res.status(200).send({status:'success', cart})
})

//endpoint add product to cart
router.post("/:cid/product/:pid", async (req, res) => {
  const { cid, pid } = req.params
  const product = await productManager.getProductById(parseInt(pid))
  if (product) {
    const cart = await cartManager.addToCart(parseInt(cid), parseInt(pid))
    !cart ? res.status(404).send(notFound) : res.status(200).send(cart)
  } else {
    res.status(404).send({ error: "Product not found" })
  }
})
module.exports = router