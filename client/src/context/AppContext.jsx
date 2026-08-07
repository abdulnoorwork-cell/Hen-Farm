import axios from "axios";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchBlogs = async () => {
        try {
            setLoading(true)
            let response = await axios.get(`${backendUrl}/api/blogs`, { withCredentials: true })
            if (response.data) {
                setBlogs(response.data)
                setLoading(false)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBlogs()
        blogs,
        loading
    }, [])
    const values = {
        backendUrl,
        blogs,
        loading
    }

    return (
        <AppContext.Provider value={values} >
            {children}
        </AppContext.Provider >
    )
}

export default React.memo(AppContextProvider)