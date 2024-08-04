// src/components/Auth/Register.tsx
import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validations/validationSchema';
import { register } from '../../api/authApi';
import Typography from '@mui/material/Typography';
import FormContainer from './FormContainer';
import FormTextField from './FormTextField';
import FormButton from './FormButton';

interface RegisterFormInputs {
    email: string;
    userName: string;
    password: string;
}

const Register: React.FC = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
        resolver: yupResolver(registerSchema)
    });
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: RegisterFormInputs) => {
        try {
            await register(data);
            navigate('/login');
        } catch (err: any) {
            if (err.response && err.response.data) {
                const errorData = err.response.data;
                if (errorData.errors) {
                    const validationErrors = Object.values(errorData.errors).flat().join(' ');
                    setError(`Validation error: ${validationErrors}`);
                } else if (errorData.message) {
                    setError(`Registration failed: ${errorData.message}`);
                } else {
                    setError('Registration failed: Unknown error');
                }
            } else {
                setError('Registration failed: ' + err.message);
            }
        }
    };

    const fields: Array<{ name: keyof RegisterFormInputs; label: string; autoComplete: string; type?: string }> = [
        { name: 'email', label: 'Email Address', autoComplete: 'email' },
        { name: 'userName', label: 'Username', autoComplete: 'username' },
        { name: 'password', label: 'Password', autoComplete: 'current-password', type: 'password' }
    ];

    return (
        <FormContainer title="TaskBoard" subtitle="Sign up to continue">
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: '1rem' }}>
                {fields.map(({ name, label, autoComplete, type }) => (
                    <Controller
                        key={name}
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <FormTextField
                                {...field}
                                label={label}
                                name={name}
                                autoComplete={autoComplete}
                                type={type}
                                error={!!(errors as FieldErrors<RegisterFormInputs>)[name]}
                                helperText={(errors as FieldErrors<RegisterFormInputs>)[name]?.message || ''}
                            />
                        )}
                    />
                ))}
                {error && <Typography color="error" variant="body2" sx={{ fontSize: '0.8rem' }}>{error}</Typography>}
                <FormButton type="submit">
                    Register
                </FormButton>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', fontSize: '0.8rem' }}>
                    Already have an account? <RouterLink to="/login">Login</RouterLink>
                </Typography>
            </form>
        </FormContainer>
    );
};

export default Register;
