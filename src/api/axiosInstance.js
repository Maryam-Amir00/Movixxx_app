import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    params: {
        apikey: import.meta.env.VITE_OMDB_API_KEY
    }
});

export default axiosInstance;