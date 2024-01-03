'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import ScrollToTop from 'react-scroll-to-top';
import GlobalCard from '../shared/GlobalCard';
import * as api from '@/api/queries/authorsQueries';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';
import Empty from '../shared/Empty';
import { AuthorType } from '@/types/AuthorTypes';

const AllAuthors: FC = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['allAuthors'],
        queryFn: api.getAuthors,
    });

    if (isLoading) {
        return <Loader2 className='h-8 w-8 animate-spin' />;
    }

    if (isError) {
        return (
            <GlobalErrorComponent
                statusCode='400'
                message='Nepodailo sa nčítať autorov'
            />
        );
    }

    return (
        <>
            <Header text='Všetci spisovatelia' />
            {data.length === 0 && (
                <Empty text='Žiaden spisovateľ nie je v databáze' />
            )}
             <div className='container mx-auto mt-8 grid gap-8 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data &&
                    data.map((item: AuthorType) => {
                        return (
                            <GlobalCard
                                linkName='authors'
                                name={item.name}
                                description={item.authorDescription}
                                id={item.id}
                            />
                        );
                    })}
            </div>
            <ScrollToTop />
        </>
    );
};

export default AllAuthors;
