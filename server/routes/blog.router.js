import express from 'express'
import { addBlog, getBlogs, getLatestBlogs, relatedBlogs, singleBlog } from '../controllers/blog.controller.js';

const router = express.Router();
router.get('/',getBlogs)
router.get('/latest-blogs', getLatestBlogs);
router.get('/related-blogs/:category', relatedBlogs);
router.get('/:id', singleBlog);
router.post('/add', addBlog);

export default router;