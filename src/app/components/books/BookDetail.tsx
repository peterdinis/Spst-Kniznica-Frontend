"use client"

import { FC } from 'react';
import Header from '../shared/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import BookingModal from '../booking/BookingModal';
import * as api from '../../../api/queries/bookQueries';
import { useQuery } from '@tanstack/react-query';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';
import { Loader2 } from 'lucide-react';
import {format} from "date-fns";
import ScrollToTop from 'react-scroll-to-top';

const BookDetail: FC = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['bookDetail', id],
        queryFn: () => api.getOneBook(id as unknown as number),
    });

    if (isError) {
        return (
            <GlobalErrorComponent
                statusCode='404'
                message='Kniha nebola nájdená'
            />
        );
    }
    return (
        <>
            <Header text='Detail knihy' />
            {isLoading && <Loader2 className='h-6 w-6 animate-spin' />}

            {!isLoading ? (
                <>
                    <section className='body-font mt-2 overflow-hidden bg-white text-gray-700'>
                        <div className='container mx-auto px-5 py-12'>
                            <div className='mx-auto flex flex-wrap lg:w-4/5'>
                                <img
                                    alt={data && data.name}
                                    className='w-full rounded-lg border object-cover object-center drop-shadow-md lg:w-1/2'
                                    src={data &&data.image}
                                />
                                <div className='mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10'>
                                    <div>
                                        <h1 className='title-font mb-1 text-4xl font-medium text-gray-900'>
                                            <span className='font-bold'>
                                                Názov
                                            </span>
                                            : {data && data.name}
                                        </h1>
                                    </div>
                                    <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                        <span className='font-bold'>Krátky popis: {data && data.description}</span>
                                    </p>
                                    <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                        <span className='font-bold'>
                                            Autor / ka
                                        </span>
                                        : {data && data.authorName}
                                    </p>
                                    <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                        <span className='font-bold'> Rok</span>:
                                        {data && format(data.year, 'dd-MM-yyyy')}
                                    </p>
                                    <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                        <span className='font-bold'>
                                            {' '}
                                            Počet Strán
                                        </span>
                                        : {data &&data.description}
                                    </p>
                                    <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                        <span className='font-bold'>
                                            Počet Kusov
                                        </span>
                                        : {data && data.quantity}
                                    </p>
                                    <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed text-gray-800'>
                                        <span className='font-bold'>
                                            Kategória
                                        </span>
                                        : rrrr
                                    </p>
                                    <div>
                                        <p className='mb-4 mt-3 text-2xl font-light  leading-relaxed'>
                                            <span className='font-bold'>
                                                {' '}
                                                Kniha je:
                                            </span>{' '}
                                            <span className='text-red-800'>
                                               {data && data.status}
                                            </span>
                                            <br />
                                        </p>
                                    </div>

                                    <hr className='mt-6' />
                                    <div className='flex'>
                                        <Button
                                            variant={'default'}
                                            size={'lg'}
                                            className='mt-5'
                                        >
                                            <Link href='/books'>
                                                Návrat na knihy
                                            </Link>
                                        </Button>
                                        <Button
                                            variant={'secondary'}
                                            size={'lg'}
                                            className='ml-4 mt-5'
                                        >
                                            <BookingModal />
                                        </Button>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
            <ScrollToTop />
        </>
    );
};

export default BookDetail;
