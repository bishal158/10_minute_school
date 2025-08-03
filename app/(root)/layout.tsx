import Header from "@/components/shared/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="w-full min-h-screen">
                {children}
            </main>
        </>
    );
}
