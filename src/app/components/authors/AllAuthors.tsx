"use client"

import { FC } from 'react';
import Header from '../shared/Header';
import ScrollToTop from 'react-scroll-to-top';
import GlobalCard from '../shared/GlobalCard';
import * as api from "@/api/queries/authorsQueries"
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import GlobalErrorComponent from '../shared/GlobalErrorComponent';
import { CategoryType } from '@/types/CategoryTypes';
import Empty from '../shared/Empty';

const AllAuthors: FC = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["allAuthors"],
        queryFn: api.getAuthors
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
            {data.length === 0 && <Empty text='Žiaden spisovateľ nie je v databáze' />}
        </>
    );
};

export default AllAuthors;
