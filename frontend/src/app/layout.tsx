import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

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
                {children}
                <div className={cn(
                    'absolute bottom-[20px] left-1/2 -translate-x-1/2',
                )}>
                    <Navigation />
                </div>
            </body>
        </html>
    );
}
