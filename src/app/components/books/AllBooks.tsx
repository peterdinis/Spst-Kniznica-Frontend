'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import ScrollToTop from 'react-scroll-to-top';
import * as api from '@/api/queries/bookQueries';
import GlobalCard from '../shared/GlobalCard';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';
import { BookType } from '@/types/BookTypes';
import Empty from '../shared/Empty';

const AllBooks: FC = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['allBooks'],
        queryFn: api.allBooks,
    });

    if (isLoading) {
        return <Loader2 className='h-8 w-8 animate-spin' />;
    }

    if (isError) {
        return (
            <GlobalErrorComponent
                statusCode='400'
                message='Nepodarilo sa načítať knihy'
            />
        );
    }

    return (
        <>
            <Header text='Všetky knihy' />
            {data.length === 0 && (
                <Empty text='Žiadna kniha nebola nájdená v databáze' />
            )}
            <div className='container mx-auto mt-8 grid gap-8 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data &&
                    data.map((item: BookType) => {
                        return (
                            <GlobalCard
                                image={item.image}
                                linkName='books'
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

export default AllBooks;
