import { FC } from 'react';

interface IHeaderProps {
    text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
    return (
        <h1 className='mt-5 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
            {text}
        </h1>
    );
};

export default Header;
