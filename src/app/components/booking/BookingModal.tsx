'use client';

import { FC, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import Header from '../shared/Header';

const BookingModal: FC = () => {
    const [open, setOpen] = useState(false);

    const { toast } = useToast();

    const handleOpenDialog = () => {
        setOpen(!open);
    };

    const handleBooking = (e: any) => {
        e.preventDefault();
        toast({
            title: 'Kniha bola úpsešné požičaná',
            duration: 2000,
            className: 'bg-green-500',
        });
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenDialog}>
            <DialogTrigger>Požičanie knihy</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <Header text='Požičanie knihy' />
                    </DialogTitle>
                    <DialogDescription>
                        <form>
                            <div className='mt-2'>
                                <Input
                                    type='text'
                                    placeholder='Meno a priezvisko osoby ktorá si chce požičať knihu'
                                />
                            </div>
                            <div className='mt-4'>
                                <Input type='text' placeholder='Názov knihy' />
                            </div>
                            <div className='mt-4'>
                                <Input type='date' placeholder='Od' />
                            </div>
                            <div className='mt-4'>
                                <Input type='do' placeholder='Meno' />
                            </div>
                            <div className='mt-8'>
                                <Button onClick={handleBooking}>
                                    Požičať knihu
                                </Button>
                            </div>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
