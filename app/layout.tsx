import type { Metadata } from 'next';
import { SessionProvider } from '@/components/SessionProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Antique Database',
  description: 'Organize and catalog your antique collection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
