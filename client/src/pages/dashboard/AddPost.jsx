import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { FiUploadCloud } from "react-icons/fi";

const AddPost = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])
  return (
    <div className='w-full sm:p-5 sm:pl-6 p-4 sm:text-[15px] text-sm'>
      <form className='w-full sm:mt-4 mt-1 sm:space-y-5 space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor="" className='font-medium mb-2'>Title</label>
          <input type="text" className='bg-white px-5 w-full py-3 rounded outline-none focus:border-black placeholder:text-gray-400 text-sm border border-gray-200' placeholder='Write...' />
        </div>

        {/* Featured Image */}
        <div>
          <label className="block mb-2 font-medium">
            Featured Image
          </label>

          <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
            <FiUploadCloud className="text-4xl text-gray-400 mb-2" />
            <span className="text-gray-600">
              Click to upload image
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-64 h-40 object-cover rounded-lg border border-gray-300"
              />
            </div>
          )}
        </div>
        {/* Description */}
        <div className='flex flex-col'>
          <label htmlFor="" className='font-medium mb-2'>Description</label>
          <div ref={editorRef} className='bg-white px-5 w-full py-3 rounded outline-none focus:border placeholder:text-gray-400 text-sm min-h-[240px] sm:min-h-[40vh]'></div>
        </div>

        <div className="sm:mt-9 mt-8">
          <button
            style={{ fontFamily: "Open Sans" }}
            type="submit"
            className="bg-[#3858e9] hover:bg-blue-700 text-white font-medium px-6 py-3 min-w-[150px] text-center rounded transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Blog
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost