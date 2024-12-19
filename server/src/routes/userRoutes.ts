import express from 'express'
import { createProduct, getProducts, getSingleProduct } from '../controller/productController'
import { login, register } from '../controller/userController'
import uploadImage from '../helpers/multer'
const router = express.Router()


router.get('/get-products', getProducts)
router.get('/product/:productId', getSingleProduct)
router.post('/create-product', uploadImage, createProduct)
router.post('/login', login)
router.post('/register', register)

export default router
