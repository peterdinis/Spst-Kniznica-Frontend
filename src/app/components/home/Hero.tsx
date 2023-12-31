'use client';

import { Button } from '@/components/ui/button';
import { FC } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import * as api from '@/api/queries/exampleQuery';
import { Loader2 } from 'lucide-react';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';
import { queryClient } from '@/api/queryClient';
import Image from 'next/image';
import schollImage from '../../../../public/img/school.png';

const Hero: FC = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['exampleRequest'],
        queryFn: api.exampleQueryRequst,
    });

    if (isLoading) {
        return <Loader2 className='h-8 w-8 animate-spin' />;
    }

    if (isError) {
        return (
            <GlobalErrorComponent
                statusCode='400'
                message='Example request failed'
            />
        );
    }

    queryClient.setQueryData(['example'], data);

    return (
        <>
            {!isLoading ? (
                <div className='container relative z-0 mx-auto px-4 xl:px-0'>
                    <div className='flex flex-col-reverse md:flex-row'>
                        <div className='md:w-3/5 md:pt-24 lg:py-32'>
                            <h1 className='f-f-i text-heading-color text-center text-3xl font-black leading-tight tracking-tighter text-gray-900 md:w-7/12 md:text-left lg:text-6xl xl:text-8xl'>
                                SPŠT Knižnica
                            </h1>
                            <h2 className='py-4 text-center text-lg text-gray-700 md:w-8/12 md:py-8 md:text-left lg:text-2xl'>
                                <q>
                                    Knihy sú jedinečne prenosné kúzlo - Stephen
                                    King
                                </q>
                            </h2>
                            <div className='flex w-full justify-center md:block'>
                                <Button size='lg1' variant={'default'}>
                                    <Link href='/books'>
                                        Zobraziť všekty knihy
                                    </Link>
                                </Button>
                                <Button
                                    className='ml-4'
                                    size='lg1'
                                    variant={'destructive'}
                                >
                                    <Link href='/books'>Školská stránka</Link>
                                </Button>
                            </div>
                        </div>
                        <div className='m-auto flex h-64 w-1/2 items-center overflow-hidden sm:w-2/5 md:h-auto'>
                            <Image
                                src={schollImage}
                                alt='Scholl homepage'
                                className='rounded-xl bg-transparent md:absolute md:-ml-28 md:w-1/2'
                                placeholder='blur'
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Hero;
