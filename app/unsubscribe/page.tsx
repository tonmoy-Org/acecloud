'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography, Container, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import banner from '@/public/banner/03.png';
import ApproachSection from '../components/SectionTitle/SectionTitle';

interface FormValues {
    email: string;
}

export default function Unsubscribe() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        try {
            const response = await axios.post('https://api.web3forms.com/submit',
                JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY_NEWSLETTER,
                    subject: 'Unsubscription Request Ace Cloud',
                    email: data.email,
                    from_name: data.email,
                    message: 'Unsubscription Request',
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Unsubscribed',
                    text: 'You have successfully been removed from our mailing list.',
                    confirmButtonColor: '#0DCCD7',
                });
                reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an issue with your unsubscription request. Please try again later.',
                    confirmButtonColor: '#0DCCD7',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An unexpected error occurred while processing your request. Please try again.',
                confirmButtonColor: '#0DCCD7',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ position: 'relative', color: 'white', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 10, pb: 10 }}>
            <Container maxWidth="sm">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <ApproachSection
                        header="Unsubscribe"
                        title="Unsubscribe from Our Newsletter"
                        description="We understand that preferences change. If you'd no longer like to receive updates, please enter your email address below to be removed from our mailing list. We hope to stay in touch in the future!"
                    />
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
                                        required: 'Please enter your email address.',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Please enter a valid email address.',
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
                                            '&:hover fieldset': { borderColor: 'rgba(225, 225, 225, 0.1)' },
                                            '&.Mui-focused fieldset': { borderColor: 'rgba(225, 225, 225, 0.1)' },
                                        },
                                        '& .MuiInputLabel-root': { color: '#999' },
                                        '&:hover .MuiInputLabel-root': { color: '' },
                                        '& .MuiInputLabel-root.Mui-focused': { color: 'gray' },
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
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                        textTransform: 'none',
                                        color: 'black',
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
