import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBarProps } from './AppBarProps';

const AppBarComponent: React.FC<AppBarProps> = ({ title, position = 'static', color = 'primary', children }) => {
  return (
    <AppBar position={position} color={color}>
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

AppBarComponent.displayName = 'AppBarComponent';

export default AppBarComponent;
