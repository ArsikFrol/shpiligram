import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ToasterProvider from "@/components/Providers/ToasterProvider";
import { Metadata } from "next";

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Chats'
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${nunitoSans.variable}`}>
            <body className="bg-bg w-full h-[calc(100vh-40px)]">
                <div className={cn(
                    "bg-container rounded-2xl shadow py-[20px] px-[30px]",
                    'rounded-2xl h-[calc(100vh-150px)] mx-auto mt-[20px] mx-[20px]',
                )}>
                    {children}
                </div>
                <ToasterProvider />
            </body>
        </html>
    );
}
