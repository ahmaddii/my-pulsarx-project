import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'PulsarX | Where Innovation Meets Excellence',
  description: 'PulsarX - We build innovative solutions for your business. Specializing in web development, app development, and design.',
  keywords: 'PulsarX, web development, app development, design, company website, professional services',
  icons: {icon: ('/favicon.png')}
  // Add favicon link here if you have one, e.g., icons: { icon: '/favicon.ico' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
