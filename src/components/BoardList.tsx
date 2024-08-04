// src/components/BoardList.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

interface Board {
    id: string;
    name: string;
}

interface BoardListProps {
    boards: Board[];
    onAddBoard: () => void;
}

const BoardList: React.FC<BoardListProps> = ({ boards, onAddBoard }) => {
    const navigate = useNavigate();

    const handleBoardClick = (id: string) => {
        navigate(`/board/${id}`);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
                Boards
            </Typography>
            {boards.length > 0 ? (
                <List>
                    {boards.map(board => (
                        <ListItem button key={board.id} onClick={() => handleBoardClick(board.id)}>
                            <ListItemText primary={board.name} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body1">No boards available.</Typography>
            )}
            <Button onClick={onAddBoard} variant="contained" sx={{ mt: 3 }}>
                Add New Board
            </Button>
        </Box>
    );
};

export default BoardList;
