import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <h1 className="text-red-500">I'm blue!</h1> */}
    </html>
  );
};