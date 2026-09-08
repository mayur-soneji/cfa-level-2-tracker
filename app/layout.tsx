import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'CFA Level II Tracker', description: 'Study Tracker & Command Center' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
