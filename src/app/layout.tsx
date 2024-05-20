import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Oliver Xu',
  description: 'Personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main className='flex flex-col min-h-screen'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
