import Link from 'next/link';
import { FC } from 'react';

const NavbarItems: FC = () => {
    return (
        <>
            <li className='text-black text-xl'>
                <Link href='/'>Domov</Link>
            </li>
            <li className='text-black text-xl'>
                <Link href='/books'>Knihy</Link>
            </li>
            <li className='text-black text-xl'>
                <Link href='/categories'>Kategórie</Link>
            </li>
            <li className='text-black text-xl'>
                <Link href='/authors'>Spistovatelia</Link>
            </li>
            <li className='text-black text-xl'>
                <Link href='/student/login'>Žiak</Link>
            </li>
            <li className='text-black text-xl'>
                <Link href='/teacher/login'>Učiteľ</Link>
            </li>
        </>
    );
};

export default NavbarItems;