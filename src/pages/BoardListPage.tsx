// src/pages/BoardsPage.tsx
import React, { useEffect, useState } from 'react';
import BoardList from '../components/BoardList';
import { getBoardList, createBoard } from '../api/boardApi';

interface BoardType {
    id: string;
    name: string;
}

const BoardListPage: React.FC = () => {
    const [boards, setBoards] = useState<BoardType[]>([]);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const data = await getBoardList();
                setBoards(data);
            } catch (error) {
                console.error('Error fetching boards:', error);
            }
        };

        fetchBoards();
    }, []);

    const handleAddBoard = async () => {
        try {
            const newBoard = await createBoard({ name: 'New Board' }); // можно добавить форму для ввода имени новой доски
            setBoards(prevBoards => [...prevBoards, newBoard]);
        } catch (error) {
            console.error('Error creating board:', error);
        }
    };

    return <BoardList boards={boards} onAddBoard={handleAddBoard} />;
};

export default BoardListPage;
