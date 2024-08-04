// src/api/cardApi.ts
import axios from 'axios';

const API_URL = 'http://localhost:5062/api/card';

export const addCard = async (card: { title: string; description: string; listId: string }) => {
    const response = await axios.post(`${API_URL}`, card);
    return response.data;
};
