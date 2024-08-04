import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface CardComponentProps {
    title: string;
    description: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, description }) => {
    return (
        <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
