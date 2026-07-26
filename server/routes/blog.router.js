import express from 'express'
import { addBlog, getBlogs } from '../controllers/blog.controller.js';

const router = express.Router();
router.get('/',getBlogs)
router.post('/add', addBlog);

export default router;