'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import ScrollToTop from 'react-scroll-to-top';
import GlobalCard from '../shared/GlobalCard';
import * as api from "@/api/queries/categoryQueries"
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';
import { CategoryType } from '@/types/CategoryTypes';
import Empty from '../shared/Empty';

const AllCategories: FC = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["allCategories"],
        queryFn: api.allCategories
    });

    if (isLoading) {
        return <Loader2 className='h-8 w-8 animate-spin' />;
    }

    if (isError) {
        return (
            <GlobalErrorComponent
                statusCode='400'
                message='Failed to load books'
            />
        );
    }

    return (
        <>
            <Header text='Všetky kategórie' />
            {data.length === 0 && <Empty text='Žiadna kategória nie je v databáze' />}
            <div className='container mx-auto mt-8 grid gap-8 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data &&
                    data.map((item: CategoryType) => {
                        return (
                            <GlobalCard
                                linkName='categories'
                                name={item.name}
                                description={item.description}
                                id={item.id}
                            />
                        );
                    })}
            </div>
            <ScrollToTop />
        </>
    );
};

export default AllCategories;
