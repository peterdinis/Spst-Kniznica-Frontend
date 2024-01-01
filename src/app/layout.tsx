import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/shared/Navbar';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    // TODO: Icon fix later
    title: 'SPŠT Knižnica',
    description: 'Generated by create next app',
    icons: {
        icon: [
            {
                href: 'https://www.spsbj.sk/wp-content/uploads/cropped-original-192x192.png',
                url: 'https://www.spsbj.sk/wp-content/uploads/cropped-original-192x192.png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    );
}
