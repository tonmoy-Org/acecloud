'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography, Divider, Container, Grid, CircularProgress } from '@mui/material';
import { LocationOn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setLoading(true);  // Start loading indicator
        try {
            const response = await axios.post('https://api.web3forms.com/submit', {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: "New Contact Form Submission from Your Website Ace Cloud",
                from_name: data.name,
                from_email: data.email,
                to: "contact@acecloud.com",
                message: data.message,
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: "Your message has been sent successfully! We'll get back to you shortly.",
                    confirmButtonColor: '#0DCCD7',
                });
                reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Something went wrong. Please try again later.",
                    confirmButtonColor: '#0DCCD7',
                });
            }
        } catch (error) {
            console.error("Error sending email:", error);

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: "There was an error sending your message. Please check your connection and try again.",
                confirmButtonColor: '#0DCCD7',
            });
        } finally {
            setLoading(false);  // Stop loading indicator
        }
    };

    return (
        <Box id="contact" sx={{ pt: 10 }}>
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <Typography
                    variant='h4'
                    component='h1'
                    sx={{ textAlign: 'center', color: 'white', fontWeight: 900, letterSpacing: 2, mb: 8 }}
                >
                    Get In Touch
                </Typography>
            </motion.div>

            <Container>
                <Grid container spacing={4}>
                    {/* Contact Form */}
                    <Grid item xs={12} md={6}>
                        <Box
                            bgcolor="#1E1E1E"
                            p={4}
                            color="white"
                            sx={{ borderRadius: '16px' }}
                        >
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                {/* Name Field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <TextField
                                        label="Name"
                                        fullWidth
                                        variant="outlined"
                                        {...register('name', { required: 'Name is required' })}
                                        error={!!errors.name}
                                        helperText={errors.name ? errors.name.message : ''}
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

                                {/* Email Field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <TextField
                                        label="Email"
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

                                {/* Message Field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <TextField
                                        label="Message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        variant="outlined"
                                        {...register('message', { required: 'Message is required' })}
                                        error={!!errors.message}
                                        helperText={errors.message ? errors.message.message : ''}
                                        InputProps={{
                                            style: { color: 'white' },
                                        }}
                                        sx={{
                                            mb: 4,
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

                                {/* Submit Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={loading}
                                        startIcon={loading && <CircularProgress size={20} color="inherit" />}
                                        sx={{
                                            backgroundColor: '#0DCCD7',
                                            borderRadius: '20px',
                                            textTransform: 'none',
                                            color: '#FFF',
                                            '&:hover': {
                                                backgroundColor: '#00A5D4',
                                            },
                                        }}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </motion.div>
                            </form>
                        </Box>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Box p={4} color="white">
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    sx={{ fontWeight: 'bold', mb: 3, color: '#0DCCD7' }}
                                >
                                    Contact Information
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Have any questions or concerns? Feel free to reach out to us at any time!
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Typography variant="body1" gutterBottom>
                                    <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    contact@acecloud.com
                                </Typography>
                                <Typography variant="body1">
                                    <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Ace Cloud, New York, NY
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* Google Map Iframe */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <Box mt={6}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.30943582457!2d-79.37805805!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1726222812547!5m2!1sen!2sbd"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Box>
            </motion.div>
        </Box>
    );
}
