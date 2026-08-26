import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import { UploadCloud } from "lucide-react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from 'react-hot-toast';

const AddPost = () => {

  const editorRef = useRef(null);
  const quillRef = useRef(null)
  const [error, setError] = useState('')
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');

  const { backendUrl, isAdmin, fetchBlogs, fetchLatestBlogs, navigate } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('description', quillRef.current.root.innerHTML);
      formData.append('image', image);

      const response = await axios.post(`${backendUrl}/api/blog/add`, formData, {
        headers: {
          Authorization: `${isAdmin}`
        },
        withCredentials: true
      })
      if (response.data) {
        toast.success(response.data.message);
        await fetchBlogs()
        await fetchLatestBlogs()
        setLoading(false);
        window.location.href = '/dashboard/blogs'
        setImage(false);
        setTitle('');
        setCategory('');
        if (quillRef.current) {
          quillRef.current.root.innerHTML = '';
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
      setError(error.response.data.message)
      if (error.response.status === 500) {
        localStorage.removeItem('token');
        window.location.href = "/dashboard"
        setError(error.response.data.message)
      }
    }
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={onSubmitHandler} className="grid lg:grid-cols-[1fr_340px] gap-6">

        {/* Main Content */}
        <div className="space-y-6">

          {/* Title */}
          <div>
            <div className="bg-white rounded-2xl border border-slate-200 2xl:p-6 p-5">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title..."
                className="w-full 2xl:text-3xl sm:text-2xl text-xl font-bold bg-transparent outline-none placeholder:text-slate-300"
              />
            </div>
            <span className='text-red-600 mt-2 leading-none text-[13px] font-medium'>{error === 'All fields are required' || error === 'Title must be between 12–120 characters' ? error : null}</span>
          </div>

          {/* Editor */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden">
              <div
                ref={editorRef}
                className="sm:min-h-[400px] min-h-[300px] sm:max-h-[600px] max-h-[500px] overflow-y-auto"
              />
            </div>
            <span className='text-red-600 mt-2 leading-none text-[13px] font-medium'>{error === 'All fields are required' || error === 'Description must be at least 256 characters' ? error : null}</span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Featured Image */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">

            <h3 className="font-semibold text-slate-800 mb-4">
              Featured Image
            </h3>

            <label className="cursor-pointer block">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="w-full h-52 rounded-xl object-cover"
                />
              ) : (
                <div className="h-52 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center hover:border-blue-500 transition">
                  <UploadCloud
                    size={40}
                    className="text-slate-400"
                  />

                  <p className="mt-3 text-sm font-medium">
                    Upload Image
                  </p>

                  <span className="text-xs text-slate-400">
                    PNG, JPG, WEBP
                  </span>
                </div>
              )}

              <input
                id="image"
                type="file"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <span className='text-red-600 mt-2 leading-none text-[13px] font-medium'>{error === 'All fields are required' || error === 'Invalid format (jpg, jpeg, png, webp only)' ? error : null}</span>
          </div>

          {/* Category */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <label className="block text-sm font-medium mb-2">
              Category
            </label>

            <select
              defaultValue={0}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-11 border border-slate-300 rounded-xl px-4 outline-none text-sm">
              <option disabled value={0}>Select Category</option>
              <option value="Poultry Farming">Poultry Farming</option>
              <option value='Bird Health'>Bird Health</option>
              <option value='Nutrition'>Nutrition</option>
              <option value='Sustainability'>Sustainability</option>
            </select>
            <span className='text-red-600 mt-2 leading-none text-[13px] font-medium'>{error === 'All fields are required' ? error : null}</span>
          </div>

          {/* Publish */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">

            <button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition cursor-pointer"
            >
              {loading ? 'Adding Post...' : 'Publish Post'}
            </button>

            {/* <button
              type="button"
              className="w-full h-12 mt-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-50"
            >
              Save Draft
            </button> */}

          </div>

        </div>

      </form>
    </div>
  );
};

export default AddPost;