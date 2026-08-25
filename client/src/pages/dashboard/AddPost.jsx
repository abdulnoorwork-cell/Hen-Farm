import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { UploadCloud, ImageIcon, Save } from "lucide-react";

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
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <form className="grid lg:grid-cols-[1fr_340px] gap-6">

        {/* Main Content */}
        <div className="space-y-6">

          {/* Title */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <input
              type="text"
              placeholder="Enter blog title..."
              className="w-full text-4xl font-bold bg-transparent outline-none placeholder:text-slate-300"
            />
          </div>

          {/* Editor */}
          <div className="bg-white rounded-2xl overflow-hidden">
            <div
              ref={editorRef}
              className="min-h-[450px]"
            />
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
              {preview ? (
                <img
                  src={preview}
                  alt=""
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
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Category */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <label className="block text-sm font-medium mb-2">
              Category
            </label>

            <select className="w-full h-11 border border-slate-300 rounded-xl px-4 outline-none text-sm">
              <option>Technology</option>
              <option>Business</option>
              <option>Marketing</option>
              <option>Lifestyle</option>
            </select>
          </div>

          {/* Publish */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5">

            <button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition"
            >
              Publish Post
            </button>

            <button
              type="button"
              className="w-full h-12 mt-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-50"
            >
              Save Draft
            </button>

          </div>

        </div>

      </form>
    </div>
  );
};

export default AddPost;