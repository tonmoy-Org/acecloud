import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const HeroInsights = ({ title, subtitle, services }) => {
    return (
        <Box sx={{ mt: { xs: 0, md: 10 } }}>
            <div className="px-2">
                <div className="w-full">
                    <div
                        className="pt-10 lg:pt-16"
                        style={{ borderTop: '2px solid rgba(225, 225, 225, 0.1)' }}
                    ></div>
                </div>
                <div className="mb-5 lg:mb-20">
                    <div className="w-full">
                        <h2 className="lg:text-[8rem] text-[2rem] font-sans-primary tracking-tight text-gray-600 dark:text-grayDark-100 leading-none text-balance">
                            {title}
                        </h2>
                    </div>
                </div>
                <div className="w-full lg:flex justify-between">
                    <div className="w-full mb-5 lg:mb-0 lg:w-7/16">
                        <h2 className="text-[15px] md:text-2.5xl xl:text-3xl 4xl:text-4xl font-sans-primary tracking-tight text-[#BABABA] dark:text-grayDark-100 leading-tight text-balance lg:pr-0">
                            {subtitle}
                        </h2>
                    </div>
                    <div className="lg:px-3 xl:px-4 w-full mb-5 lg:w-8/16 4xl:w-7/16 text-[#BABABA]">
                        {services.map((service, index) => (
                            <a
                                key={index}
                                className="w-full lg:flex items-center justify-between border-b border-solid border-gray-100 py-4 group dark:border-grayDark-300 dark:text-white xl:hover:border-gray-600 lg:dark:hover:border-grayDark-100"
                            >
                                <div className="inline-flex items-center space-x-6">
                                    <div className="font-light relative z-10">{`0${index + 1}`}</div>
                                    <div className="text-lg transition-transform transform 4xl:text-xl xl:group-hover:translate-x-2">
                                        {service}
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center dark:bg-grayDark-400 xl:hidden">
                                    <svg
                                        className="w-2.5 h-2.5 fill-current text-gray-600 dark:text-grayDark-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        {/* <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" /> */}
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    );
};

// Prop Types
HeroInsights.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HeroInsights;
