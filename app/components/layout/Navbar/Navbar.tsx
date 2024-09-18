import React from 'react';
import ResponsiveAppBar from './MUI';
import HideAppBar from './AppBar';
import { Box, Typography } from '@mui/material';

export default function Navbar() {
    return (
        <Box>
            <ResponsiveAppBar>
            </ResponsiveAppBar>
            <HideAppBar>
                <Typography variant="h6"></Typography>
            </HideAppBar>
        </Box>
    );
}
