import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Providers } from '@/components/providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HealthSync AI - AI-Powered Health Insights',
  description: 'Take control of your health with AI-powered insights and personalized health recommendations.',
  keywords: 'health, AI, healthcare, wellness, fitness tracker, health analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-body bg-[#F8FAFC]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}