// app/layout.tsx (or src/app/layout.tsx)
import Navbar from "@/src/components/Navbar"; 
import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        
        <main>
          {children}
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}