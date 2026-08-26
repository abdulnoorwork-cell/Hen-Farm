import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [blogs, setBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);
  const [latestBlogLoading, setLatestBlogLoading] = useState(false);

  const isAdmin = true;
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      setBlogLoading(true);

      const response = await axios.get(
        `${backendUrl}/api/blog`,
        { withCredentials: true }
      );

      setBlogs(response.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setBlogLoading(false);
    }
  };

  const fetchLatestBlogs = async () => {
    try {
      setLatestBlogLoading(true);

      let response = await axios.get(
        `${backendUrl}/api/blog/latest-blogs`,
        { withCredentials: true }
      );
      setLatestBlogs(response.data || [])

    } catch (error) {
      console.log(error);
    } finally {
      setLatestBlogLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchLatestBlogs();
  }, []);

  const values = {
    backendUrl,
    blogs,
    latestBlogs,
    blogLoading,
    latestBlogLoading,
    fetchBlogs,
    fetchLatestBlogs,
    isAdmin,
    navigate,
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;