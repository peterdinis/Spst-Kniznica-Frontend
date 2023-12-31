"use client"

import { FC } from 'react';
import Header from '../shared/Header';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input, InputNumber } from '@/components/ui/input';
import ScrollToTop from 'react-scroll-to-top';
import {v4} from "uuid";
import { useToast } from '@/components/ui/use-toast';
import { createBookSchema } from '@/api/schemas/bookSchemas';
import { useMutation } from '@tanstack/react-query';
import * as mut from "@/api/mutations/bookMutations"

const CreateBook: FC = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof createBookSchema>>({
        resolver: zodResolver(createBookSchema),
        defaultValues: {
            id: v4() as unknown as number,
            name: '',
            description: '',
            authorName: '',
            pages: 0,
            status: '',
            year: '',
            image: '',
            quantity: 0,
        },
    });

    const {toast} = useToast();

    function onSubmit(values: z.infer<typeof createBookSchema>) {
        const createBookMutation = useMutation({
            mutationKey: ["createNewBook"],
            mutationFn: () => mut.createNewBook(values)
        })

        createBookMutation.mutate();

        toast({
            title: "Nová kniha bola vytvorená",
            duration: 2000,
            className: "bg-green-500"
        })
    }

    return (
        <>
            <Header text='Pridanie novej knihy' />
            <div className='mt-5 ml-4 mr-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Book Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Book name' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the book's name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Description' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the book's description.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='authorName'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Author name' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the author's name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='pages'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pages</FormLabel>
                                    <FormControl>
                                        <InputNumber placeholder='Pages' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the number of pages.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='status'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Status' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the book's status.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='year'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Year</FormLabel>
                                    <FormControl>
                                        <Input type='datetime-local' placeholder='Year' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the year.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='image'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Image URL' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the image URL.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='quantity'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input type='number' min={1} placeholder='Quantity' {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the quantity.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type='submit'>Submit</Button>
                    </form>
                </Form>
            </div>
            <ScrollToTop />
        </>
    );
};

export default CreateBook;