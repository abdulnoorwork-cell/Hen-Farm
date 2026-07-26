import db from '../config/db.js'
import { v2 as cloudinary } from 'cloudinary'

export const addBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { image } = req.files || {};
        if (!title || !description || !image) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        if (title.length > 120 || title.length < 12) {
            return res.status(400).json({
                success: false,
                message: "Title must be between 12–120 characters"
            });
        }
        const allowedFormats = ["image/jpg", "image/png", "image/jpeg", "image/webp"];
        if (!allowedFormats.includes(image.mimetype)) {
            return res.status(400).json({
                success: false,
                message: "Invalid format (jpg, jpeg, png, webp only)"
            });
        }
        const upload = await cloudinary.uploader.upload(image.tempFilePath, { folder: "blogs" })
        const imageData = {
            public_id: upload.public_id,
            url: upload.secure_url
        }
        await db.query('INSERT INTO blogs (title, description, image) VALUES (?,?,?)', [title, description, JSON.stringify(imageData)])
        res.status(201).json({
            success: true,
            message: "Blog added successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in adding blog: " + error
        });
    }
}

export const getBlogs = async (req, res) => {
    try {
        const [blogs] = await db.query("SELECT id, title, description, image, created_at FROM blogs");
        const result = blogs.map(blog => ({
            ...blog,
            image: JSON.parse(blog.image)
        }))
        res.status(200).json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching blogs: " + error
        });
    }
}