'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography } from '@mui/material';

const NotFound = () => {
    const router = useRouter();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f4f4f4',
                padding: 3,
            }}
        >
            <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#333' }}>
                404
            </Typography>
            <Typography variant="h4" sx={{ marginBottom: 2, color: '#666' }}>
                Oops! Page not found
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4, color: '#888' }}>
                The page you’re looking for doesn’t exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => router.push('/')}
            >
                Go Back to Home
            </Button>
        </Box>
    );
};

export default NotFound;
