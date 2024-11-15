import React from 'react';
import Marquee from 'react-fast-marquee';

export default function CommonLine() {
    return (
        <div className='py-10'>
            <Marquee direction='right' speed={40} gradient={false}>
                <span className='text-[6.6rem]'>Collaborate with our team to create meaningful solutions.</span>
            </Marquee>
            <Marquee direction='left' speed={40} gradient={false}>
                <span className='text-[6.6rem]'>Contact us to start your next project today!</span>
            </Marquee>
        </div>
    );
}
