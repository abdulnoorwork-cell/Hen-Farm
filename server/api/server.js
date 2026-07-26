import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import '../config/db.js'
import {v2 as cloudinary} from 'cloudinary'
import blogRoutes from '../routes/blog.router.js';

const Port = process.env.PORT || 8000;

const app = express();
app.use(cors({origin:process.env.FRONTEND_URL}))
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true,limit:"50mb"}))
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/',
    limits:50*1024*1024
}))

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use('/api/blogs', blogRoutes);

app.get('/',(_,res)=>{
    res.status(200).json({success:true,message:"Response From the server"})
})

app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`)
})

export default app;