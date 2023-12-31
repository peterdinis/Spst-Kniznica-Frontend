import { Home, School2 } from 'lucide-react';
import { FC } from 'react';

const Services: FC = () => {
    return (
        <div className='overflow-y-hidden'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-8xl container mx-auto'>
                    <div
                        tabIndex={0}
                        aria-label='group of cards'
                        className='flex flex-wrap items-center justify-center focus:outline-none sm:justify-between'
                    >
                        <div
                            tabIndex={0}
                            aria-label='card 1'
                            className='flex w-full flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0'
                        >
                            <h4
                                tabIndex={0}
                                className='pt-5 text-center text-lg font-medium leading-6 text-gray-800 focus:outline-none'
                            >
                                <Home className='h-6 w-6' /> Doma Objednáš
                            </h4>
                        </div>
                        <div
                            tabIndex={0}
                            aria-label='card 2'
                            className='flex w-full flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0'
                        >
                            <h4
                                tabIndex={0}
                                className='pt-5 text-center text-lg font-medium leading-6 text-gray-800 focus:outline-none'
                            >
                                <School2 className='h-6 w-6' /> V škole
                                vyzdhvineš
                            </h4>
                        </div>
                        <div
                            tabIndex={0}
                            aria-label='card 3'
                            className='flex w-full flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0'
                        >
                            <h4
                                tabIndex={0}
                                className='pt-5 text-center text-lg font-medium leading-6 text-gray-800 focus:outline-none'
                            >
                                Ľahké že ? 👀
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
