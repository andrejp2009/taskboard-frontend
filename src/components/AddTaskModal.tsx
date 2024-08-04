import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { addCard } from '../api/cardApi';

interface AddTaskModalProps {
    open: boolean;
    onClose: () => void;
    listId: string | null;
    onCardAdded: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, onClose, listId, onCardAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = async () => {
        if (listId) {
            await addCard({ title, description, listId });
            onCardAdded();
            onClose();
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...modalStyle }}>
                <Typography variant="h6" component="h2">
                    Add a new task
                </Typography>
                <TextField
                    fullWidth
                    label="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ my: 2 }}
                />
                <TextField
                    fullWidth
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ my: 2 }}
                />
                <Button variant="contained" onClick={handleAddTask}>
                    Add Task
                </Button>
            </Box>
        </Modal>
    );
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default AddTaskModal;
