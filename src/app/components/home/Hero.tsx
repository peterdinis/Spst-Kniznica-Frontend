'use client';

import { Button } from '@/components/ui/button';
import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={cardVariants}
            className='container relative z-0 mx-auto px-4 xl:px-0'
        >
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='md:w-3/5 md:pt-24 lg:py-32'>
                    <h1 className='f-f-i text-heading-color text-center text-3xl font-black leading-tight tracking-tighter text-gray-900 md:w-7/12 md:text-left lg:text-6xl xl:text-8xl'>
                        SPŠT Knižnica
                    </h1>
                    <h2 className='py-4 text-center text-lg text-gray-700 md:w-8/12 md:py-8 md:text-left lg:text-2xl'>
                        <q>Knihy sú jedinečne prenosné kúzlo - Stephen King</q>
                    </h2>
                    <div className='flex w-full justify-center md:block'>
                        <Button size='lg' variant={'default'}>
                            <Link href='/books'>Zobraziť všekty knihy</Link>
                        </Button>
                        <Button
                            className='ml-4'
                            size='lg'
                            variant={'destructive'}
                        >
                            <Link href='/books'>Školská stránka</Link>
                        </Button>
                    </div>
                </div>
                <div className='m-auto flex h-64 w-1/2 items-center overflow-hidden sm:w-2/5 md:h-auto'>
                    <img
                        className='rounded-xl bg-transparent md:absolute md:-ml-28 md:w-1/2'
                        src='https://www.purshology.com/wp-content/uploads/2020/06/school-technology-FB.png'
                        alt='Empty'
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Hero;
