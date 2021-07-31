import axios from 'axios';

const apiBackProducts = process.env.REACT_APP_BACKEND_BASE_URL;

const axiosProducts = axios.create({
  baseURL: apiBackProducts,
});

export default axiosProducts;
