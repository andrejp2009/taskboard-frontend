// src/validation/validationSchema.ts
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    userName: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
});

export const registerSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    userName: yup.string().required('Username is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});
