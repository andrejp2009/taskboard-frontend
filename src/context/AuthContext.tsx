// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    auth: boolean;
    setAuth: (auth: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<boolean>(() => !!localStorage.getItem('token'));

    useEffect(() => {
        const token = localStorage.getItem('token');
        setAuth(!!token);
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
