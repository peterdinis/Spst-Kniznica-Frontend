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

const CategoryCard: FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button variant={'default'} size='lg'>
                    Detail <MoveRight className='ml-2' />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CategoryCard;
