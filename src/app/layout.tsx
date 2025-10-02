import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Juan Galarraga | Desarrollador Web Full-Stack',
  description:
    'Desarrollador Web con 4+ años de experiencia en JavaScript, Node.js y React. Especialista en sistemas de alta concurrencia y arquitectura de microservicios para proyectos Fintech.',
  keywords:
    'Desarrollador Web Freelance, Full Stack Developer, Fintech, Alta Concurrencia, Node.js, React, JavaScript, Desarrollo Software, Portfolio Web, Microservicios, Juan Galarraga',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
