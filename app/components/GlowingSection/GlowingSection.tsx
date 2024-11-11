'use client';

import { Button, Container } from '@mui/material';
import { useAnimate, useInView, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';

const GlowingSection = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: 1 })
        }
    }, [isInView])

    return (
        <Container>
            <div
                ref={scope}
                className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 lg:mt-28"
            >
                <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
                    <div
                        className={`absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#1D4ED8] via-transparent to-transparent text-white transition-opacity duration-1000 delay-700 ease-out ${isInView ? 'opacity-100' : 'opacity-0'
                            } [--conic-position:from_70deg_at_center_top]`}
                        style={{
                            backgroundImage: 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
                            willChange: 'auto',
                        }}
                    >
                        <div className="absolute w-full h-40 bottom-0 z-20 bg-background [mask-image:linear-gradient(to_top,white,transparent)]"></div>
                        <div className="absolute w-40 h-full bottom-0 z-20 bg-background [mask-image:linear-gradient(to_right,white,transparent)]"></div>
                    </div>

                    <div
                        className={`absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#1D4ED8] text-white transition-opacity duration-1000 delay-700 ease-out ${isInView ? 'opacity-100' : 'opacity-0'
                            } [--conic-position:from_290deg_at_center_top]`}
                        style={{
                            backgroundImage: 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
                            willChange: 'auto',
                        }}
                    >
                        <div className="absolute w-40 h-full right-0 bottom-0 z-20 bg-background [mask-image:linear-gradient(to_left,white,transparent)]"></div>
                        <div className="absolute w-full h-40 right-0 bottom-0 z-20 bg-background [mask-image:linear-gradient(to_top,white,transparent)]"></div>
                    </div>

                    <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-[8rem]"></div>
                    <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                    <div
                        className={`absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#1D4ED8] blur-2xl transition-opacity duration-1000 delay-300 ease-out ${isInView ? 'opacity-100' : 'opacity-0'
                            } [--conic-position:from_290deg_at_center_top]`}
                    ></div>


                    {/* Glowing Tube Effect */}
                    <div
                        className={`absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#1D4ED8] transition-transform duration-1000 transition-delay: 450ms ease-out ${isInView ? 'scale-x-200' : 'scale-x-0'}`}
                        style={{
                            transformOrigin: 'center',
                        }}
                    ></div>

                    <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background"></div>
                </div>

                <div
                    className={`relative z-50 flex -translate-y-80 flex-col items-center px-5`}>
                    <div className="flex flex-col items-center justify-center relative w-full text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.4 }}
                        >
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold lg:mt-8 text-white">
                                Boost Your Agency's Performance <br />
                                with <span className="text-[#1D4ED8]">AceCloud</span>
                            </h2>
                            <p className="text-white mt-6 max-w-md mx-auto">
                                Unlock the full potential of your agency with <span className="text-[#1D4ED8]">AceCloud</span>. Our specialized teams and streamlined processes are designed to enhance your client outreach, sales, and service delivery.
                            </p>
                            <Button
                                sx={{ textTransform: 'none !important', my: 4 }}
                                variant="outlined"
                                component={Link}
                                href="/book-meeting"
                                className="relative inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium text-slate-200 border-[1.7px] border-[#1D4ED8] rounded-lg animated-border"
                            >
                                <span className="absolute inset-0 transition-all duration-200 transform -translate-x-full rounded-lg group-hover:translate-x-0"></span>
                                <span className="relative z-10">
                                    Start Transforming Your Agency Today
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-right w-4 h-4 ml-2"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default GlowingSection;
