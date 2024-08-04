// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BoardPage from './pages/BoardPage';
import BoardListPage from './pages/BoardListPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/boardlist" element={<ProtectedRoute><BoardListPage /></ProtectedRoute>} />
                        <Route path="/board/:id" element={<ProtectedRoute><BoardPage /></ProtectedRoute>} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
