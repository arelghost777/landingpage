import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from 'next/font/google';

// Configurez la police Raleway avec les options nécessaires
const raleway = Raleway({ 
  subsets: ['latin'], // Sous-ensemble de caractères
  weight: ['400', '500', '600', '700'], // Poids nécessaires
  display: 'swap', // Évite le flash de texte invisible
  variable: '--font-raleway', // Optionnel: pour utiliser en variable CSS
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page",
  icons: "/frame1.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`raleway.className antialiased px-4 md:px-20`}
      >
        {children}
      </body>
    </html>
  );
}
