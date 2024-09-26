import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
        >
            <CircularProgress sx={{ color: '#0DCCD7' }} size={60} />
        </Box>
    );
}
