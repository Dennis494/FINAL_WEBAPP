// src/api/axiosInstance.js

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Use environment variable
  withCredentials: true, // Ensure credentials are sent
});

export default instance;
