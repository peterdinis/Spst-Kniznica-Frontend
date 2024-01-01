'use client';

import { FC, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface IQueryClientProps {
    children?: ReactNode;
}

const QueryClientProviderComponet: FC<IQueryClientProps> = ({
    children,
}: IQueryClientProps) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default QueryClientProviderComponet;
