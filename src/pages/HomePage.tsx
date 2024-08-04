import React from 'react';
import ProtectedPage from './ProtectedPage';

const HomePage: React.FC = () => {
    return (
        <ProtectedPage>
            <div>
                <h1>Home</h1>
                <p>Welcome to the Home Page. You are successfully logged in.</p>
            </div>
        </ProtectedPage>
    );
};

export default HomePage;
