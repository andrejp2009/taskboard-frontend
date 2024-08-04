// src/styles/formContainerStyles.ts
import { SxProps, Theme } from '@mui/material/styles';

export const containerStyle: SxProps<Theme> = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export const paperStyle: SxProps<Theme> = {
    padding: '20px'
};

export const boxStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

export const headerBoxStyle: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    mb: 2
};

export const avatarStyle: SxProps<Theme> = {
    width: 40,
    height: 40,
    bgcolor: 'transparent',
    mr: 1
};

export const iconStyle: SxProps<Theme> = {
    width: '100%',
    height: '100%',
    color: '#3f51b5'
};

export const titleStyle: SxProps<Theme> = {
    fontSize: '1.2rem'
};

export const subtitleStyle: SxProps<Theme> = {
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem'
};
