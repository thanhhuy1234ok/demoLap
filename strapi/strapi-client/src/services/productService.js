import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

const getAuthHeaders = () => {
    const token = 'c87ad4c97662c50719e2b2802de95e70d070ec5379ab1afe7ff4faae6a438dd1895c40608e90f3f96c271d55fba5e1844a78f6d4f2f25f0b5e3d5c0a094cc8ac97c0fb1e72d5744ab6ed70536ff7cb21a7993d44ace8bea6e40486a9ca26a2bff768c4b1b11c3032230b42d557eaee593d0e9e083ef622979dee7e9c460d0790';
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};


const handleError = (error) => {
    if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
    } else if (error.request) {
        console.error('Request data:', error.request);
    } else {
        console.error('Error message:', error.message);
    }
    console.error('Config:', error.config);
};

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`, getAuthHeaders());
        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
};

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`, getAuthHeaders());
        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
};

export const createProduct = async (product) => {
    try {
        const response = await axios.post(`${API_URL}/products`, { data: product }, getAuthHeaders());
        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
};

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/products/${id}`, { data: product }, getAuthHeaders());
        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${id}`, getAuthHeaders());
        return response.data;
    } catch (error) {
        handleError(error);
        throw error;
    }
};
