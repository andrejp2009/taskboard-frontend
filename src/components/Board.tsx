import React, { useState } from 'react';
import ListComponent from './ListComponent';
import { Box, Typography, Button } from '@mui/material';
import AddListModal from './AddListModal';
import AddTaskModal from './AddTaskModal';

const Board: React.FC<{ board: any; addList: () => void; addCard: () => void }> = ({ board, addList, addCard }) => {
    const [isAddListModalOpen, setAddListModalOpen] = useState(false);
    const [isAddTaskModalOpen, setAddTaskModalOpen] = useState(false);
    const [selectedListId, setSelectedListId] = useState<string | null>(null);

    const handleAddListClick = () => {
        setAddListModalOpen(true);
    };

    const handleAddTaskClick = (listId: string) => {
        setSelectedListId(listId);
        setAddTaskModalOpen(true);
    };

    const handleCloseAddListModal = () => {
        setAddListModalOpen(false);
    };

    const handleCloseAddTaskModal = () => {
        setAddTaskModalOpen(false);
        setSelectedListId(null);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
                {board.name}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                {board.lists.map((list: any) => (
                    <ListComponent key={list.id} list={list} onAddCard={() => handleAddTaskClick(list.id)} />
                ))}
                <Button onClick={handleAddListClick} variant="contained" sx={{ height: 50 }}>
                    Add another list
                </Button>
            </Box>
            <AddListModal 
                open={isAddListModalOpen} 
                onClose={handleCloseAddListModal} 
                boardId={board.id.toString()} 
                onListAdded={addList} 
            />
            <AddTaskModal 
                open={isAddTaskModalOpen} 
                onClose={handleCloseAddTaskModal} 
                listId={selectedListId} 
                onCardAdded={addCard} 
            />
        </Box>
    );
};

export default Board;
