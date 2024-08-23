import axios from 'axios';
// Created this proxy server to resolve CORS issue
const BASE_URL = 'https://stormy-fjord-61513-1f4798f4ec54.herokuapp.com/api/fruit';

export const fetchAllFruits = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};