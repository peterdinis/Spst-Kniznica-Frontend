import { FC } from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IGlobalCardType } from '@/types/GlobalTypes';
import Link from 'next/link';

const GlobalCard: FC<IGlobalCardType> = ({
    name,
    description,
    id,
    linkName,
    image,
}) => {
    return (
        <Card>
            {!image ? (
                <></>
            ) : (
                <img
                    src={image as unknown as string}
                    alt={name as unknown as string}
                />
            )}
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Button variant={'default'} size='lg'>
                <Link href={`/${linkName}/${id}`}>Detail</Link>
            </Button>
        </Card>
    );
};

export default GlobalCard;
