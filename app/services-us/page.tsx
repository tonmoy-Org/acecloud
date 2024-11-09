import { Box, Container } from '@mui/material';
import React from 'react';
import GlowingSection from '../components/GlowingSection/GlowingSection';

const Services: React.FC = () => {
    return (
        <Container>
            <div className="pt-20 pb-10 lg:pt-32 lg:pb-16">
                <div className="mb-10">
                    <div className="flex flex-wrap justify-between mb-3 md:mb-5 lg:mb-0">
                        <div className="px-2 relative">
                            <div className="inline-flex items-center space-x-2 w-auto mb-3 lg:absolute lg:top-3 lg:left-4">
                                <div className="bg-gray-600 dark:bg-grayDark-100 w-1.5 h-1.5 rounded-full"></div>
                                <div className="font-light text-sm lg:text-base text-[#FFD700] dark:text-grayDark-100">
                                    Services
                                </div>
                            </div>
                            <h1 className="
                            text-2xl md:text-5xl
                            font-sans-primary tracking-tight
                            text-white dark:text-grayDark-100
                            leading-none lg:leading-snug text-balance
                            lg:indent-32
                        ">
                                We’re a digital <br />
                                marketing agency <br />
                                with expertise
                            </h1>
                        </div>
                    </div>
                    <div className="w-full flex md:justify-end">
                        <div className="px-2">
                            <div className="w-full relative max-w-xl pr-10 lg:pr-0 lg:max-w-2xl lg:pl-32">
                                <h2 className="mb-3 text-lg md:text-2xl xl:text-2xl 4xl:text-4xl tracking-tight text-white dark:text-grayDark-100 leading-tight">
                                    We bring our passion for good design to brave brands and deliver something you can shout about.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="w-full">
                        <div className="pt-10 lg:pt-16"
                            style={{ borderTop: '2px solid rgba(225, 225, 225, 0.1)' }}
                        ></div>
                    </div>
                    <div className="mb-5 lg:mb-20">
                        <div className="w-full">
                            <h2 className="lg:text-[13rem]
                                font-sans-primary tracking-tight
                                text-gray-600 dark:text-grayDark-100
                                leading-none text-balance
                            ">
                                Design.
                            </h2>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="px-2 w-full mb-5 lg:mb-0 lg:w-7/16">
                            <h2 className="
                            text-xl md:text-2.5xl xl:text-3xl 4xl:text-4xl
                            font-sans-primary tracking-tight
                            text-[#BABABA] dark:text-grayDark-100
                            leading-tight text-balance pr-10 lg:pr-0
                        ">
                                Brand designers and web designers in-house crafting visuals to match your brand values.
                            </h2>
                        </div>
                        <div className="px-2 lg:px-3 xl:px-4 w-full mb-5 lg:w-8/16 4xl:w-7/16 text-[#BABABA]">
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="w-full">
                        <div className="pt-10 lg:pt-16"
                            style={{ borderTop: '2px solid rgba(225, 225, 225, 0.1)' }}
                        ></div>
                    </div>
                    <div className="mb-5 lg:mb-20">
                        <div className="w-full">
                            <h2 className="lg:text-[13rem]
                                font-sans-primary tracking-tight
                                text-gray-600 dark:text-grayDark-100
                                leading-none text-balance
                            ">
                                Develop.
                            </h2>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="px-2 w-full mb-5 lg:mb-0 lg:w-7/16">
                            <h2 className="
                            text-xl md:text-2.5xl xl:text-3xl 4xl:text-4xl
                            font-sans-primary tracking-tight
                            text-[#BABABA] dark:text-grayDark-100
                            leading-tight text-balance pr-10 lg:pr-0
                        ">
                                Brand designers and web designers in-house crafting visuals to match your brand values.
                            </h2>
                        </div>
                        <div className="px-2 lg:px-3 xl:px-4 w-full mb-5 lg:w-8/16 4xl:w-7/16 text-[#BABABA]">
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="w-full">
                        <div className="pt-10 lg:pt-16"
                            style={{ borderTop: '2px solid rgba(225, 225, 225, 0.1)' }}
                        ></div>
                    </div>
                    <div className="mb-5 lg:mb-20">
                        <div className="w-full">
                            <h2 className="lg:text-[13rem]
                                font-sans-primary tracking-tight
                                text-gray-600 dark:text-grayDark-100
                                leading-none text-balance
                            ">
                                Support.
                            </h2>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="px-2 w-full mb-5 lg:mb-0 lg:w-7/16">
                            <h2 className="
                            text-xl md:text-2.5xl xl:text-3xl 4xl:text-4xl
                            font-sans-primary tracking-tight
                            text-[#BABABA] dark:text-grayDark-100
                            leading-tight text-balance pr-10 lg:pr-0
                        ">
                                Brand designers and web designers in-house crafting visuals to match your brand values.
                            </h2>
                        </div>
                        <div className="px-2 lg:px-3 xl:px-4 w-full mb-5 lg:w-8/16 4xl:w-7/16 text-[#BABABA]">
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="w-full flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">01</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        Brand Identity
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Box sx={{ my: 2 }}>
                <GlowingSection />
            </Box>
        </Container>
    );
};

export default Services;
