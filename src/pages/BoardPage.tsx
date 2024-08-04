import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../components/Board';
import { getBoardById } from '../api/boardApi';

interface BoardType {
    id: string;
    name: string;
    lists: Array<any>;
}

const BoardPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [board, setBoard] = useState<BoardType | null>(null);

    useEffect(() => {
        const fetchBoard = async (boardId: string) => {
            const data = await getBoardById(boardId);
            setBoard(data as BoardType);
        };
        
        if (id) {
            fetchBoard(id);
        }
    }, [id]);

    const handleListAdded = () => {
        if (id) {
            getBoardById(id).then(data => setBoard(data as BoardType));
        }
    };

    const handleCardAdded = () => {
        if (id) {
            getBoardById(id).then(data => setBoard(data as BoardType));
        }
    };

    return (
        <div>
            {board ? (
                <Board 
                    board={board} 
                    addList={handleListAdded} 
                    addCard={handleCardAdded} 
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BoardPage;
