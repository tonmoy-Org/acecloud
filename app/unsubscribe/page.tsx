'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography, Container, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import banner from '@/public/banner/03.png';

interface FormValues {
    email: string;
}

export default function Unsubscribe() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/unsubscribe', {
                email: data.email,
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Unsubscribed',
                    text: 'You will no longer receive our newsletters.',
                    confirmButtonColor: '#0DCCD7',
                });
                reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Unable to process your request. Please try again later.',
                    confirmButtonColor: '#0DCCD7',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while processing your request. Please try again.',
                confirmButtonColor: '#0DCCD7',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                background: `url(${banner.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pt: 10,
                pb: 10,
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1,
                }}
            />

            {/* Main Content */}
            <Container maxWidth="sm" sx={{ zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            marginBottom: '24px',
                            color: '#FFF',
                            textTransform: 'uppercase',
                        }}
                    >
                        Unsubscribe from our Mailing List
                    </Typography>

                    <Box
                        bgcolor="rgba(30, 30, 30, 0.9)"
                        p={4}
                        sx={{
                            borderRadius: '12px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(6px)',
                        }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <TextField
                                    label="Email Address"
                                    fullWidth
                                    variant="outlined"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Please enter a valid email address',
                                        },
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    InputProps={{
                                        style: { color: 'white' },
                                    }}
                                    sx={{
                                        mb: 3,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#555' },
                                            '&:hover fieldset': { borderColor: '#0DCCD7' },
                                            '&.Mui-focused fieldset': { borderColor: '#0DCCD7' },
                                        },
                                        '& .MuiInputLabel-root': { color: '#999' },
                                        '&:hover .MuiInputLabel-root': { color: '#0DCCD7' },
                                        '& .MuiInputLabel-root.Mui-focused': { color: '#0DCCD7' },
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <Button
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                    disabled={loading}
                                    sx={{
                                        backgroundColor: '#0DCCD7',
                                        color: 'white',
                                        textTransform: 'uppercase',
                                        borderRadius: '20px',
                                        padding: '12px 0',
                                        '&:hover': {
                                            backgroundColor: '#00A5D4',
                                        },
                                    }}
                                >
                                    {loading ? <CircularProgress size={24} sx={{ color: '#FFF' }} /> : 'Unsubscribe'}
                                </Button>
                            </motion.div>
                        </form>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
