import axios from 'axios';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'http://www.fruityvice.com/api/fruit';

export const fetchAllFruits = async () => {
    try {
        const response = await axios.get(`${PROXY_URL}${BASE_URL}/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};