import db from "../config/db.js";
import { v2 as cloudinary } from 'cloudinary'

export const addProduct = async (req, res) => {
    try {
        const { name, category, price, description, images } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Please enter product name"
            });
        }

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Please select category"
            });
        }

        if (!price) {
            return res.status(400).json({
                success: false,
                message: "Please enter price"
            });
        }

        if (!description) {
            return res.status(400).json({
                success: false,
                message: "Please enter description"
            });
        }

        if (!images) {
            return res.status(400).json({
                success: false,
                message: "Please upload images"
            });
        }

        if (name.length > 120 || name.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Name must be between 8-120 characters"
            });
        }

        if (Number(price) < 10) {
            return res.status(400).json({
                success: false,
                message: "Price must be greater than 10"
            });
        }

        if (description.length < 256) {
            return res.status(400).json({
                success: false,
                message: "Description must be at least 500 characters"
            });
        }

        // 1. Insert product
        const [result] = await db.query(
            "INSERT INTO products (name, category, price, description) VALUES (?, ?, ?, ?)",
            [name, category, price, description]
        );

        const productId = result.insertId;

        // 2. Upload images
        const uploadImages = [];

        const imageList = Array.isArray(images) ? images : [images];

        for (const img of imageList) {
            const valid =
                img.startsWith("data:image/jpeg") ||
                img.startsWith("data:image/jpg") ||
                img.startsWith("data:image/png") ||
                img.startsWith("data:image/webp");

            if (!valid) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid format (jpg, jpeg, png, webp only)"
                });
            }
        }

        for (const img of images) {
            const upload = await cloudinary.uploader.upload(img.tempFilePath);

            uploadImages.push([
                productId,
                JSON.stringify({
                    public_id: upload.public_id,
                    url: upload.secure_url
                })
            ]);
        }

        // 3. Insert images (bulk)
        await db.query(
            "INSERT INTO product_images (product_id, images) VALUES ?",
            [uploadImages]
        );

        res.status(201).json({
            success: true,
            message: "Product added successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error: " + error
        });
    }
};

export const getProducts = async (req, res) => {
    try {
        // 1. Get all products
        const [products] = await db.query(
            "SELECT id, name, category, price, description, created_at FROM products"
        );

        if (!products.length) {
            return res.status(200).json([]);
        }

        // 2. Get all images in ONE query (NO LOOP QUERIES)
        const [images] = await db.query(
            "SELECT product_id, images FROM product_images"
        );

        // 3. Group images by product_id
        const imageMap = {};

        for (const img of images) {
            if (!imageMap[img.product_id]) {
                imageMap[img.product_id] = [];
            }

            try {
                imageMap[img.product_id].push(JSON.parse(img.images));
            } catch (e) {
                imageMap[img.product_id].push(img.images);
            }
        }

        // 4. Attach images to products
        const result = products.map(product => {
            return {
                ...product,
                images: imageMap[product.id] || []
            }
        });

        return res.status(200).json(result);
    } catch (error) {
        console.error("Get Products Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error: " + error
        });
    }
};

export const getLatestProducts = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 4;

        // 1. Get latest products
        const [products] = await db.query(
            "SELECT id, name, category, price, description, created_at FROM products ORDER BY created_at DESC LIMIT ?",
            [limit]
        );

        if (!products.length) {
            return res.status(404).json({
                success: false,
                message: "Products not found"
            });
        }

        // 2. Get all images in ONE query
        const [images] = await db.query(
            "SELECT product_id, images FROM product_images"
        );

        // 3. Group images
        const imageMap = {};

        for (const img of images) {
            if (!imageMap[img.product_id]) {
                imageMap[img.product_id] = [];
            }

            try {
                imageMap[img.product_id].push(JSON.parse(img.images));
            } catch {
                imageMap[img.product_id].push(img.images);
            }
        }

        // 4. Attach images
        const result = products.map(product => {
            return {
                ...product,
                images: imageMap[product.id] || []
            }
        });

        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error:" + error
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (id.length < 1) {
            res.status(200).json({
                success: false,
                message: "Product not found"
            })
        }

        const [imgRows] = await db.query(
            "SELECT images FROM product_images WHERE product_id = ?",
            [id]
        );

        for (const row of imgRows) {
            const images = JSON.parse(row.images);

            if (images.public_id) {
                await cloudinary.uploader.destroy(images.public_id);
            }
        }

        await db.query("DELETE FROM product_images WHERE product_id = ?", [id]);
        await db.query("DELETE FROM products WHERE id = ?", [id]);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};