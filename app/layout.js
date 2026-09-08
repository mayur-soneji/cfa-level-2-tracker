import './globals.css';

export const metadata = {
  title: 'CFA Level II Tracker & Command Center',
  description: 'A local-first CFA Level II study tracker and readiness command center.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
