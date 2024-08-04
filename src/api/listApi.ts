// src/api/listApi.ts
import axios from 'axios';

const API_URL = 'http://localhost:5062/api/list';

export const addList = async (list: { title: string; boardId: string }) => {
    const response = await axios.post(`${API_URL}`, list);
    return response.data;
};
