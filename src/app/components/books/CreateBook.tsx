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
import { Input } from '@/components/ui/input';
import ScrollToTop from 'react-scroll-to-top';
import {v4} from "uuid";

const formSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    authorName: z.string(),
    pages: z.number().int(),
    status: z.string(),
    year: z.string().optional(),
    image: z.string().optional(),
    quantity: z.number().int(),
});

const CreateBook: FC = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
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

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        // You can perform actions with the form values here, like sending them to an API or processing them.
        // For instance, you can use the router to navigate to another page:
        // router.push('/some-other-page');
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
                                        <Input type='number' placeholder='Pages' {...field} />
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
                                        <Input type='number' placeholder='Quantity' {...field} />
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