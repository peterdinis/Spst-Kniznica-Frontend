"use client"

import { FC } from 'react';
import Header from '../shared/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../../api/queries/categoryQueries';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';
import { Loader2 } from 'lucide-react';
import ScrollToTop from 'react-scroll-to-top';

const CategoryDetailComponent: FC = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['categoryDetail', id],
        queryFn: () => api.getOneCategory(id as unknown as number),
    });

    if (isError) {
        return (
            <GlobalErrorComponent
                statusCode='404'
                message='Kategória nebola nájdená'
            />
        );
    }
    return (
        <>
            <Header text='Detail kategórie' />
            {isLoading && <Loader2 className='h-6 w-6 animate-spin' />}
            {!isLoading ? (
                <>
                    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
                        <div className='mt-4 border-gray-200'>
                            <dl>
                                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                                    <dt className='text-sm font-medium text-gray-500'>
                                        Meno kategórie
                                    </dt>
                                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                                        {data && data.name}
                                    </dd>
                                </div>
                                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                                    <dt className='text-sm font-medium text-gray-500'>
                                        Popis kategórie
                                    </dt>
                                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                                        {data && data.description}
                                    </dd>
                                </div>
                                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                                    <dt className='text-sm font-medium text-gray-500'>
                                        Knihy ktoré majú túto kategóriu
                                    </dt>
                                </div>
                            </dl>
                            <Button size={'lg'} variant={'default'}>
                                <Link href='/categories'>
                                    Späť na kategórie
                                </Link>
                            </Button>
                        </div>
                    </div>
                </>
            ) : null}
            <ScrollToTop />
        </>
    );
};

export default CategoryDetailComponent;
