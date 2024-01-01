"use client"

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

const BookingModal: FC = () => {
    const [open, setOpen] = useState(false);

    const {toast} = useToast();


    const handleOpenDialog = () => {
        setOpen(!open);
    }

    const handleBooking = () => {
        toast({
            title: "Kniha bola úpsešné požičaná",
            duration: 2000,
            className: "bg-green-500"
        })
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenDialog}>
            <DialogTrigger>Požičanie knihy</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Požičanie knihy</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.

                        <div className="mt-4">
                            <Button onClick={handleBooking}>Požičať knihu</Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
