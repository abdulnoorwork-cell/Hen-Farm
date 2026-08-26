import db from '../config/db.js'
import { v2 as cloudinary } from 'cloudinary'

export const addBlog = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const { image } = req.files || {};

        if (!title || !description || !image || !category) {
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

        if (description.length < 256) {
            return res.status(400).json({
                success: false,
                message: "Description must be at least 256 characters"
            });
        }

        const allowedFormat = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

        if (!allowedFormat.includes(image.mimetype)) {
            return res.status(400).json({
                success: false,
                message: "Invalid format (jpg, jpeg, png, webp only)"
            });
        }

        // Upload to Cloudinary
        const upload = await cloudinary.uploader.upload(image.tempFilePath, {
            folder: "blogs"
        });

        const imageData = {
            publicid: upload.publicid,
            url: upload.secure_url
        };

        // Insert into DB
        await db.query(
            "INSERT INTO blogs (title, category, description, image) VALUES (?, ?, ?, ?)",
            [title, category, description, JSON.stringify(imageData)]
        );

        res.status(201).json({
            success: true,
            message: "Blog added successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error: " + error
        });
    }
};

export const getBlogs = async (req, res) => {
    try {
        const [blogs] = await db.query("SELECT id, title, category, description, image, created_at FROM blogs");
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

export const getLatestBlogs = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 3;

        const [blogs] = await db.query(
            "SELECT id, title, category, image, description, created_at FROM blogs ORDER BY created_at DESC LIMIT ?",
            [limit]
        );

        const result = blogs.map(blog => ({
            ...blog,
            image: JSON.parse(blog.image)
        }));

        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

export const relatedBlogs = async (req, res) => {
    try {
        const { category } = req.params;
        const [blogs] = await db.query("SELECT id, title, category, image, description, created_at FROM blogs WHERE category = ?", [category]);
        const result = blogs.map(blog => ({
            ...blog,
            image: JSON.parse(blog.image)
        }))
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching blogs: " + error
        });
    }
}

export const singleBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            "SELECT id, title, description, category, image, created_at FROM blogs WHERE id = ?",
            [id]
        );

        if (!rows.length) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        const blog = rows[0];

        blog.image = JSON.parse(blog.image);

        res.status(200).json(blog);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching blog"
        });
    }
};