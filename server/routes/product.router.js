import express from 'express'
import { addProduct, deleteProduct, getLatestProducts, getProducts } from '../controllers/product.controller.js';

const router = express.Router();
router.get('/',getProducts)
router.get('/latest-products', getLatestProducts);
router.post('/add', addProduct);
router.delete('/delete/:id', deleteProduct);

export default router;