// src/components/Auth/FormTextField.tsx
import React from 'react';
import TextField from '@mui/material/TextField';
import { ControllerRenderProps } from 'react-hook-form';

interface FormTextFieldProps extends ControllerRenderProps {
    label: string;
    name: string;
    autoComplete?: string;
    type?: string;
    error?: boolean;
    helperText?: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({ label, name, autoComplete, type, error, helperText, ...field }) => {
    return (
        <TextField
            {...field}
            margin="normal"
            required
            fullWidth
            id={name}
            label={label}
            name={name}
            autoComplete={autoComplete}
            type={type}
            error={error}
            helperText={helperText}
        />
    );
};

export default FormTextField;
