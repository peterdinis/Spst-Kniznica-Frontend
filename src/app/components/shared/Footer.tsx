'use client';

import { motion } from 'framer-motion';
import ScrollToTop from 'react-scroll-to-top';

const Footer: React.FC = () => {
    const footerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.5,
            },
        },
    };

    return (
        <motion.footer
            className='relative mt-1 pb-6 pt-8'
            variants={footerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap items-center justify-center md:justify-between'>
                    <div className='mx-auto w-full px-4 text-center md:w-6/12'>
                        <div className='text-blueGray-500 py-1 text-sm font-semibold'>
                            <a
                                href='https://www.spsbj.sk/'
                                className='text-blueGray-500 text-2xl hover:text-gray-800'
                            >
                                <motion.span
                                    className='inline-block'
                                    whileHover={{ scale: 1.1 }}
                                >
                                    &copy; SPŠT Knižnica 2024
                                </motion.span>{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth={true} />
        </motion.footer>
    );
};

export default Footer;
