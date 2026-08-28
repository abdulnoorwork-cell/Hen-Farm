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

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const [latestProducts, setLatestProducts] = useState([])
  const [latestProductsLoading, setLatestProductsLoading] = useState(false)

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

  const fetchProducts = async () => {
    try {
      setLoading(true)
      let response = await axios.get(`${backendUrl}/api/product`, { withCredentials: true });
      if (response.data) {
        setProducts(response.data)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const fetchLatestProducts = async () => {
    try {
      setLatestProductsLoading(true)
      let response = await axios.get(`${backendUrl}/api/product/latest-products`, { withCredentials: true })
      if (response.data) {
        setLatestProducts(response.data)
        setLatestProductsLoading(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLatestProductsLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs();
    fetchLatestBlogs();
    fetchProducts()
    fetchLatestProducts()
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
    products,
    latestProducts,
    latestProductsLoading,
    fetchLatestProducts
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;