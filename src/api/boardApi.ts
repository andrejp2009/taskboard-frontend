// src/api/boardApi.ts
import axios from 'axios';

const API_URL = 'http://localhost:5062/api/board';

// export const getBoardById = async (boardId: string) => {
//     const response = await axios.get(`${API_URL}/${boardId}`);
//     return response.data;
// };

export const createBoard = async (board: { name: string }) => {
    try {
        const response = await axios.post(API_URL, board);
        return response.data;
    } catch (error) {
        console.error('Error creating board:', error);
        throw error;
    }
};

export const getBoardList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching boards:', error);
        throw error;
    }
};

export const getBoardById = async (id: string) => {
    // Фиктивные данные для тестирования
    return {
        id,
        name: 'Sample Board',
        lists: [
            {
                id: '1',
                title: 'To Do',
                tasks: [
                    { id: '1', title: 'Sample Task 1', description: 'Description for task 1' },
                    { id: '2', title: 'Sample Task 2', description: 'Description for task 2' }
                ]
            },
            {
                id: '2',
                title: 'In Progress',
                tasks: [
                    { id: '3', title: 'Sample Task 3', description: 'Description for task 3' }
                ]
            },
            {
                id: '3',
                title: 'Done',
                tasks: []
            }
        ]
    };
};
