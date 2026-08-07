import express from 'express'
import { addBlog, getBlogs, latestBlogs } from '../controllers/blog.controller.js';

const router = express.Router();
router.get('/',getBlogs)
router.get('/latest',latestBlogs)
router.post('/add', addBlog);

export default router;