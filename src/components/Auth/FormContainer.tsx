// src/components/Auth/FormContainer.tsx
import React from 'react';
import { Container, Avatar, Typography, Paper, Box } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { containerStyle, paperStyle, boxStyle, headerBoxStyle, avatarStyle, iconStyle, titleStyle, subtitleStyle } from '../../styles/formContainerStyles';

interface FormContainerProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ title, subtitle, children }) => {
    return (
        <Container component="main" maxWidth="xs" sx={containerStyle}>
            <Paper elevation={3} sx={paperStyle}>
                <Box sx={boxStyle}>
                    <Box sx={headerBoxStyle}>
                        <Avatar sx={avatarStyle}>
                            <AssignmentIndIcon sx={iconStyle} />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={titleStyle}>
                            TaskBoard
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={subtitleStyle}>
                        {subtitle}
                    </Typography>
                    {children}
                </Box>
            </Paper>
        </Container>
    );
};

export default FormContainer;
