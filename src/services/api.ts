import axios from 'axios';

const BASE_URL = 'https://www.fruityvice.com/api/fruit';

export const fetchAllFruits = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};