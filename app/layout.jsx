import './globals.css';

export const metadata = {
  title: 'Peachy Builders',
  description: 'Hardscape, Landscape & Exterior Design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}