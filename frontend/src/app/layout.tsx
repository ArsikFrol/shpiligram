import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import ToasterProvider from "@/components/Providers/ToasterProvider";

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${nunitoSans.variable}`}>
            <body className="bg-bg w-full h-screen">
                <div className={cn(
                    "bg-container rounded-2xl shadow py-[20px] px-[30px]",
                    'w-[1200px] rounded-2xl h-[calc(100vh-150px)] mx-auto mt-[20px]',
                )}>
                    <Header />
                    {children}
                </div>
                <div className={cn(
                    'absolute bottom-[20px] left-1/2 -translate-x-1/2',
                )}>
                    <Navigation />
                </div>
                <ToasterProvider />
            </body>
        </html>
    );
}
