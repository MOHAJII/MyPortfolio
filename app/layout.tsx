import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { ProfessionSwitcher } from '@/components/profession-switcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammed HAJI - Portfolio',
  description: 'Software Engineer portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <div className="w-full px-4 md:px-6 lg:px-8">
            <main className="w-full max-w-7xl mx-auto">
              {children}
            </main>
            <ProfessionSwitcher />
          </div>
        </Providers>
      </body>
    </html>
  );
}