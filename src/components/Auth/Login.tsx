// src/components/Auth/Login.tsx
import React, { useState, useContext } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations/validationSchema';
import { login } from '../../api/authApi';
import Typography from '@mui/material/Typography';
import FormContainer from './FormContainer';
import FormTextField from './FormTextField';
import FormButton from './FormButton';
import { AuthContext } from '../../context/AuthContext';

interface LoginFormInputs {
    userName: string;
    password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema)
    });
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const response = await login(data);
            const token = response.data.token;

            // Сохранение токена в локальное хранилище
            localStorage.setItem('token', token);

            // Обновление состояния авторизации
            if (authContext) {
                authContext.setAuth(true);
            }

            navigate('/boardlist'); // Перенаправление на страницу с досками
        } catch (err: any) {
            if (err.response && err.response.data) {
                const errorData = err.response.data;
                if (errorData.errors) {
                    const validationErrors = Object.values(errorData.errors).flat().join(' ');
                    setError(`Validation error: ${validationErrors}`);
                } else if (errorData.message) {
                    setError(`Login failed: ${errorData.message}`);
                } else {
                    setError('Login failed: Unknown error');
                }
            } else {
                setError('Login failed: ' + err.message);
            }
        }
    };

    const fields: Array<{ name: keyof LoginFormInputs; label: string; autoComplete: string; type?: string }> = [
        { name: 'userName', label: 'Username', autoComplete: 'username' },
        { name: 'password', label: 'Password', autoComplete: 'current-password', type: 'password' }
    ];

    return (
        <FormContainer title="TaskBoard" subtitle="Sign in to continue">
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
                                error={!!(errors as FieldErrors<LoginFormInputs>)[name]}
                                helperText={(errors as FieldErrors<LoginFormInputs>)[name]?.message || ''}
                            />
                        )}
                    />
                ))}
                {error && <Typography color="error" variant="body2" sx={{ fontSize: '0.8rem' }}>{error}</Typography>}
                <FormButton type="submit">
                    Login
                </FormButton>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', fontSize: '0.8rem' }}>
                    Forgot password? <RouterLink to="/reset-password">Reset</RouterLink>
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', fontSize: '0.8rem' }}>
                    Don't have an account? <RouterLink to="/register">Sign up</RouterLink>
                </Typography>
            </form>
        </FormContainer>
    );
};

export default Login;
