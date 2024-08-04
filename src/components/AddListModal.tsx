import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { addList } from '../api/listApi';

interface AddListModalProps {
    open: boolean;
    onClose: () => void;
    boardId: string;
    onListAdded: () => void;
}

const AddListModal: React.FC<AddListModalProps> = ({ open, onClose, boardId, onListAdded }) => {
    const [title, setTitle] = useState('');

    const handleAddList = async () => {
        await addList({ title, boardId });
        onListAdded();
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...modalStyle }}>
                <Typography variant="h6" component="h2">
                    Add a new list
                </Typography>
                <TextField
                    fullWidth
                    label="List Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ my: 2 }}
                />
                <Button variant="contained" onClick={handleAddList}>
                    Add List
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

export default AddListModal;
