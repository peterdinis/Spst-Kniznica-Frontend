import { EmptyProps } from '@/types/GlobalTypes';
import { Ghost } from 'lucide-react';
import { FC } from 'react';

const Empty: FC<EmptyProps> = ({ text }: EmptyProps) => {
    return (
        <div className='mt-6 flex justify-center align-top'>
            <Ghost className='animate-ease-linear animate-normal animate-bounce' />
            <p className='font-bold'>{text}</p>
        </div>
    );
};

export default Empty;
