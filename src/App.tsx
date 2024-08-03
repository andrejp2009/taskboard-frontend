import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation'; // Добавляем Navigation

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Navigation /> {/* Добавляем Navigation */}
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/home" element={<HomePage />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
