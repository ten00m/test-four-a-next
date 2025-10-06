import './globals.css'
import ReduxProvider from "@/src/features/redux-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}
