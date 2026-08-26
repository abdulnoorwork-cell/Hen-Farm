import express from 'express'
import { addProduct, getProducts } from '../controllers/product.controller.js';

const router = express.Router();
router.get('/',getProducts)
router.post('/add', addProduct);

export default router;