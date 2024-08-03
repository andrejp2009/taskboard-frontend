import React, { useContext, ReactNode } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedPageProps {
    children: ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
    const authContext = useContext(AuthContext);

    if (!authContext || !authContext.auth) {
        return <Navigate to="/login" />;
    }

    return <div>{children}</div>;
};

export default ProtectedPage;
