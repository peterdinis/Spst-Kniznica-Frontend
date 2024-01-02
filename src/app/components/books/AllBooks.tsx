'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import ScrollToTop from 'react-scroll-to-top';
import * as api from "@/api/queries/bookQueries";
import GlobalCard from '../shared/GlobalCard';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';

const AllBooks: FC = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["allBooks"],
        queryFn: api.allBooks
    })

    if(isLoading) {
        return <Loader2 className='animate-spin h-8 w-8' />
    }

    if(isError) {
        return <GlobalErrorComponent statusCode='400' message='Failed to load books' />
    }


    console.log(data);
    return (
        <>
            <Header text='Všetky knihy' />
            <div className='container mx-auto mt-8 grid gap-8 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <GlobalCard />
                <GlobalCard />
                <GlobalCard />
                <GlobalCard />
            </div>
            <ScrollToTop />
        </>
    );
};

export default AllBooks;
