// src/api/apiService.js

import axiosInstance from './axiosInstance';

export const getItems = async () => {
  try {
    const response = await axiosInstance.get('/api/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
