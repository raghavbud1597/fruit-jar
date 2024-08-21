import axios from 'axios';

const BASE_URL = 'https://www.fruityvice.com/api/fruit';

export const fetchFruitsByNutrition = async (nutrition: string, min: number = 0, max: number = 1000) => {
    try {
        const response = await axios.get(`${BASE_URL}/${nutrition}?min=${min}&max=${max}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchAllFruits = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchFruitsByFamily = async (family: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/family/${family}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchFruitsByGenus = async (genus: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/genus/${genus}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchFruitsByOrder = async (order: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/order/${order}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};