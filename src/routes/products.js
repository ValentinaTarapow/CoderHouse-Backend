const Router = require('express')
const ProductsManager = require('../controllers/productsManager')
const uploader = require('../utils')


const products = new ProductsManager('./db/products.json')
const notFound = { status: 'error', error: "Product not found" }

const router = Router()

/*  ok: 200
    created: 201
    no content: 204
    bad request: 400
    forbidden: 403
    not found: 404
    internal server error: 500
*/

//create endpoint for get "/products"
router.get('/', async (req, res) => {
  try {
      const limit = req.query.limit
      const productsList = await products.getProducts(limit)
      productsList.length === 0 ?
      res.status(204).send({status: 'error', message:'La lista esta vacia'}) :
      res.status(200).send({ status:'success', payload: productsList })
  } catch (error) {
    return {status: 'error', error}
  }
})

//create endpoint product by ID
router.get('/:pid', async (req, res) => {
  try {
      const id = parseInt(req.params.pid)
      const product = await products.getProductById(id)
      !product ?
        res.status(404).send( notFound )
        :
        res.status(200).send({ status:'success', payload: product })
  } catch (error) {
      return {status: 'error', error}
  }
})

//create endpoint post and upload images
router.post('/', uploader.array('thumbnail', 10), async (req, res) => {
  try {
      const imgPaths = req.files.map(file => file.path)
      console.log(imgPaths)
      const product = req.body
      const addedProduct = await products.addProducts(product, imgPaths)
      !addedProduct
      ? res.status(400).send({status: 'error', error: "Could not add product" })
      : res.status(201).send({status:'success', payload: product})
    } catch (error) {
      return {status: 'error', error}
    }
})

router.put('/:pid', async (req, res) => {
    try {
      const id = parseInt(req.params.pid)
      const modification = req.body
      const modifiedProduct = await products.updateProducts(
      id,
      modification
      )
      !modifiedProduct
      ? res.status(400).send({ error: `Could not modify product` })
      : res.status(200).send({ status:'success', payload: modifiedProduct })
    } catch (error) {
      return {status: 'error', error}
    }
})
router.delete("/:pid", async (req, res) => {
  try {
      const { pid } = req.params;
      const removedProduct = await products.deleteById(parseInt(pid))
      !removedProduct
      ? res.status(404).send(notFound)
      : res.status(200).send({ status:'success', message:'product removed' })
  } catch (error) {
      return {status: 'error', error}
  }
})
module.exports = router