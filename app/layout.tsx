import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CIVIA | Propuesta de Inteligencia Ciudadana',
  description: 'Propuesta tecnológica para transformar conversaciones digitales en información estructurada para análisis y gestión.',
  openGraph: { title: 'CIVIA', description: 'De conversaciones digitales a inteligencia ciudadana.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
