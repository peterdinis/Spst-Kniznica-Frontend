import { FC } from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { IGlobalCardType } from '@/types/GlobalTypes';
import Link from 'next/link';


const GlobalCard: FC<IGlobalCardType> = ({name, description, id, linkName}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button variant={'default'} size='lg'>
                    <Link href={`/${linkName}/${id}`}>Detail <MoveRight className='ml-2' /></Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default GlobalCard;
