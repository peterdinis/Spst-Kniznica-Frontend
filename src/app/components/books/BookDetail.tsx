import { FC } from 'react';
import Header from '../shared/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BookDetail: FC = () => {
    return (
        <>
            <Header text='Detail knihy' />
            <section className='body-font mt-2 overflow-hidden bg-white text-gray-700'>
                <div className='container mx-auto px-5 py-12'>
                    <div className='mx-auto flex flex-wrap lg:w-4/5'>
                        <img
                            alt='ecommerce'
                            className='w-full rounded-lg border object-cover object-center drop-shadow-md lg:w-1/2'
                            src='https://picsum.photos/200/300'
                        />
                        <div className='mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10'>
                            <div>
                                <h1 className='title-font mb-1 text-4xl font-medium text-gray-900'>
                                    <span className='font-bold'>Názov</span>:{' '}
                                    abc
                                </h1>
                            </div>
                            <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                <span className='font-bold'>rrrrr</span>
                            </p>
                            <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                <span className='font-bold'>Autor / ka</span>:{' '}
                                rrrrr
                            </p>
                            <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                <span className='font-bold'> Rok</span>: 2222
                            </p>
                            <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                <span className='font-bold'> Počet Strán</span>:{' '}
                                2222
                            </p>
                            <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                <span className='font-bold'>Počet Kusov</span>:{' '}
                                1
                            </p>
                            <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                <span className='font-bold'>Kategória</span>:{' '}
                                abc
                            </p>
                            <div>
                                <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed'>
                                    <span className='font-bold'>
                                        {' '}
                                        Kniha je:
                                    </span>{' '}
                                    <span className='text-red-800'>
                                        Nedostupná
                                    </span>
                                    <br />
                                </p>
                            </div>

                            <hr className='mt-6' />
                            <div className='flex'>
                            <Button variant={"default"} size={"lg"} className='mt-5'>
                                <Link href="/books">Návrat na knihy</Link>
                            </Button>
                            <Button variant={"secondary"} size={"lg"} className='mt-5 ml-4'>
                                Požičať knihu
                            </Button>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookDetail;
