import React from 'react';
import { Button } from '@mui/material';

interface FormButtonProps {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ type, children }) => {
    return (
        <Button
            type={type}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontSize: '0.9rem', padding: '8px 0' }}
        >
            {children}
        </Button>
    );
};

export default FormButton;
